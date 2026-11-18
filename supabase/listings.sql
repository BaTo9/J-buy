-- ============================================================
--  JAPANBUY — «БЭЛЭН БАРАА» (listings) хэсэг: НЭГ УДАА ажиллуулах SQL
--  Хаана: Supabase Dashboard → SQL Editor → New query → доорхыг
--  бүхлээр нь хуулж тавиад Run дарна. (schema.sql-ийн 5-р хэсэгтэй ижил.)
--  Шаардлага: schema.sql-ийн үндсэн хэсэг (profiles, is_admin())
--  өмнө нь ажилласан байх ёстой.
-- ============================================================

-- 1) Listings хүснэгт
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

-- 2) Зургийн Storage bucket: нийтэд уншигдана, зөвхөн админ байршуулна/устгана
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
