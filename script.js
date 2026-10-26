/**
 * ============================================================
 *  JAPANBUY - Product Config (ЭНД ЗӨВХӨН ӨӨРЧИЛНӨ)
 * ============================================================
 */
const PRODUCTS = [
    { id: 1, brand: 'UNIQLO', name: 'Dry Sweat Hoodie', price: 2990, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80', desc: 'Хөнгөн, дулаан, чийг шингээгч Dry технологитой цамц.' },
    { id: 2, brand: 'UNIQLO', name: 'Ultra Light Down Jacket', price: 5990, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80', desc: 'Хөнгөн жинтэй, дулаан хадгалах чадвартай пуужин.' },
    { id: 3, brand: 'UNIQLO', name: 'AIRism T-Shirt', price: 1490, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', desc: 'Хурдан хатаадаг, амьсгалдаг AIRism технологи.' },
    { id: 4, brand: 'UNIQLO', name: 'Fleece Jacket', price: 3990, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80', desc: 'Зөөлөн, дулаан Fleece материал.' },
    { id: 5, brand: 'UNIQLO', name: 'Chino Pants', price: 3490, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', desc: 'Цэвэрхэн, тохиромжтой chino өмд.' },
    { id: 6, brand: 'GU', name: 'Sweat Pullover', price: 2990, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80', desc: 'Зөөлөн, тохь тухтай Sweat цамц.' },
    { id: 7, brand: 'GU', name: 'Oversized Hoodie', price: 3490, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80', desc: 'Орчин үеийн oversize загвар.' },
    { id: 8, brand: 'GU', name: 'Denim Jacket', price: 4990, img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80', desc: 'Сонгодог denim куртик.' },
    { id: 9, brand: 'GU', name: 'Wide Pants', price: 2990, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', desc: 'Өргөн, эвтэйхэн өмд.' },
    { id: 10, brand: 'ZARA', name: 'Wool Coat', price: 12990, img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80', desc: 'Өндөр чанартай ноосон пальто.' },
    { id: 11, brand: 'ZARA', name: 'Leather Jacket', price: 15990, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', desc: 'Жинхэнэ арьсан куртик.' },
    { id: 12, brand: 'ZARA', name: 'Knit Sweater', price: 5990, img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80', desc: 'Нэхмэл дулаан цамц.' },
    { id: 13, brand: 'ZARA', name: 'Pleated Skirt', price: 4990, img: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?w=400&q=80', desc: 'Эвхэгдээ банзал.' },
    { id: 14, brand: 'H&M', name: 'Basic T-Shirt', price: 1490, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', desc: 'Энгийн, тохиромжтой цамц.' },
    { id: 15, brand: 'H&M', name: 'Slim Fit Jeans', price: 3990, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80', desc: 'Slim fit жинсэн өмд.' },
    { id: 16, brand: 'H&M', name: 'Cotton Hoodie', price: 3490, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80', desc: '100% хөвөн hoodie.' },
    { id: 17, brand: 'H&M', name: 'Summer Dress', price: 4490, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80', desc: 'Зуны хөнгөн даашинз.' },
    { id: 18, brand: 'GAP', name: 'Logo Hoodie', price: 4990, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80', desc: 'GAP логотой сонгодог hoodie.' },
    { id: 19, brand: 'GAP', name: 'Khaki Pants', price: 4490, img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80', desc: 'Сонгодог khaki өмд.' },
    { id: 20, brand: 'GAP', name: 'Denim Shirt', price: 3990, img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80', desc: 'Denim цамц.' }
];

const BRAND_COLORS = {
    'UNIQLO': '#FF0000', 'GU': '#0033A0', 'ZARA': '#000000',
    'H&M': '#E50010', 'GAP': '#002F6C'
};

const SHIPPING_FEE = 1500;
const EXCHANGE_RATE = 70; // 1 JPY ≈ 70 MNT

// ================= STATE =================
let currentLang = localStorage.getItem('lang') || 'mn';
let currentTheme = localStorage.getItem('theme') || 'light';
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
let currentBrandFilter = 'all';
let currentSearchQuery = '';
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let selectedProduct = null;
let selectedSize = 'M';
let selectedColor = 'black';
let selectedQty = 1;

// ================= TRANSLATIONS (БҮРЭН) =================
const translations = {
    mn: {
        // Header
        search_placeholder: 'Бараа хайх...',
        // Nav
        nav_home: 'Нүүр', nav_products: 'Бараанууд', nav_features: 'Давуу тал', nav_contact: 'Холбоо барих',
        // Hero
        hero_title: 'ТОКИО ГАЗАРЛАЛТАЙ ШУУД КАРГО',
        hero_desc: 'Японы шилдэг брэндүүдээс шууд худалдан аваарай. Хурдан, найдвартай, жинхэнэ.',
        btn_shop_now: 'Одоо худалдаж авах',
        // Products
        brands_title: 'Бараанууд', brand_all: 'Бүгд',
        login_required_title: 'Барааг үзэхийн тулд нэвтэрнэ үү',
        login_required_desc: 'Манай дэлгүүрийн бүх барааг үзэж, захиалга хийхийн тулд та эхлээд нэвтрэх шаардлагатай.',
        product_count: 'бараа', no_products: 'Бараа олдсонгүй',
        // Features
        feat_main_title: 'БИДНИЙ ДАВУУ ТАЛ', feat_subtitle: 'Яагаад JAPANBUY-аар сонгох гэж?',
        feat1_title: '100% Оригинал Баталгаа', feat1_desc: 'Токио хот дахь албан ёсны брэндийн дэлгүүрээс шууд худалдан авдаг.',
        feat2_title: 'Түргэн Шуурхай Карго', feat2_desc: 'Долоо хоног бүрийн товлосон нислэгээр Улаанбаатарт хүргэнэ.',
        feat3_title: 'Ил Тод Тооцоолол', feat3_desc: 'Японы жинхэнэ үнэ болон каргоны төлбөрийг тодорхой дүнгээр тооцно.',
        // Steps
        steps_main_title: 'ХЯЛБАР 4 АЛХАМ', steps_subtitle: 'Захиалах Заавар & Төлбөрийн Төрөл',
        step1_title: '1. Хувцасаа сонгох', step1_desc: 'Каталогоос дуртай бараагаа сонгоно уу.',
        step2_title: '2. Размер заах', step2_desc: 'Размер, өнгө, тоо ширхэгийг сонгоно.',
        step3_title: '3. Төлбөр төлөх', step3_desc: 'Visa, Bank, PayPal-ээр төлбөрөө төлнө.',
        step4_title: '4. Карго хүлээн авах', step4_desc: 'Улаанбаатар хот дотор хүргэж өгнө.',
        // Contact
        contact_title: 'ХОЛБОО БАРИХ', contact_subtitle: 'Бидэнтэй Холбогдох',
        contact_email: 'Имэйл', contact_phone: 'Утас',
        // Footer
        footer_desc: 'Японы топ брэнд хувцсыг шууд захиалан авах хамгийн найдвартай зуучлал ба карго платформ.',
        footer_pages: 'Хуудаснууд', footer_products: 'Зарагдаж буй хувцаснууд',
        footer_social: 'Сошиал Холбоос', footer_facebook: 'Facebook Page',
        footer_instagram: 'Instagram Profile', footer_line: 'LINE Official',
        footer_copyright: '© 2026 JAPANBUY Proxy Shopping App. Бүх эрх хуулиар хамгаалагдсан.',
        // Auth
        btn_login: 'Нэвтрэх', btn_register: 'Бүртгүүлэх',
        form_email: 'Имэйл', form_password: 'Нууц үг', form_fullname: 'Овог нэр',
        placeholder_email: 'email@example.com', placeholder_password: '••••••••', placeholder_name: 'Бат Болд',
        // Checkout
        checkout_title: 'Төлбөр тооцоо', checkout_order_info: 'Захиалгын мэдээлэл',
        checkout_subtotal: 'Дэд бараа үнэ', checkout_total: 'Нийт дүн (JPY)',
        free_shipping: 'Карго (олирлоор)',
        ship_info: 'Хүргэлтийн мэдээлэл', pay_info: 'Төлбөрийн мэдээлэл',
        form_name: 'Овог нэр *', form_phone: 'Утас *', form_address: 'Хаяг *',
        form_card_number: 'Картын дугаар', form_expiry: 'Хугацаа',
        placeholder_phone: '0901234567', placeholder_address: 'Улаанбаатар, Сүхбаатар дүүрэг...',
        placeholder_card: '0000 0000 0000 0000', placeholder_expiry: 'MM/YY', placeholder_cvv: '123',
        btn_confirm: '✈️ Захиалга баталгаажуулах', btn_back_short: '← Нүүр хуудас',
        // Cart
        cart_title: '🛒 Сагс', cart_empty_text: 'Сагс хоосон байна',
        cart_empty_desc: 'Бараа нэмэхийн тулд дэлгүүр рүү буцна уу',
        cart_total: 'Нийт дүн', btn_checkout: 'Төлбөр тооцоо', btn_continue: 'Худалдан авалт үргэлжлүүлэх',
        btn_add_cart: 'Сагсанд нэмэх',
        // Product detail
        detail_size: 'Размер', detail_color: 'Өнгө', detail_qty: 'Тоо ширхэг',
        // Success
        success_title: 'Захиалга амжилттай илгээгдлээ!',
        success_order_label: 'Захиалгын дугаар:',
        success_desc: 'Таны захиалгын мэдээлэл манай системд бүртгэгдлээ. Бид тантай удахгүй холбогдох болно.',
        btn_back_home: 'Нүүр хуудас руу буцах',
        // Toasts
        msg_login_required: 'Эхлээд нэвтэрнэ үү!',
        msg_login_success: 'Амжилттай нэвтэрлээ! 🎉',
        msg_register_success: 'Амжилттай бүртгүүллээ! 🎉',
        msg_added_to_cart: 'Сагсанд нэмэгдлээ! 🛒',
        msg_cart_empty: 'Таны сагс хоосон байна',
        msg_already_logged: 'Та аль хэдийн нэвтэрсэн байна!',
        msg_logout_success: 'Амжилттай гарлаа!',
        msg_fill_fields: 'Хүргэлтийн мэдээллийг бүрэн бөглөнө үү!',
        msg_order_success: 'Захиалга амжилттай баталгаажлаа!',
        msg_confirm_logout: 'Гарах уу?',
        msg_confirm_logout_yes: 'Тийм', msg_confirm_logout_no: 'Үгүй'
    },
    en: {
        search_placeholder: 'Search products...',
        nav_home: 'Home', nav_products: 'Products', nav_features: 'Features', nav_contact: 'Contact',
        hero_title: 'DIRECT CARGO FROM TOKYO',
        hero_desc: 'Shop directly from Japan\'s top brands. Fast, reliable, authentic.',
        btn_shop_now: 'Shop Now',
        brands_title: 'Products', brand_all: 'All',
        login_required_title: 'Please login to view products',
        login_required_desc: 'You need to login first to view and order products from our store.',
        product_count: 'items', no_products: 'No products found',
        feat_main_title: 'OUR ADVANTAGES', feat_subtitle: 'Why choose JAPANBUY?',
        feat1_title: '100% Authentic Guarantee', feat1_desc: 'Purchased directly from official brand stores in Tokyo.',
        feat2_title: 'Fast Cargo Delivery', feat2_desc: 'Delivered to Ulaanbaatar via weekly scheduled flights.',
        feat3_title: 'Transparent Pricing', feat3_desc: 'True Japanese prices and cargo fees clearly calculated.',
        steps_main_title: 'EASY 4 STEPS', steps_subtitle: 'Ordering Guide & Payment Types',
        step1_title: '1. Choose Your Clothes', step1_desc: 'Select your favorite items from the catalog.',
        step2_title: '2. Select Size', step2_desc: 'Choose size, color, and quantity.',
        step3_title: '3. Make Payment', step3_desc: 'Pay via Visa, Bank, or PayPal.',
        step4_title: '4. Receive Cargo', step4_desc: 'Delivered within Ulaanbaatar city.',
        contact_title: 'CONTACT US', contact_subtitle: 'Get in Touch',
        contact_email: 'Email', contact_phone: 'Phone',
        footer_desc: 'The most reliable proxy shopping and cargo platform for Japan\'s top brand clothing.',
        footer_pages: 'Pages', footer_products: 'Available Clothes',
        footer_social: 'Social Links', footer_facebook: 'Facebook Page',
        footer_instagram: 'Instagram Profile', footer_line: 'LINE Official',
        footer_copyright: '© 2026 JAPANBUY Proxy Shopping App. All rights reserved.',
        btn_login: 'Login', btn_register: 'Register',
        form_email: 'Email', form_password: 'Password', form_fullname: 'Full Name',
        placeholder_email: 'email@example.com', placeholder_password: '••••••••', placeholder_name: 'John Doe',
        checkout_title: 'Checkout', checkout_order_info: 'Order Information',
        checkout_subtotal: 'Subtotal', checkout_total: 'Total (JPY)',
        free_shipping: 'Shipping (approx.)',
        ship_info: 'Shipping Information', pay_info: 'Payment Information',
        form_name: 'Full Name *', form_phone: 'Phone *', form_address: 'Address *',
        form_card_number: 'Card Number', form_expiry: 'Expiry',
        placeholder_phone: '0901234567', placeholder_address: 'Ulaanbaatar, Sukhbaatar district...',
        placeholder_card: '0000 0000 0000 0000', placeholder_expiry: 'MM/YY', placeholder_cvv: '123',
        btn_confirm: '✈️ Confirm Order', btn_back_short: '← Home',
        cart_title: '🛒 Cart', cart_empty_text: 'Your cart is empty',
        cart_empty_desc: 'Go back to shop and add items',
        cart_total: 'Total', btn_checkout: 'Checkout', btn_continue: 'Continue Shopping',
        btn_add_cart: 'Add to Cart',
        detail_size: 'Size', detail_color: 'Color', detail_qty: 'Quantity',
        success_title: 'Order Successfully Placed!',
        success_order_label: 'Order number:',
        success_desc: 'Your order has been registered. We will contact you soon.',
        btn_back_home: 'Back to Home',
        msg_login_required: 'Please login first!',
        msg_login_success: 'Logged in successfully! 🎉',
        msg_register_success: 'Registered successfully! 🎉',
        msg_added_to_cart: 'Added to cart! 🛒',
        msg_cart_empty: 'Your cart is empty',
        msg_already_logged: 'You are already logged in!',
        msg_logout_success: 'Logged out successfully!',
        msg_fill_fields: 'Please fill all shipping fields!',
        msg_order_success: 'Order confirmed successfully!',
        msg_confirm_logout: 'Logout?',
        msg_confirm_logout_yes: 'Yes', msg_confirm_logout_no: 'No'
    },
    jp: {
        search_placeholder: '商品を検索...',
        nav_home: 'ホーム', nav_products: '商品', nav_features: '強み', nav_contact: 'お問い合わせ',
        hero_title: '東京から直接カーゴ',
        hero_desc: '日本のトップブランドから直接購入。迅速、信頼、本物。',
        btn_shop_now: '今すぐ購入',
        brands_title: '商品', brand_all: 'すべて',
        login_required_title: '商品を見るにはログインしてください',
        login_required_desc: '商品を見て注文するには、まずログインする必要があります。',
        product_count: '商品', no_products: '商品が見つかりません',
        feat_main_title: '私たちの強み', feat_subtitle: 'なぜJAPANBUYを選ぶのか？',
        feat1_title: '100% 正規品保証', feat1_desc: '東京の公式ブランド店から直接購入しています。',
        feat2_title: '迅速なカーゴ配送', feat2_desc: '毎週の定期便でウランバートルへお届けします。',
        feat3_title: '透明な価格計算', feat3_desc: '日本の実際の価格と送料を明確に計算します。',
        steps_main_title: '簡単4ステップ', steps_subtitle: 'ご注文ガイド & お支払い方法',
        step1_title: '1. 服を選ぶ', step1_desc: 'カタログからお気に入りの商品を選んでください。',
        step2_title: '2. サイズを指定', step2_desc: 'サイズ、色、数量を選択します。',
        step3_title: '3. お支払い', step3_desc: 'Visa、銀行、PayPalでお支払い。',
        step4_title: '4. カーゴを受け取る', step4_desc: 'ウランバートル市内でお届けします。',
        contact_title: 'お問い合わせ', contact_subtitle: 'お気軽にご連絡ください',
        contact_email: 'メール', contact_phone: '電話',
        footer_desc: '日本のトップブランド衣料品を直接注文できる最も信頼できる代行・カーゴプラットフォーム。',
        footer_pages: 'ページ', footer_products: '販売中の衣料品',
        footer_social: 'ソーシャルリンク', footer_facebook: 'Facebookページ',
        footer_instagram: 'Instagramプロフィール', footer_line: 'LINE公式',
        footer_copyright: '© 2026 JAPANBUY Proxy Shopping App. 全著作権所有。',
        btn_login: 'ログイン', btn_register: '新規登録',
        form_email: 'メール', form_password: 'パスワード', form_fullname: '氏名',
        placeholder_email: 'email@example.com', placeholder_password: '••••••••', placeholder_name: '山田 太郎',
        checkout_title: 'お支払い', checkout_order_info: 'ご注文情報',
        checkout_subtotal: '小計', checkout_total: '合計 (JPY)',
        free_shipping: '送料（概算）',
        ship_info: '配送情報', pay_info: 'お支払い情報',
        form_name: '氏名 *', form_phone: '電話 *', form_address: '住所 *',
        form_card_number: 'カード番号', form_expiry: '有効期限',
        placeholder_phone: '0901234567', placeholder_address: 'ウランバートル、スフバートル区...',
        placeholder_card: '0000 0000 0000 0000', placeholder_expiry: 'MM/YY', placeholder_cvv: '123',
        btn_confirm: '✈️ 注文を確定する', btn_back_short: '← ホーム',
        cart_title: '🛒 カート', cart_empty_text: 'カートは空です',
        cart_empty_desc: 'ショップに戻って商品を追加してください',
        cart_total: '合計', btn_checkout: 'お支払い', btn_continue: '買い物を続ける',
        btn_add_cart: 'カートに追加',
        detail_size: 'サイズ', detail_color: '色', detail_qty: '数量',
        success_title: 'ご注文ありがとうございました！',
        success_order_label: '注文番号:',
        success_desc: 'ご注文はシステムに登録されました。まもなくご連絡いたします。',
        btn_back_home: 'ホームに戻る',
        msg_login_required: 'まずログインしてください！',
        msg_login_success: 'ログインしました！ 🎉',
        msg_register_success: '登録しました！ 🎉',
        msg_added_to_cart: 'カートに追加しました！ 🛒',
        msg_cart_empty: 'カートは空です',
        msg_already_logged: 'すでにログインしています！',
        msg_logout_success: 'ログアウトしました！',
        msg_fill_fields: '配送情報をすべて入力してください！',
        msg_order_success: '注文が確定しました！',
        msg_confirm_logout: 'ログアウトしますか？',
        msg_confirm_logout_yes: 'はい', msg_confirm_logout_no: 'いいえ'
    }
};

// ================= DOM =================
const $ = (id) => document.getElementById(id);
const htmlEl = document.documentElement;
const themeToggleBtn = $('theme-toggle');
const langSelect = $('lang-select');
const menuBtn = $('menu-btn');
const closeBtn = $('close-btn');
const mobileMenu = $('mobile-menu');
const overlay = $('overlay');
const homeView = $('home-view');
const checkoutView = $('checkout-view');
const authModal = $('auth-modal');
const loginForm = $('login-form');
const registerForm = $('register-form');
const tabLogin = $('tab-login');
const tabRegister = $('tab-register');
const productModal = $('product-modal');
const cartModal = $('cart-modal');
const successModal = $('success-modal');
const loginPrompt = $('login-prompt');
const productsWrapper = $('products-wrapper');
const productGrid = $('product-grid');
const productCount = $('product-count');
const cartBadge = $('cart-badge');
const cartItemsContainer = $('cart-items-container');
const cartSummary = $('cart-summary');
const checkoutItems = $('checkout-items');
const checkoutSubtotal = $('checkout-subtotal');
const checkoutShipping = $('checkout-shipping');
const checkoutTotal = $('checkout-total');
const checkoutExchange = $('checkout-exchange');
const userBtn = $('user-btn');
const mobileLoginLink = $('mobile-login-link');
const toastContainer = $('toast-container');

const LANG_META = { mn: 'mn', en: 'en', jp: 'ja' };

// ================= INIT =================
function init() {
    htmlEl.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    langSelect.value = currentLang;
    applyLanguage();
    updateAuthUI();
    updateCartBadge();
    renderProducts();
    setupEventListeners();
}
init();

// ================= TOAST =================
function showToast(message, type = 'success', duration = 2800) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };
    toast.innerHTML = `<span class="toast-icon">${icons[type] || '✓'}</span><span class="toast-msg"></span>`;
    toast.querySelector('.toast-msg').textContent = message;
    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ================= EVENTS =================
function setupEventListeners() {
    themeToggleBtn.addEventListener('click', toggleTheme);

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('lang', currentLang);
        applyLanguage();
        renderProducts();
        renderCart();
        renderCheckout();
        // Хэрэв product modal нээлттэй бол дахин render
        if (productModal.classList.contains('active') && selectedProduct) {
            openProductDetail(selectedProduct.id, true);
        }
    });

    menuBtn.addEventListener('click', () => toggleMobileMenu(true));
    closeBtn.addEventListener('click', () => toggleMobileMenu(false));
    overlay.addEventListener('click', () => toggleMobileMenu(false));

    document.querySelectorAll('.brand-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentBrandFilter = tab.dataset.brand;
            renderProducts();
        });
    });

    $('search-input').addEventListener('input', (e) => {
        currentSearchQuery = e.target.value.toLowerCase().trim();
        renderProducts();
    });

    [authModal, productModal, cartModal, successModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    // ESC товчоор modal хаах
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            [authModal, productModal, cartModal, successModal].forEach(closeModal);
            toggleMobileMenu(false);
        }
    });
}

// ================= THEME =================
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    themeToggleBtn.textContent = currentTheme === 'dark' ? '🌞' : '🌛';
}

// ================= LANGUAGE (САЙЖРУУЛСАН) =================
function applyLanguage() {
    const t = translations[currentLang] || translations.mn;

    // 1. html lang attribute
    htmlEl.setAttribute('lang', LANG_META[currentLang] || 'mn');

    // 2. Бүх data-i18n текст
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // 3. Бүх data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    // 4. Бүх data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
    });

    // 5. Mobile login link тусгай
    if (mobileLoginLink) {
        mobileLoginLink.textContent = isLoggedIn
            ? (currentLang === 'jp' ? 'ログアウト' : currentLang === 'en' ? 'Logout' : 'Гарах')
            : t.btn_login;
    }

    // 6. Search input placeholder
    const searchInput = $('search-input');
    if (searchInput) searchInput.placeholder = t.search_placeholder;

    // 7. Динамик контентыг дахин render
    updateAuthUI();
    renderProducts();
    if (cartModal.classList.contains('active')) renderCart();
    if (checkoutView.classList.contains('active')) renderCheckout();
    if (successModal.classList.contains('active')) renderSuccessMessage();

    // 8. Brand tabs дахин render (текст солигдох)
    const activeBrand = document.querySelector('.brand-tab.active')?.dataset.brand || 'all';
    document.querySelectorAll('.brand-tab').forEach(tab => {
        if (tab.dataset.brand === 'all') tab.textContent = t.brand_all;
        tab.classList.toggle('active', tab.dataset.brand === activeBrand);
    });
}

// ================= MOBILE MENU =================
function toggleMobileMenu(open) {
    mobileMenu.classList.toggle('active', open);
    overlay.classList.toggle('active', open);
    mobileMenu.setAttribute('aria-hidden', !open);
}

// ================= AUTH =================
function handleUserClick() {
    if (isLoggedIn) {
        const t = translations[currentLang];
        if (confirm(t.msg_confirm_logout)) {
            isLoggedIn = false;
            localStorage.setItem('isLoggedIn', 'false');
            updateAuthUI();
            renderProducts();
            showToast(t.msg_logout_success, 'info');
        }
    } else {
        openAuthModal('login');
    }
}

function openAuthModal(tab = 'login') {
    if (isLoggedIn) {
        showToast(translations[currentLang].msg_already_logged, 'info');
        return;
    }
    authModal.classList.add('active');
    switchAuthTab(tab);
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    tabLogin.classList.toggle('active', isLogin);
    tabRegister.classList.toggle('active', !isLogin);
    loginForm.classList.toggle('active', isLogin);
    registerForm.classList.toggle('active', !isLogin);
}

function handleLogin(e) {
    e.preventDefault();
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateAuthUI();
    closeAuthModal();
    renderProducts();
    showToast(translations[currentLang].msg_login_success, 'success');
    loginForm.reset();
}

function handleRegister(e) {
    e.preventDefault();
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateAuthUI();
    closeAuthModal();
    renderProducts();
    showToast(translations[currentLang].msg_register_success, 'success');
    registerForm.reset();
}

function updateAuthUI() {
    const t = translations[currentLang];
    if (isLoggedIn) {
        userBtn.title = currentLang === 'jp' ? 'ログアウト' : currentLang === 'en' ? 'Logout' : 'Гарах';
        if (mobileLoginLink) mobileLoginLink.textContent = currentLang === 'jp' ? 'ログアウト' : currentLang === 'en' ? 'Logout' : 'Гарах';
        loginPrompt.classList.add('hidden');
        productsWrapper.classList.remove('hidden');
    } else {
        userBtn.title = t.btn_login;
        if (mobileLoginLink) mobileLoginLink.textContent = t.btn_login;
        loginPrompt.classList.remove('hidden');
        productsWrapper.classList.add('hidden');
    }
}

// ================= PRODUCTS =================
function renderProducts() {
    if (!isLoggedIn) return;

    let filtered = PRODUCTS;
    if (currentBrandFilter !== 'all') filtered = filtered.filter(p => p.brand === currentBrandFilter);
    if (currentSearchQuery) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(currentSearchQuery) ||
            p.brand.toLowerCase().includes(currentSearchQuery)
        );
    }

    const t = translations[currentLang];
    productCount.textContent = `${filtered.length} ${t.product_count}`;

    if (filtered.length === 0) {
        productGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:48px;color:var(--text-secondary);">${t.no_products}</p>`;
        return;
    }

    productGrid.innerHTML = filtered.map(p => `
        <div class="product-card" onclick="openProductDetail(${p.id})" role="button" tabindex="0">
            <div class="product-img-wrapper">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <span class="brand-badge" style="background:${BRAND_COLORS[p.brand] || '#333'}">${p.brand}</span>
                <button class="wishlist-btn-card" onclick="event.stopPropagation(); toggleWishlist(this)" aria-label="Wishlist">♡</button>
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="brand-name">${p.brand}</p>
                <p class="price">¥${p.price.toLocaleString()}</p>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart(${p.id})">
                    ${t.btn_add_cart}
                </button>
            </div>
        </div>
    `).join('');
}

function toggleWishlist(btn) {
    btn.classList.toggle('active');
    btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
}

function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts() { /* input event handles */ }

// ================= PRODUCT DETAIL =================
function openProductDetail(id, keepOpen = false) {
    if (!isLoggedIn) {
        openAuthModal('login');
        return;
    }

    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    selectedProduct = p;
    if (!keepOpen) {
        selectedSize = 'M';
        selectedColor = 'black';
        selectedQty = 1;
    }

    const colors = [
        { name: 'black', hex: '#000000' }, { name: 'white', hex: '#ffffff' },
        { name: 'gray', hex: '#888888' }, { name: 'navy', hex: '#1a237e' },
        { name: 'red', hex: '#c0392b' }
    ];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const t = translations[currentLang];

    $('product-detail-content').innerHTML = `
        <div class="detail-layout">
            <img src="${p.img}" alt="${p.name}" class="detail-img">
            <div class="detail-info">
                <p class="brand-tag">${p.brand}</p>
                <h2>${p.name}</h2>
                <p class="price">¥${p.price.toLocaleString()}</p>
                <p class="desc">${p.desc}</p>

                <div class="selector-group">
                    <label>${t.detail_size}</label>
                    <div class="size-options">
                        ${sizes.map(s => `<button class="size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectSize(this, '${s}')">${s}</button>`).join('')}
                    </div>
                </div>

                <div class="selector-group">
                    <label>${t.detail_color}</label>
                    <div class="color-options">
                        ${colors.map(c => `
                            <div class="color-circle ${c.name === selectedColor ? 'active' : ''}"
                                 style="background:${c.hex};${c.name === 'white' ? 'border:2px solid #ddd;' : ''}"
                                 onclick="selectColor(this, '${c.name}')" title="${c.name}"></div>
                        `).join('')}
                    </div>
                </div>

                <div class="selector-group">
                    <label>${t.detail_qty}</label>
                    <div class="qty-selector">
                        <button onclick="changeQty(-1)" aria-label="-">−</button>
                        <span id="qty-display">${selectedQty}</span>
                        <button onclick="changeQty(1)" aria-label="+">+</button>
                    </div>
                </div>

                <button class="btn btn-primary w-100" onclick="addToCartFromDetail()">
                    🛒 ${t.btn_add_cart}
                </button>
            </div>
        </div>
    `;

    if (!keepOpen) {
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
}

function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
}

function selectColor(el, color) {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    selectedColor = color;
}

function changeQty(delta) {
    selectedQty = Math.max(1, selectedQty + delta);
    const el = $('qty-display');
    if (el) el.textContent = selectedQty;
}

function addToCartFromDetail() {
    if (!selectedProduct) return;
    const existing = cart.find(i => i.id === selectedProduct.id && i.size === selectedSize && i.color === selectedColor);
    if (existing) existing.qty += selectedQty;
    else cart.push({
        id: selectedProduct.id, brand: selectedProduct.brand, name: selectedProduct.name,
        price: selectedProduct.price, img: selectedProduct.img,
        size: selectedSize, color: selectedColor, qty: selectedQty
    });
    saveCart();
    closeProductModal();
    showToast(translations[currentLang].msg_added_to_cart, 'success');
}

function quickAddToCart(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = cart.find(i => i.id === id && i.size === 'M' && i.color === 'black');
    if (existing) existing.qty += 1;
    else cart.push({ id: p.id, brand: p.brand, name: p.name, price: p.price, img: p.img, size: 'M', color: 'black', qty: 1 });
    saveCart();
    showToast(translations[currentLang].msg_added_to_cart, 'success');
}

// ================= CART =================
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    cartBadge.textContent = total;
    cartBadge.style.display = total > 0 ? 'block' : 'none';
}

function openCart() {
    if (!isLoggedIn) { openAuthModal('login'); return; }
    renderCart();
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartModal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderCart() {
    const t = translations[currentLang];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">🛒</div>
                <h3>${t.cart_empty_text}</h3>
                <p>${t.cart_empty_desc}</p>
            </div>`;
        cartSummary.innerHTML = '';
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="brand">${item.brand}</p>
                <p class="attrs">${item.size} | ${item.color} | x${item.qty}</p>
                <p class="price">¥${(item.price * item.qty).toLocaleString()}</p>
                <div class="cart-item-qty">
                    <button onclick="updateCartQty(${idx}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateCartQty(${idx}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${idx})" aria-label="Устгах">🗑️</button>
        </div>
    `).join('');

    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    cartSummary.innerHTML = `
        <div class="cart-total">
            <span>${t.cart_total}</span>
            <span>¥${total.toLocaleString()}</span>
        </div>
        <div class="cart-buttons">
            <button class="btn btn-outline" onclick="closeCart()">${t.btn_continue}</button>
            <button class="btn btn-primary" onclick="goToCheckout()">${t.btn_checkout}</button>
        </div>`;
}

function updateCartQty(idx, delta) {
    cart[idx].qty = Math.max(1, cart[idx].qty + delta);
    saveCart();
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    saveCart();
}

function goToCheckout() {
    closeCart();
    navigateTo('checkout');
    renderCheckout();
}

// ================= CHECKOUT =================
function renderCheckout() {
    const t = translations[currentLang];

    if (cart.length === 0) {
        checkoutItems.innerHTML = `<p style="text-align:center;color:var(--text-secondary);padding:20px;">${t.msg_cart_empty}</p>`;
        checkoutSubtotal.textContent = '¥0';
        if (checkoutShipping) checkoutShipping.textContent = `¥${SHIPPING_FEE.toLocaleString()}`;
        checkoutTotal.textContent = `¥${SHIPPING_FEE.toLocaleString()}`;
        if (checkoutExchange) checkoutExchange.textContent = '';
        return;
    }

    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="checkout-item-info">
                <p><strong>${item.name}</strong></p>
                <p class="small">${item.brand} | ${item.size} | ${item.color} | x${item.qty}</p>
                <p class="price">¥${(item.price * item.qty).toLocaleString()}</p>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    checkoutSubtotal.textContent = `¥${subtotal.toLocaleString()}`;
    if (checkoutShipping) checkoutShipping.textContent = `¥${SHIPPING_FEE.toLocaleString()}`;
    checkoutTotal.textContent = `¥${(subtotal + SHIPPING_FEE).toLocaleString()}`;
    if (checkoutExchange) {
        const mnt = ((subtotal + SHIPPING_FEE) * EXCHANGE_RATE).toLocaleString();
        checkoutExchange.textContent = `(${t.free_shipping.includes('олирлоор') ? 'олирлоор' : currentLang === 'en' ? 'approx.' : '約'} ~${mnt}₮)`;
    }
}

// ================= PAYMENT =================
function processPayment() {
    const t = translations[currentLang];
    if (!isLoggedIn) { openAuthModal('login'); return; }
    if (cart.length === 0) { showToast(t.msg_cart_empty, 'warning'); return; }

    const name = $('ship-name').value.trim();
    const phone = $('ship-phone').value.trim();
    const address = $('ship-address').value.trim();

    if (!name || !phone || !address) {
        showToast(t.msg_fill_fields, 'error');
        return;
    }

    const orderNum = '#JB' + Date.now().toString().slice(-8);
    $('order-number').textContent = orderNum;

    cart = [];
    saveCart();
    renderSuccessMessage();
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderSuccessMessage() {
    // success modal-ийн бүх текстийг дахин apply
    const t = translations[currentLang];
    successModal.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
}

function finishOrder() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
    navigateTo('home');
}

// ================= NAVIGATION =================
function navigateTo(viewName) {
    homeView.classList.remove('active');
    checkoutView.classList.remove('active');
    if (viewName === 'home') homeView.classList.add('active');
    if (viewName === 'checkout') {
        checkoutView.classList.add('active');
        renderCheckout();
    }
    toggleMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

console.log('✅ JAPANBUY ачаалагдлаа! Хэл:', currentLang, '| Бүтээгдэхүүн:', PRODUCTS.length);