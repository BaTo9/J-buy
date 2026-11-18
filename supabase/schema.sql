-- ============================================================
--  JAPANBUY — Supabase schema (Энийг Supabase SQL Editor-т нэг удаа ажиллуулна)
-- ============================================================

-- 1) Profiles: бүртгүүлсэн хэрэглэгч бүр + админ эрх (role)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  name text,
  role text not null default 'user',
  created_at timestamptz not null default now()
);

-- Шинэ хэрэглэгч бүртгүүлэхэд profile автоматаар үүснэ
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'name', ''));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 2) Orders: захиалгууд
create table if not exists public.orders (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id),
  email text,
  name text,
  phone text,
  address text,
  items jsonb not null,
  total int not null,
  payment_method text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

-- 3) Аюулгүй байдал (RLS)
alter table public.profiles enable row level security;
alter table public.orders enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

drop policy if exists "read own profile" on public.profiles;
create policy "read own profile" on public.profiles
  for select using (auth.uid() = id or public.is_admin());

drop policy if exists "update own profile" on public.profiles;
create policy "update own profile" on public.profiles
  for update using (auth.uid() = id);

drop policy if exists "insert own order" on public.orders;
create policy "insert own order" on public.orders
  for insert with check (auth.uid() = user_id);

drop policy if exists "read own orders" on public.orders;
create policy "read own orders" on public.orders
  for select using (auth.uid() = user_id or public.is_admin());

drop policy if exists "admin updates orders" on public.orders;
create policy "admin updates orders" on public.orders
  for update using (public.is_admin());

-- 4) Role хамгаалалт (2026-11-02): бүртгүүлсэн хэрэглэгч API-аар өөрийн
--    profile-аа шинэчлэхдээ role-оо 'admin' болгож өсгөж чадахгүй.
--    SQL Editor / service_role-оос хийсэн өөрчлөлт хэвээр ажиллана.
create or replace function public.protect_profile_role()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role
     and current_user not in ('postgres','service_role','supabase_admin')
     and not public.is_admin() then
    new.role := old.role;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role
  before update on public.profiles
  for each row execute function public.protect_profile_role();

-- ============================================================
--  АДМИН БОЛГОХ: сайтдаа эхлээд өөрийн имэйлээр бүртгүүлсний дараа
--  доорх мөрийг өөрийн имэйлээр сольж ажиллуулна:
--
--  update public.profiles set role = 'admin'
--  where email = 'TANII_EMAIL@EXAMPLE.COM';
-- ============================================================

-- ============================================================
--  5) Listings: «БЭЛЭН БАРАА» хэсэг — админ өөрийн бараагаа
--     сайтаасаа шууд оруулдаг (Mercari маягийн) жагсаалт.
--     Зургийг Storage-ийн 'listing-images' bucket-д хадгална.
--     (Энэ хэсгийг дангаар нь listings.sql файлаар ч ажиллуулж болно.)
-- ============================================================
create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  condition text,
  description text,
  price_jpy int not null,
  delivery_time text,
  weight_kg numeric,
  images text[] not null default '{}',
  status text not null default 'active' check (status in ('active', 'sold')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.listings enable row level security;

-- Хэн ч (зочин ч) жагсаалтыг уншиж болно — сайт өөрөө шүүж харуулна
drop policy if exists "listings are public" on public.listings;
create policy "listings are public" on public.listings
  for select using (true);

-- Нэмэх/засах/устгах нь зөвхөн админ (profiles.role = 'admin')
drop policy if exists "admin inserts listings" on public.listings;
create policy "admin inserts listings" on public.listings
  for insert with check (public.is_admin());

drop policy if exists "admin updates listings" on public.listings;
create policy "admin updates listings" on public.listings
  for update using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin deletes listings" on public.listings;
create policy "admin deletes listings" on public.listings
  for delete using (public.is_admin());

-- updated_at автоматаар шинэчлэгдэнэ
create or replace function public.touch_listings_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists listings_touch_updated_at on public.listings;
create trigger listings_touch_updated_at
  before update on public.listings
  for each row execute function public.touch_listings_updated_at();

-- Зургийн bucket: нийтэд уншигдана, зөвхөн админ байршуулна/устгана
insert into storage.buckets (id, name, public)
values ('listing-images', 'listing-images', true)
on conflict (id) do nothing;

drop policy if exists "listing images public read" on storage.objects;
create policy "listing images public read" on storage.objects
  for select using (bucket_id = 'listing-images');

drop policy if exists "admin uploads listing images" on storage.objects;
create policy "admin uploads listing images" on storage.objects
  for insert with check (bucket_id = 'listing-images' and public.is_admin());

drop policy if exists "admin updates listing images" on storage.objects;
create policy "admin updates listing images" on storage.objects
  for update using (bucket_id = 'listing-images' and public.is_admin())
  with check (bucket_id = 'listing-images' and public.is_admin());

drop policy if exists "admin deletes listing images" on storage.objects;
create policy "admin deletes listing images" on storage.objects
  for delete using (bucket_id = 'listing-images' and public.is_admin());
