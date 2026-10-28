/**
 * ============================================================
 *  JAPANBUY - Product Config (ЭНД ЗӨВХӨН ӨӨРЧИЛНӨ)
 * ============================================================
 */
const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

const PRODUCTS = [
    { id: 60, brand: 'GAP', cat: 'women', name: 'デニム ミディ ペンシルスカート', nameMn: 'Жинсэн миди харандаа юбка', nameEn: 'Denim Midi Pencil Skirt', price: 3499, weightKg: 0.55, img: 'https://www2.assets-gap.com/webcontent/0063/423/500/cn63423500.jpg?q=h&w=655', desc: 'Деним миди урт харандаа юбка. (GAP Japan албан ёсны дэлгүүр, хямдрал)', descEn: 'Denim midi-length pencil skirt. (GAP Japan official store, sale)', descJp: 'デニムのミディ丈ペンシルスカート。（GAP Japan公式ストア、セール）', colors: ['ダークウォッシュ'], url: 'https://www.gap.co.jp/gap/denim-midi-pencil-skirt/1180244006.html?dwvar_1180244006_color=1180244006&cid=1177311', sizes: ['23', '24', '25', '26', '27', '28', '29'], swatches: {'ダークウォッシュ': 'https://www2.assets-gap.com/webcontent/0063/423/500/cn63423500.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/423/500/cn63423500.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/211/327/cn63211327.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/211/334/cn63211334.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/423/562/cn63423562.jpg?q=h&w=655'] }
    ,{ id: 61, brand: 'GAP', cat: 'women', name: 'モダンリブ ヘンリーネック マキシワンピース', nameMn: 'Макси даашинз (Хенли хүзүүтэй)', nameEn: 'Modern Rib Henley Maxi Dress', price: 3499, weightKg: 0.5, img: 'https://www2.assets-gap.com/webcontent/0063/283/438/cn63283438.jpg?q=h&w=655', desc: 'Рип даавуун, хэнли хүзүүтэй урт даашинз. (GAP Japan, хямдрал)', descEn: 'Ribbed long dress with a Henley neckline. (GAP Japan, sale)', descJp: 'リブ素材、ヘンリーネックのロングワンピース。（GAP Japan、セール）', colors: ['トゥルーブラック', 'テラブラウン'], url: 'https://www.gap.co.jp/gap/modern-rib-henley-maxi-dress/912664026.html?dwvar_912664026_color=912664026&cid=1177311', sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'トゥルーブラック': 'https://www2.assets-gap.com/webcontent/0063/283/438/cn63283438.jpg?q=h&w=105', 'テラブラウン': 'https://www2.assets-gap.com/webcontent/0062/913/721/cn62913721.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/283/438/cn63283438.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/277/285/cn63277285.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/277/318/cn63277318.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/277/367/cn63277367.jpg?q=h&w=655'] }
    ,{ id: 62, brand: 'GAP', cat: 'women', name: 'オーガニックコットン ポプリン スクープネック トップス', nameMn: 'Поплин топ (органик хөвөн)', nameEn: 'Organic Cotton Poplin Scoop-Neck Top', price: 3499, weightKg: 0.2, img: 'https://www2.assets-gap.com/webcontent/0063/290/455/cn63290455.jpg?q=h&w=655', desc: 'Органик хөвөн поплин топ. (GAP Japan, хямдрал)', descEn: 'Organic cotton poplin top. (GAP Japan, sale)', descJp: 'オーガニックコットンのポプリントップス。（GAP Japan、セール）', colors: ['ブラック', 'ニューオフホワイト'], url: 'https://www.gap.co.jp/gap/organic-cotton-poplin-scoop-neck-top/913904006.html?dwvar_913904006_color=913904006&cid=1177311', sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'ブラック': 'https://www2.assets-gap.com/webcontent/0063/290/455/cn63290455.jpg?q=h&w=105', 'ニューオフホワイト': 'https://www2.assets-gap.com/webcontent/0062/913/629/cn62913629.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/290/455/cn63290455.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/289/270/cn63289270.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/289/267/cn63289267.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/289/302/cn63289302.jpg?q=h&w=655'] }
    ,{ id: 63, brand: 'GAP', cat: 'women', name: 'ハイライズ ミニ ユーティリティ ミニスカート・スコート', nameMn: 'Мини юбка-шорт', nameEn: 'High-Rise Mini Utility Skort', price: 3499, weightKg: 0.3, img: 'https://www2.assets-gap.com/webcontent/0063/087/225/cn63087225.jpg?q=h&w=655', desc: 'Өндөр суудалтай мини юбка-шорт. (GAP Japan, хямдрал)', descEn: 'High-waisted mini skort. (GAP Japan, sale)', descJp: 'ハイウエストのミニスカートショーツ。（GAP Japan、セール）', colors: ['トゥルーブラック', 'ウィッカータン', 'ブラックモスグリーン'], url: 'https://www.gap.co.jp/gap/high-rise-mini-utility-skort/898546036.html?dwvar_898546036_color=898546036&cid=1177311', sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'トゥルーブラック': 'https://www2.assets-gap.com/webcontent/0063/087/225/cn63087225.jpg?q=h&w=105', 'ウィッカータン': 'https://www2.assets-gap.com/webcontent/0063/078/835/cn63078835.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/087/225/cn63087225.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/230/cn63087230.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/147/077/cn63147077.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/336/cn63087336.jpg?q=h&w=655'] }
    ,{ id: 64, brand: 'GAP', cat: 'women', name: 'ヘビーウェイト フレンチテリー GAPロゴ バギースウェットパンツ', nameMn: 'GAP логотой өргөн свит өмд', nameEn: 'Heavyweight French Terry GAP Logo Baggy Sweatpants', price: 4499, weightKg: 0.75, img: 'https://www2.assets-gap.com/webcontent/0063/087/043/cn63087043.jpg?q=h&w=655', desc: 'Зузаан френч терри өмд, GAP логотой, сул загвар. (GAP Japan, хямдрал)', descEn: 'Thick French terry pants with GAP logo, relaxed fit. (GAP Japan, sale)', descJp: '厚手フレンチテリー素材、GAPロゴ入りリラックスパンツ。（GAP Japan、セール）', colors: ['ライトヘザーグレー', 'ネイビー', 'モダンレッド', 'カールストーン'], url: 'https://www.gap.co.jp/gap/heavyweight-french-terry-gap-logo-baggy-sweatpants/911044006.html?dwvar_911044006_color=911044006&cid=1177311', sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'ライトヘザーグレー': 'https://www2.assets-gap.com/webcontent/0063/087/043/cn63087043.jpg?q=h&w=105', 'ネイビー': 'https://www2.assets-gap.com/webcontent/0062/898/692/cn62898692.jpg?q=h&w=105', 'モダンレッド': 'https://www2.assets-gap.com/webcontent/0062/764/801/cn62764801.jpg?q=h&w=105', 'カールストーン': 'https://www2.assets-gap.com/webcontent/0063/099/553/cn63099553.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/087/043/cn63087043.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/067/cn63087067.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/047/cn63087047.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/080/cn63087080.jpg?q=h&w=655'] }
    ,{ id: 65, brand: 'GAP', cat: 'women', name: 'ミッドライズ ベルト バギーデニム', nameMn: 'Бүстэй өргөн жинсэн өмд', nameEn: 'Mid-Rise Belted Baggy Jeans', price: 5499, weightKg: 0.8, img: 'https://www2.assets-gap.com/webcontent/0062/132/779/cn62132779.jpg?q=h&w=655', desc: 'Бүстэй, сул загварын баги деним жийнс. (GAP Japan, хямдрал)', descEn: 'Belted baggy denim jeans with a relaxed fit. (GAP Japan, sale)', descJp: 'ベルト付き、リラックスシルエットのバギーデニムジーンズ。（GAP Japan、セール）', colors: ['ライトインディゴ'], url: 'https://www.gap.co.jp/gap/mid-rise-belted-baggy-jeans/893789006.html?dwvar_893789006_color=893789006&cid=1177311', sizes: ['23', '24', '25', '26', '27', '28', '29', '30'], swatches: {'ライトインディゴ': 'https://www2.assets-gap.com/webcontent/0062/132/779/cn62132779.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0062/132/779/cn62132779.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0062/131/852/cn62131852.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0062/131/876/cn62131876.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0062/131/928/cn62131928.jpg?q=h&w=655'] }
    ,{ id: 66, brand: 'GAP', cat: 'men', name: 'リラックスフィット ピケ クロップド ポロシャツ', nameMn: 'Богино поло цамц (пике)', nameEn: 'Relaxed Pique Cropped Polo Shirt', price: 1999, weightKg: 0.3, img: 'https://www2.assets-gap.com/webcontent/0061/830/553/cn61830553.jpg?q=h&w=655', desc: 'Сул загварын богино поло цамц. (GAP Japan, хямдрал)', descEn: 'Relaxed-fit cropped polo shirt. (GAP Japan, sale)', descJp: 'リラックスフィットのクロップドポロシャツ。（GAP Japan、セール）', colors: ['ポーセリンブルー', 'オプティックホワイト', 'ブルー', 'ムーンレスナイト'], url: 'https://www.gap.co.jp/gap/relaxed-pique-crop-polo/867536046.html?dwvar_867536046_color=867536046&cid=1177311', sizes: ['XS', 'S', 'M', 'L', 'XL'], swatches: {'ポーセリンブルー': 'https://www2.assets-gap.com/webcontent/0062/001/381/cn62001381.jpg?q=h&w=105', 'オプティックホワイト': 'https://www2.assets-gap.com/webcontent/0061/830/553/cn61830553.jpg?q=h&w=105', 'ブルー': 'https://www2.assets-gap.com/webcontent/0061/791/414/cn61791414.jpg?q=h&w=105', 'ムーンレスナイト': 'https://www2.assets-gap.com/webcontent/0061/791/429/cn61791429.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0061/830/553/cn61830553.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/829/888/cn61829888.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/829/887/cn61829887.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/828/880/cn61828880.jpg?q=h&w=655'] }
    ,{ id: 67, brand: 'GAP', cat: 'men', name: 'ヘビーウェイト リラックスフィット GAPロゴ クロップドTシャツ', nameMn: 'GAP логотой богино футболк', nameEn: 'Heavyweight Relaxed GAP Logo Cropped T-Shirt', price: 1999, weightKg: 0.3, img: 'https://www2.assets-gap.com/webcontent/0063/183/094/cn63183094.jpg?q=h&w=655', desc: 'Зузаан даавуун GAP логотой футболк. (GAP Japan, хямдрал)', descEn: 'Thick cotton T-shirt with GAP logo. (GAP Japan, sale)', descJp: '厚手コットンのGAPロゴTシャツ。（GAP Japan、セール）', colors: ['タスカンレッド', 'ニュークラシックネイビー', 'ミッションタン', 'ベインブリッジブルー'], url: 'https://www.gap.co.jp/gap/heavyweight-relaxed-gap-logo-crop-t-shirt/911578046.html?dwvar_911578046_color=911578046&cid=1177311', sizes: ['XS', 'S', 'M', 'L', 'XL'], images: ['https://www2.assets-gap.com/webcontent/0063/183/094/cn63183094.jpg?q=h&w=655'] }
    ,{ id: 68, brand: 'GAP', cat: 'men', name: 'リラックスフィット GAPロゴ フレンチテリー ジョガーパンツ', nameMn: 'GAP логотой жоггер өмд', nameEn: 'Relaxed GAP Logo French Terry Jogger Pants', price: 2499, weightKg: 0.65, img: 'https://www2.assets-gap.com/webcontent/0063/453/588/cn63453588.jpg?q=h&w=655', desc: 'GAP логотой зөөлөн жоггер өмд. (GAP Japan, хямдрал)', descEn: 'Soft jogger pants with GAP logo. (GAP Japan, sale)', descJp: '柔らかなGAPロゴジョガーパンツ。（GAP Japan、セール）', colors: ['ブラックプレイド', 'デザートカモフラージュ', 'ブラウンプレイド'], url: 'https://www.gap.co.jp/gap/relaxed-gap-logo-french-terry-joggers/907376006.html?dwvar_907376006_color=907376006&cid=1177311', sizes: ['XS', 'S', 'M', 'L', 'XL'], swatches: {'ブラックプレイド': 'https://www2.assets-gap.com/webcontent/0063/453/047/cn63453047.jpg?q=h&w=655', 'デザートカモフラージュ': 'https://www2.assets-gap.com/webcontent/0063/459/089/cn63459089.jpg?q=h&w=655', 'ブラウンプレイド': 'https://www2.assets-gap.com/webcontent/0063/329/431/cn63329431.jpg?q=h&w=655'}, images: ['https://www2.assets-gap.com/webcontent/0063/453/588/cn63453588.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/453/061/cn63453061.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/560/471/cn63560471.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/452/938/cn63452938.jpg?q=h&w=655'] }
    ,{ id: 69, brand: 'GAP', cat: 'men', name: 'ボクシーフィット オックスフォードシャツ', nameMn: 'Оксфорд цамц (boxy)', nameEn: 'Boxy Fit Oxford Shirt', price: 3499, weightKg: 0.35, img: 'https://www2.assets-gap.com/webcontent/0061/220/296/cn61220296.jpg?q=h&w=655', desc: 'Бокси загварын оксфорд цамц. (GAP Japan, хямдрал)', descEn: 'Boxy-fit Oxford shirt. (GAP Japan, sale)', descJp: 'ボクシーシルエットのオックスフォードシャツ。（GAP Japan、セール）', colors: ['ブラウンプレイド'], url: 'https://www.gap.co.jp/gap/oxford-shirt-in-boxy-fit/888336036.html?dwvar_888336036_color=888336036&cid=1177311', sizes: ['XS', 'S', 'M', 'L', 'XL'], swatches: {'ブラウンプレイド': 'https://www2.assets-gap.com/webcontent/0061/220/296/cn61220296.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0061/220/296/cn61220296.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/220/317/cn61220317.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/220/331/cn61220331.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/220/358/cn61220358.jpg?q=h&w=655'] }
    ,{ id: 70, brand: 'GAP', cat: 'kids', name: 'babyGap プリント クルーネックTシャツ', nameMn: 'Хүүхдийн хээтэй футболк (babyGap)', nameEn: 'babyGap Print Crewneck T-Shirt', price: 999, weightKg: 0.1, img: 'https://www2.assets-gap.com/webcontent/0061/173/434/cn61173434.jpg?q=h&w=655', desc: 'Нярайн хээтэй футболк. (GAP Japan, хямдрал)', descEn: 'Baby printed T-shirt. (GAP Japan, sale)', descJp: 'ベビー用プリントTシャツ。（GAP Japan、セール）', colors: ['フロストアイボリー'], url: 'https://www.gap.co.jp/gap/babygap-print-crewneck-t-shirt/870751006.html?dwvar_870751006_color=870751006&cid=1177311', sizes: ['80cm', '90cm', '95cm', '100cm', '105cm', '110cm'], images: ['https://www2.assets-gap.com/webcontent/0061/173/434/cn61173434.jpg?q=h&w=655'] }
    ,{ id: 71, brand: 'GAP', cat: 'kids', name: 'プリントボディスーツ (ベビー)', nameMn: 'Нярайн боди (хээтэй)', nameEn: 'Print Bodysuit (Baby)', price: 1199, weightKg: 0.1, img: 'https://www2.assets-gap.com/webcontent/0061/645/516/cn61645516.jpg?q=h&w=655', desc: 'Нярайн хээтэй боди. (GAP Japan, хямдрал)', descEn: 'Baby printed bodysuit. (GAP Japan, sale)', descJp: 'ベビー用プリントボディスーツ。（GAP Japan、セール）', colors: ['クジラ'], url: 'https://www.gap.co.jp/gap/baby-print-bodysuit/896836006.html?dwvar_896836006_color=896836006&cid=1177311', sizes: ['50cm', '60cm', '70cm', '80cm'], images: ['https://www2.assets-gap.com/webcontent/0061/645/516/cn61645516.jpg?q=h&w=655'] }
    ,{ id: 72, brand: 'GAP', cat: 'kids', name: 'はじめてのお気に入り ポインテール リブ フローラルブルマ (ベビー)', nameMn: 'Нярайн цэцэгэн блумер', nameEn: 'First Favorites Pointelle Rib Floral Bloomers (Baby)', price: 1199, weightKg: 0.1, img: 'https://www2.assets-gap.com/webcontent/0062/373/371/cn62373371.jpg?q=h&w=655', desc: 'Нярайн рип цэцэгэн блумер. (GAP Japan, хямдрал)', descEn: 'Baby ribbed floral bloomers. (GAP Japan, sale)', descJp: 'ベビー用リブ素材の花柄ブルマ。（GAP Japan、セール）', colors: ['フロストアイボリーフローラル'], url: 'https://www.gap.co.jp/gap/baby-first-favorites-pointelle-rib-floral-bloomers/898589006.html?dwvar_898589006_color=898589006&cid=1177311', sizes: ['60cm', '70cm', '80cm', '90cm'], images: ['https://www2.assets-gap.com/webcontent/0062/373/371/cn62373371.jpg?q=h&w=655'] }
    ,{ id: 73, brand: 'GAP', cat: 'kids', name: 'GapFit 6インチ リサイクル メッシュ イージーショートパンツ (キッズ)', nameMn: 'Хүүхдийн меш шорт (GapFit)', nameEn: 'GapFit 6" Recycled Mesh Easy Shorts (Kids)', price: 1499, weightKg: 0.15, img: 'https://www2.assets-gap.com/webcontent/0061/595/895/cn61595895.jpg?q=h&w=655', desc: 'Хүүхдийн хөнгөн меш шорт. (GAP Japan, хямдрал)', descEn: 'Kids\' lightweight mesh shorts. (GAP Japan, sale)', descJp: 'キッズ用軽量メッシュショートパンツ。（GAP Japan、セール）', colors: ['シティスケープミルク', 'ビーチピンク', 'フラワープリント'], url: 'https://www.gap.co.jp/gap/kids-gapfit-6%22-recycled-mesh-easy-shorts/745895056.html?dwvar_745895056_color=745895056&cid=1177311', sizes: ['110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], images: ['https://www2.assets-gap.com/webcontent/0061/595/895/cn61595895.jpg?q=h&w=655'] }
    ,{ id: 74, brand: 'UNIQLO', cat: 'women', name: 'ミニT', nameMn: 'Мини футболк', nameEn: 'Mini T-Shirt', price: 1000, weightKg: 0.2, img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465760/item/goods_14_465760_3x4.jpg?width=400', desc: 'Богино загварын мини футболк. (UNIQLO Japan, хямдрал)', descEn: 'Short-fit mini T-shirt. (UNIQLO Japan, sale)', descJp: 'ショート丈のミニTシャツ。（UNIQLO Japan、セール）', colors: ['BLACK', 'WHITE', 'GRAY', 'PINK', 'RED', 'DARK ORANGE', 'OLIVE', 'DARK GREEN', 'BLUE'], url: 'https://www.uniqlo.com/jp/ja/products/E465760-000/01', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465760/item/goods_14_465760_3x4.jpg?width=400'] }
    ,{ id: 75, brand: 'UNIQLO', cat: 'women', name: 'フレアロングスカート', nameMn: 'Урт дэрвэгэр юбка', nameEn: 'Flare Long Skirt', price: 1290, weightKg: 0.3, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/488934001/item/jpgoods_62_488934001_3x4.jpg?width=400', desc: 'Урт дэрвэгэр юбка. (UNIQLO Japan, хямдрал)', descEn: 'Long flared skirt. (UNIQLO Japan, sale)', descJp: 'ロングフレアスカート。（UNIQLO Japan、セール）', colors: ['BLUE'], url: 'https://www.uniqlo.com/jp/ja/products/E488934-001/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/488934001/item/jpgoods_62_488934001_3x4.jpg?width=400'] }
    ,{ id: 76, brand: 'UNIQLO', cat: 'women', name: 'ソフトモダールキャミソール', nameMn: 'Зөөлөн модал майк', nameEn: 'Soft Modal Camisole', price: 1290, weightKg: 0.15, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/485710/item/jpgoods_03_485710_3x4.jpg?width=400', desc: 'Зөөлөн модал даавуун майк. (UNIQLO Japan, хямдрал)', descEn: 'Soft modal tank top. (UNIQLO Japan, sale)', descJp: '柔らかなモダール素材のタンクトップ。（UNIQLO Japan、セール）', colors: ['OFF WHITE', 'GRAY'], url: 'https://www.uniqlo.com/jp/ja/products/E485710-000/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/485710/item/jpgoods_03_485710_3x4.jpg?width=400'] }
    ,{ id: 77, brand: 'UNIQLO', cat: 'women', name: 'UVカットリブアームカバー', nameMn: 'UV хамгаалалттай гарын халхавч', nameEn: 'UV Cut Rib Arm Cover', price: 1290, weightKg: 0.05, img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/482086/item/goods_00_482086_3x4.jpg?width=400', desc: 'Нарнаас хамгаалах рип гарын халхавч (unisex). (UNIQLO Japan, хямдрал)', descEn: 'UV-protection ribbed arm covers (unisex). (UNIQLO Japan, sale)', descJp: 'UVカット リブアームカバー（ユニセックス）。（UNIQLO Japan、セール）', colors: ['WHITE', 'BLACK'], url: 'https://www.uniqlo.com/jp/ja/products/E482086-000/00', sizes: ['M', 'L'], images: ['https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/482086/item/goods_00_482086_3x4.jpg?width=400'] }
    ,{ id: 78, brand: 'UNIQLO', cat: 'women', name: 'エアリズムコットンカノコポロシャツ', nameMn: 'Эйризм поло цамц', nameEn: 'AIRism Cotton Pique Polo Shirt', price: 1290, weightKg: 0.3, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/475367/item/jpgoods_11_475367_3x4.jpg?width=400', desc: 'Эйризм хөвөн пике поло цамц (unisex). (UNIQLO Japan, хямдрал)', descEn: 'AIRism cotton pique polo shirt (unisex). (UNIQLO Japan, sale)', descJp: 'エアリズムコットンピケポロシャツ（ユニセックス）。（UNIQLO Japan、セール）', colors: ['PINK', 'RED', 'GREEN', 'DARK GREEN', 'BLUE'], url: 'https://www.uniqlo.com/jp/ja/products/E475367-000/03', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/475367/item/jpgoods_11_475367_3x4.jpg?width=400'] }
    ,{ id: 79, brand: 'UNIQLO', cat: 'women', name: 'リネンブレンドイージーショートパンツ', nameMn: 'Маалинга хольцтой шорт', nameEn: 'Linen Blend Easy Shorts', price: 1490, weightKg: 0.25, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/485575/item/jpgoods_63_485575_3x4.jpg?width=400', desc: 'Хөнгөн маалинга хольцтой шорт. (UNIQLO Japan, хямдрал)', descEn: 'Lightweight linen-blend shorts. (UNIQLO Japan, sale)', descJp: '軽やかなリネンブレンドショートパンツ。（UNIQLO Japan、セール）', colors: ['BLUE', 'PINK'], url: 'https://www.uniqlo.com/jp/ja/products/E485575-000/01', sizes: ['XS', 'XXL', '3XL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/485575/item/jpgoods_63_485575_3x4.jpg?width=400'] }
    ,{ id: 80, brand: 'UNIQLO', cat: 'men', name: 'YOASOBI UT/リラックスフィット', nameMn: 'YOASOBI UT футболк', nameEn: 'YOASOBI UT Relaxed Fit T-Shirt', price: 1290, weightKg: 0.2, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489916/item/jpgoods_00_489916_3x4.jpg?width=400', desc: 'YOASOBI хамтарсан UT график футболк. (UNIQLO Japan, хямдрал)', descEn: 'YOASOBI collaboration UT graphic T-shirt. (UNIQLO Japan, sale)', descJp: 'YOASOBIコラボ UTグラフィックTシャツ。（UNIQLO Japan、セール）', colors: ['WHITE'], url: 'https://www.uniqlo.com/jp/ja/products/E489916-000/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489916/item/jpgoods_00_489916_3x4.jpg?width=400'] }
    ,{ id: 81, brand: 'UNIQLO', cat: 'men', name: 'UVカットリブアームカバー', nameMn: 'UV хамгаалалттай гарын халхавч', nameEn: 'UV Cut Rib Arm Cover', price: 1290, weightKg: 0.05, img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/482086/item/goods_00_482086_3x4.jpg?width=400', desc: 'Нарнаас хамгаалах рип гарын халхавч (unisex). (UNIQLO Japan, хямдрал)', descEn: 'UV-protection ribbed arm covers (unisex). (UNIQLO Japan, sale)', descJp: 'UVカット リブアームカバー（ユニセックス）。（UNIQLO Japan、セール）', colors: ['WHITE', 'BLACK'], url: 'https://www.uniqlo.com/jp/ja/products/E482086-000/00', sizes: ['M', 'L'], images: ['https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/482086/item/goods_00_482086_3x4.jpg?width=400'] }
    ,{ id: 82, brand: 'UNIQLO', cat: 'men', name: 'エアリズムコットンカノコポロシャツ', nameMn: 'Эйризм поло цамц', nameEn: 'AIRism Cotton Pique Polo Shirt', price: 1290, weightKg: 0.3, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/475367/item/jpgoods_11_475367_3x4.jpg?width=400', desc: 'Эйризм хөвөн пике поло цамц (unisex). (UNIQLO Japan, хямдрал)', descEn: 'AIRism cotton pique polo shirt (unisex). (UNIQLO Japan, sale)', descJp: 'エアリズムコットンピケポロシャツ（ユニセックス）。（UNIQLO Japan、セール）', colors: ['PINK', 'RED', 'GREEN', 'DARK GREEN', 'BLUE'], url: 'https://www.uniqlo.com/jp/ja/products/E475367-000/03', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/475367/item/jpgoods_11_475367_3x4.jpg?width=400'] }
    ,{ id: 83, brand: 'UNIQLO', cat: 'men', name: 'オープンカラーシャツ/江戸浮世絵', nameMn: 'Нээлттэй захтай цамц (Эдо уран зураг)', nameEn: 'Open Collar Shirt / Edo Ukiyo-e', price: 1490, weightKg: 0.3, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/492555/item/jpgoods_72_492555_3x4.jpg?width=400', desc: 'Эдо үеийн уран зургийн хээтэй нээлттэй захтай цамц. (UNIQLO Japan, хямдрал)', descEn: 'Open-collar shirt with Edo-period artwork print. (UNIQLO Japan, sale)', descJp: '江戸時代の絵画プリント オープンカラーシャツ。（UNIQLO Japan、セール）', colors: ['PURPLE'], url: 'https://www.uniqlo.com/jp/ja/products/E492555-000/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/492555/item/jpgoods_72_492555_3x4.jpg?width=400'] }
    ,{ id: 84, brand: 'UNIQLO', cat: 'kids', name: 'GIRLS グラフィックT', nameMn: 'Охидын график футболк', nameEn: 'Girls Graphic T-Shirt', price: 890, weightKg: 0.15, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/488977/item/jpgoods_00_488977_3x4.jpg?width=400', desc: 'Хүүхдийн график хээтэй футболк. (UNIQLO Japan, хямдрал)', descEn: 'Kids\' graphic print T-shirt. (UNIQLO Japan, sale)', descJp: 'キッズ用グラフィックTシャツ。（UNIQLO Japan、セール）', colors: ['WHITE', 'GRAY', 'PINK'], url: 'https://www.uniqlo.com/jp/ja/products/E488977-000/01', sizes: ['100cm'], images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/488977/item/jpgoods_00_488977_3x4.jpg?width=400'] }
    ,{ id: 85, brand: 'UNIQLO', cat: 'kids', name: 'レギンス/10分丈/レギュラーフィット', nameMn: 'Хүүхдийн леггинс', nameEn: 'Kids Leggings (Full Length)', price: 890, weightKg: 0.15, img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/481882001/item/goods_30_481882001_3x4.jpg?width=400', desc: 'Хүүхдийн бүтэн урт леггинс. (UNIQLO Japan, хямдрал)', descEn: 'Kids\' full-length leggings. (UNIQLO Japan, sale)', descJp: 'キッズ用フルレングスレギンス。（UNIQLO Japan、セール）', colors: ['NATURAL'], url: 'https://www.uniqlo.com/jp/ja/products/E481882-001/01', sizes: ['120cm'], images: ['https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/481882001/item/goods_30_481882001_3x4.jpg?width=400'] }
    ,{ id: 86, brand: 'UNIQLO', cat: 'kids', name: 'ショートソックス/3足組', nameMn: 'Хүүхдийн оймс (3 хос)', nameEn: 'Kids Short Socks (3 Pairs)', price: 1000, weightKg: 0.1, img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/485411/item/goods_71_485411_3x4.jpg?width=400', desc: 'Хүүхдийн богино оймс, 3 хосын багц. (UNIQLO Japan, хямдрал)', descEn: 'Kids\' short socks, pack of 3 pairs. (UNIQLO Japan, sale)', descJp: 'キッズ用ショートソックス 3足組。（UNIQLO Japan、セール）', colors: ['PURPLE'], url: 'https://www.uniqlo.com/jp/ja/products/E485411-000/00', sizes: ['16-20cm', '20-24cm'], images: ['https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/485411/item/goods_71_485411_3x4.jpg?width=400'] }
    ,{ id: 87, brand: 'UNIQLO', cat: 'kids', name: 'ピーナッツ UVカットキャップ', nameMn: 'Хүүхдийн малгай (Peanuts, UV)', nameEn: 'Peanuts UV Cut Cap', price: 1290, weightKg: 0.1, img: 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/486675001/item/goods_55_486675001_3x4.jpg?width=400', desc: 'Peanuts загвартай UV хамгаалалттай хүүхдийн малгай. (UNIQLO Japan, хямдрал)', descEn: 'Peanuts design UV-protection kids\' hat. (UNIQLO Japan, sale)', descJp: 'ピーナッツデザイン UVカット キッズハット。（UNIQLO Japan、セール）', colors: ['GREEN'], url: 'https://www.uniqlo.com/jp/ja/products/E486675-001/00', sizes: ['NS'], images: ['https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/486675001/item/goods_55_486675001_3x4.jpg?width=400'] }
    ,{ id: 88, brand: 'GU', cat: 'women', name: 'クルーソックス(ライン)(2026年度春秋商品)', nameMn: 'Оймс (шугамтай)', nameEn: 'Crew Socks (Line)', price: 690, weightKg: 0.05, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/359166/item/goods_41_359166_3x4.jpg?width=400', desc: 'Шугаман хээтэй кру оймс. (GU Japan, хямдрал)', descEn: 'Striped crew socks. (GU Japan, sale)', descJp: 'ライン柄クルーソックス。（GU Japan、セール）', colors: ['YELLOW'], url: 'https://www.gu-global.com/jp/ja/products/E359166-000/01', sizes: ['NS'], images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/359166/item/goods_41_359166_3x4.jpg?width=400'] }
    ,{ id: 89, brand: 'GU', cat: 'women', name: 'ドライリブT', nameMn: 'Хуурай рип футболк', nameEn: 'Dry Rib T-Shirt', price: 890, weightKg: 0.2, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361444/item/jpgoods_40_361444_3x4.jpg?width=400', desc: 'Хөлс шингээдэг хуурай рип футболк. (GU Japan, хямдрал)', descEn: 'Sweat-absorbing quick-dry ribbed T-shirt. (GU Japan, sale)', descJp: '吸汗速乾ドライリブTシャツ。（GU Japan、セール）', colors: ['CREAM', 'OFF WHITE', 'BLACK', 'BLUE'], url: 'https://www.gu-global.com/jp/ja/products/E361444-000/00', sizes: ['S', 'M', 'L', 'XL'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361444/item/jpgoods_40_361444_3x4.jpg?width=400'] }
    ,{ id: 90, brand: 'GU', cat: 'women', name: 'レースショーツ', nameMn: 'Торгон дотуур өмд', nameEn: 'Lace Shorts (Underwear)', price: 890, weightKg: 0.1, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/359144/item/goods_40_359144_3x4.jpg?width=400', desc: 'Торгон чимэглэлтэй дотуур өмд. (GU Japan, хямдрал)', descEn: 'Underwear with satin trim. (GU Japan, sale)', descJp: 'サテントリム付きショーツ。（GU Japan、セール）', colors: ['CREAM', 'DARK GRAY', 'BLACK', 'PURPLE'], url: 'https://www.gu-global.com/jp/ja/products/E359144-000/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/359144/item/goods_40_359144_3x4.jpg?width=400'] }
    ,{ id: 91, brand: 'GU', cat: 'women', name: 'ボウタイオーバーサイズワンピース(5分袖)', nameMn: 'Зангилаатай том даашинз', nameEn: 'Bow-Tie Oversized Dress', price: 1090, weightKg: 0.35, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361770/item/jpgoods_55_361770_3x4.jpg?width=400', desc: 'Боовтой хүзүүтэй том хэмжээст даашинз. (GU Japan, хямдрал)', descEn: 'Oversized dress with a bow neckline. (GU Japan, sale)', descJp: 'ボウネックのオーバーサイズワンピース。（GU Japan、セール）', colors: ['WINE', 'GREEN'], url: 'https://www.gu-global.com/jp/ja/products/E361770-000/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361770/item/jpgoods_55_361770_3x4.jpg?width=400'] }
    ,{ id: 92, brand: 'GU', cat: 'women', name: 'シアーラップスカート', nameMn: 'Нимгэн уяатай юбка', nameEn: 'Sheer Wrap Skirt', price: 1090, weightKg: 0.3, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361462/item/jpgoods_30_361462_3x4.jpg?width=400', desc: 'Нимгэн даавуун уяатай урт юбка. (GU Japan, хямдрал)', descEn: 'Light cotton long skirt with tie waist. (GU Japan, sale)', descJp: '薄手コットンのウエストリボン付きロングスカート。（GU Japan、セール）', colors: ['NATURAL', 'BLACK'], url: 'https://www.gu-global.com/jp/ja/products/E361462-000/00', sizes: ['S/M', 'L/XL'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361462/item/jpgoods_30_361462_3x4.jpg?width=400'] }
    ,{ id: 93, brand: 'GU', cat: 'women', name: 'ソフトシアーカーディガン', nameMn: 'Зөөлөн нимгэн кардиган', nameEn: 'Soft Sheer Cardigan', price: 1090, weightKg: 0.25, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/361181/item/goods_54_361181_3x4.jpg?width=400', desc: 'Зөөлөн тунгалаг кардиган. (GU Japan, хямдрал)', descEn: 'Soft sheer cardigan. (GU Japan, sale)', descJp: '柔らかなシアーカーディガン。（GU Japan、セール）', colors: ['GREEN'], url: 'https://www.gu-global.com/jp/ja/products/E361181-000/01', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/361181/item/goods_54_361181_3x4.jpg?width=400'] }
    ,{ id: 94, brand: 'GU', cat: 'men', name: 'ソックス(マイクロボーダー2)', nameMn: 'Оймс (микро судалтай)', nameEn: 'Socks (Micro Border)', price: 690, weightKg: 0.05, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/361562/item/goods_45_361562_3x4.jpg?width=400', desc: 'Микро судалтай оймс. (GU Japan, хямдрал)', descEn: 'Micro-striped socks. (GU Japan, sale)', descJp: 'マイクロストライプ柄ソックス。（GU Japan、セール）', colors: ['YELLOW', 'GREEN', 'NAVY'], url: 'https://www.gu-global.com/jp/ja/products/E361562-000/00', sizes: ['25-27cm', '27-29cm'], images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/361562/item/goods_45_361562_3x4.jpg?width=400'] }
    ,{ id: 95, brand: 'GU', cat: 'men', name: 'ボクサーパンツ', nameMn: 'Боксер дотуур өмд', nameEn: 'Boxer Briefs', price: 890, weightKg: 0.1, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/360741/item/goods_48_360741_3x4.jpg?width=400', desc: 'Энгийн боксер дотуур өмд. (GU Japan, хямдрал)', descEn: 'Plain boxer briefs. (GU Japan, sale)', descJp: '無地ボクサーパンツ。（GU Japan、セール）', colors: ['YELLOW', 'PURPLE'], url: 'https://www.gu-global.com/jp/ja/products/E360741-000/01', sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/360741/item/goods_48_360741_3x4.jpg?width=400'] }
    ,{ id: 96, brand: 'GU', cat: 'men', name: 'チェックワイドフレアパンツ', nameMn: 'Алаг өргөн өмд', nameEn: 'Check Wide Flare Pants', price: 1090, weightKg: 0.45, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360712/item/jpgoods_06_360712_3x4.jpg?width=400', desc: 'Алаг хээтэй өргөн дэрвэгэр өмд. (GU Japan, хямдрал)', descEn: 'Plaid wide flared pants. (GU Japan, sale)', descJp: 'チェック柄ワイドフレアパンツ。（GU Japan、セール）', colors: ['GRAY', 'YELLOW'], url: 'https://www.gu-global.com/jp/ja/products/E360712-000/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360712/item/jpgoods_06_360712_3x4.jpg?width=400'] }
    ,{ id: 97, brand: 'GU', cat: 'men', name: 'グラフィックT WamericanBEY', nameMn: 'График футболк', nameEn: 'Graphic T-Shirt', price: 1090, weightKg: 0.2, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/359495001/item/goods_08_359495001_3x4.jpg?width=400', desc: 'График хээтэй футболк. (GU Japan, хямдрал)', descEn: 'Graphic print T-shirt. (GU Japan, sale)', descJp: 'グラフィックTシャツ。（GU Japan、セール）', colors: ['DARK GRAY'], url: 'https://www.gu-global.com/jp/ja/products/E359495-001/00', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/359495001/item/goods_08_359495001_3x4.jpg?width=400'] }
    ,{ id: 98, brand: 'GU', cat: 'kids', name: 'KIDSグラフィッククロップドT パペットスンスン', nameMn: 'Хүүхдийн график футболк (Puppet Sunsun)', nameEn: 'Kids Graphic Cropped T (Puppet Sunsun)', price: 1090, weightKg: 0.15, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360428001/item/jpgoods_10_360428001_3x4.jpg?width=400', desc: 'Puppet Sunsun графиктай хүүхдийн футболк. (GU Japan, хямдрал)', descEn: 'Puppet Sunsun graphic kids\' T-shirt. (GU Japan, sale)', descJp: 'パペットスンスン グラフィック キッズTシャツ。（GU Japan、セール）', colors: ['PINK'], url: 'https://www.gu-global.com/jp/ja/products/E360428-001/00', sizes: ['100cm', '110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360428001/item/jpgoods_10_360428001_3x4.jpg?width=400'] }
    ,{ id: 99, brand: 'GU', cat: 'kids', name: 'KIDSドライアクティブショーツ Pokemon', nameMn: 'Хүүхдийн шорт (Pokemon)', nameEn: 'Kids Dry Active Shorts (Pokemon)', price: 1090, weightKg: 0.15, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/359581002/item/jpgoods_69_359581002_3x4.jpg?width=400', desc: 'Pokemon загвартай хүүхдийн идэвхтэй шорт. (GU Japan, хямдрал)', descEn: 'Pokemon design kids\' active shorts. (GU Japan, sale)', descJp: 'ポケモンデザイン キッズアクティブショートパンツ。（GU Japan、セール）', colors: ['NAVY'], url: 'https://www.gu-global.com/jp/ja/products/E359581-002/00', sizes: ['100cm', '110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/359581002/item/jpgoods_69_359581002_3x4.jpg?width=400'] }
    ,{ id: 100, brand: 'GU', cat: 'kids', name: 'GIRLSダブルジップカーディガン(半袖)JR', nameMn: 'Охидын цахилгаантай кардиган', nameEn: 'Girls Double Zip Cardigan', price: 1290, weightKg: 0.25, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/359406/item/jpgoods_69_359406_3x4.jpg?width=400', desc: 'Давхар цахилгаантай богино ханцуйтай кардиган. (GU Japan, хямдрал)', descEn: 'Double-zip short-sleeve cardigan. (GU Japan, sale)', descJp: 'ダブルジップ半袖カーディガン。（GU Japan、セール）', colors: ['OFF WHITE', 'LIGHT GRAY', 'NAVY'], url: 'https://www.gu-global.com/jp/ja/products/E359406-000/00', sizes: ['S', 'M', 'L'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/359406/item/jpgoods_69_359406_3x4.jpg?width=400'] }
    ,{ id: 101, brand: 'GU', cat: 'kids', name: 'GIRLSカットソーティアードワンピース', nameMn: 'Охидын давхаргатай даашинз', nameEn: 'Girls Tiered Dress', price: 1290, weightKg: 0.25, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360471/item/jpgoods_08_360471_3x4.jpg?width=400', desc: 'Давхаргатай загварын охидын даашинз. (GU Japan, хямдрал)', descEn: 'Layered-style girls\' dress. (GU Japan, sale)', descJp: 'レイヤード風ガールズワンピース。（GU Japan、セール）', colors: ['DARK GRAY', 'ORANGE', 'BLUE'], url: 'https://www.gu-global.com/jp/ja/products/E360471-000/00', sizes: ['100cm', '110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360471/item/jpgoods_08_360471_3x4.jpg?width=400'] }
    ,{ id: 102, brand: 'ZARA', cat: 'women', name: 'FLUID TEXT T-SHIRT', nameMn: 'Бичвэртэй футболк', nameEn: 'Fluid Text T-Shirt', price: 2290, weightKg: 0.2, img: 'https://static.zara.net/assets/public/c45b/04f7/60004af8bbe5/bbdb4237eed6/00264141250-p/00264141250-p.jpg?ts=1786431409218&w=819', desc: 'Бичвэрэн хээтэй зөөлөн футболк. (ZARA Japan, хямдрал)', descEn: 'Soft T-shirt with text print. (ZARA Japan, sale)', descJp: 'テキストプリントのソフトTシャツ。（ZARA Japan、セール）', colors: ['WHITE'], url: 'https://www.zara.com/jp/en/fluid-text-t-shirt-p00264141.html', sizes: ['S', 'M', 'L'], images: ['https://static.zara.net/assets/public/c45b/04f7/60004af8bbe5/bbdb4237eed6/00264141250-p/00264141250-p.jpg?ts=1786431409218&w=819'] }
    ,{ id: 103, brand: 'ZARA', cat: 'women', name: 'COMBINED BOW TOP', nameMn: 'Банттай топ', nameEn: 'Combined Bow Top', price: 2650, weightKg: 0.15, img: 'https://static.zara.net/assets/public/823d/2944/d7dc45cebba0/1ffaf4fa31bf/05644805306-p/05644805306-p.jpg?ts=1784625694645&w=819', desc: 'Бант чимэглэлтэй хосолсон топ. (ZARA Japan, хямдрал)', descEn: 'Combined top with bow detail. (ZARA Japan, sale)', descJp: 'リボン付きコンビトップス。（ZARA Japan、セール）', colors: ['Light yellow', 'Beige marl', 'Pink marl'], url: 'https://www.zara.com/jp/en/combined-bow-top-p05644805.html', sizes: ['S', 'M', 'L'], images: ['https://static.zara.net/assets/public/823d/2944/d7dc45cebba0/1ffaf4fa31bf/05644805306-p/05644805306-p.jpg?ts=1784625694645&w=819'] }
    ,{ id: 104, brand: 'ZARA', cat: 'women', name: 'STRIPED SHORT SLEEVE KNIT POLO SHIRT', nameMn: 'Судалтай сүлжмэл поло', nameEn: 'Striped Knit Polo Shirt', price: 2690, weightKg: 0.3, img: 'https://static.zara.net/assets/public/10cd/d9fe/2fc248cb9d35/0fa49a071ff9/05755053600-p/05755053600-p.jpg?ts=1776419749836&w=819', desc: 'Судалтай богино ханцуйтай сүлжмэл поло. (ZARA Japan, хямдрал)', descEn: 'Striped short-sleeve knit polo. (ZARA Japan, sale)', descJp: 'ストライプ半袖ニットポロ。（ZARA Japan、セール）', colors: ['Red'], url: 'https://www.zara.com/jp/en/short-sleeve-striped-knit-polo-shirt-p05755053.html', sizes: ['S', 'M', 'L', 'XL'], images: ['https://static.zara.net/assets/public/10cd/d9fe/2fc248cb9d35/0fa49a071ff9/05755053600-p/05755053600-p.jpg?ts=1776419749836&w=819'] }
    ,{ id: 105, brand: 'ZARA', cat: 'women', name: 'INTERLOCK BUTTONED WAISTCOAT', nameMn: 'Товчтой хантааз', nameEn: 'Interlock Buttoned Waistcoat', price: 2690, weightKg: 0.25, img: 'https://static.zara.net/assets/public/35a9/b435/547742d094a1/70a5ac99edb2/03641805300-p/03641805300-p.jpg?ts=1784881265143&w=819', desc: 'Товчтой интерлок хантааз. (ZARA Japan, хямдрал)', descEn: 'Buttoned interlock vest. (ZARA Japan, sale)', descJp: 'ボタン付きインターロックベスト。（ZARA Japan、セール）', colors: ['Yellow', 'White'], url: 'https://www.zara.com/jp/en/interlock-buttoned-waistcoat-p03641805.html', sizes: ['S', 'M', 'L'], images: ['https://static.zara.net/assets/public/35a9/b435/547742d094a1/70a5ac99edb2/03641805300-p/03641805300-p.jpg?ts=1784881265143&w=819'] }
    ,{ id: 106, brand: 'ZARA', cat: 'women', name: 'BALLOON INTERLOCK TROUSERS', nameMn: 'Бөмбөг загварын өмд', nameEn: 'Balloon Interlock Trousers', price: 2690, weightKg: 0.5, img: 'https://static.zara.net/assets/public/0a23/2afb/8dc349f29d95/fd0b9b1bb358/03641806250-p/03641806250-p.jpg?ts=1784890484745&w=819', desc: 'Бөмбөг хэлбэрийн өргөн өмд. (ZARA Japan, хямдрал)', descEn: 'Balloon wide pants. (ZARA Japan, sale)', descJp: 'バルーンワイドパンツ。（ZARA Japan、セール）', colors: ['WHITE'], url: 'https://www.zara.com/jp/en/interlock-balloon-trousers-p03641806.html', sizes: ['S', 'M', 'L'], images: ['https://static.zara.net/assets/public/0a23/2afb/8dc349f29d95/fd0b9b1bb358/03641806250-p/03641806250-p.jpg?ts=1784890484745&w=819'] }
    ,{ id: 107, brand: 'ZARA', cat: 'women', name: 'DOUBLE EFFECT TULLE JACKET TOP', nameMn: 'Тюль хүрэм-топ', nameEn: 'Double Effect Tulle Jacket Top', price: 2890, weightKg: 0.35, img: 'https://static.zara.net/assets/public/abe3/2e83/82fb448cbd41/a99763bd3e8d/00264801800-p/00264801800-p.jpg?ts=1785947568934&w=819', desc: 'Тюль даавуун хосолсон хүрэм-топ. (ZARA Japan, хямдрал)', descEn: 'Tulle combined jacket-style top. (ZARA Japan, sale)', descJp: 'チュールコンビのジャケット風トップス。（ZARA Japan、セール）', colors: ['BLACK'], url: 'https://www.zara.com/jp/en/double-effect-tulle-top-p00264801.html', sizes: ['S', 'M', 'L'], images: ['https://static.zara.net/assets/public/abe3/2e83/82fb448cbd41/a99763bd3e8d/00264801800-p/00264801800-p.jpg?ts=1785947568934&w=819'] }
    ,{ id: 108, brand: 'ZARA', cat: 'men', name: 'WASHED WAFFLE-KNIT T-SHIRT', nameMn: 'Вафли сүлжмэл футболк', nameEn: 'Washed Waffle-Knit T-Shirt', price: 2890, weightKg: 0.25, img: 'https://static.zara.net/assets/public/b853/c376/63c94435b2e9/0c835d503521/03443430500-p/03443430500-p.jpg?ts=1789455647107&w=819', desc: 'Угаагдсан өнгөтэй вафли сүлжмэл футболк. (ZARA Japan, хямдрал)', descEn: 'Washed-look waffle knit T-shirt. (ZARA Japan, sale)', descJp: 'ウォッシュ加工ワッフルニットTシャツ。（ZARA Japan、セール）', colors: ['Green', 'Red', 'Anthracite grey'], url: 'https://www.zara.com/jp/en/washed-waffle-knit-t-shirt-p03443430.html', sizes: ['S', 'M', 'L', 'XL'], images: ['https://static.zara.net/assets/public/b853/c376/63c94435b2e9/0c835d503521/03443430500-p/03443430500-p.jpg?ts=1789455647107&w=819'] }
    ,{ id: 109, brand: 'ZARA', cat: 'men', name: 'WASHED WAFFLE-KNIT BERMUDA SHORTS', nameMn: 'Вафли сүлжмэл бермуд шорт', nameEn: 'Washed Waffle-Knit Bermuda Shorts', price: 3130, weightKg: 0.3, img: 'https://static.zara.net/assets/public/1abb/46dc/86934e51af2e/9e84b0cc8786/03443431807-p/03443431807-p.jpg?ts=1781711850629&w=819', desc: 'Вафли сүлжмэл бермуд шорт. (ZARA Japan, хямдрал)', descEn: 'Waffle knit Bermuda shorts. (ZARA Japan, sale)', descJp: 'ワッフルニット バミューダショーツ。（ZARA Japan、セール）', colors: ['Anthracite grey', 'Blue', 'Red'], url: 'https://www.zara.com/jp/en/washed-waffle-knit-bermuda-shorts-p03443431.html', sizes: ['S', 'M', 'L', 'XL'], images: ['https://static.zara.net/assets/public/1abb/46dc/86934e51af2e/9e84b0cc8786/03443431807-p/03443431807-p.jpg?ts=1781711850629&w=819'] }
    ,{ id: 110, brand: 'ZARA', cat: 'men', name: 'BARREL FIT DRAWSTRING TROUSERS', nameMn: 'Уяатай баррель өмд', nameEn: 'Barrel Fit Drawstring Trousers', price: 4090, weightKg: 0.55, img: 'https://static.zara.net/assets/public/41dd/4de2/534547aaaefb/fed93f362cc8/00108313800-p/00108313800-p.jpg?ts=1785321563452&w=1024', desc: 'Уяатай бүстэй баррель загварын өмд. (ZARA Japan, хямдрал)', descEn: 'Barrel-leg pants with tie belt. (ZARA Japan, sale)', descJp: 'タイベルト付きバレルパンツ。（ZARA Japan、セール）', colors: ['Black', 'Bottle green', 'Brown', 'Khaki', 'Grey marl'], url: 'https://www.zara.com/jp/en/barrel-fit-drawstring-trousers-p00108313.html', sizes: ['36', '38', '40', '42', '44', '46'], images: ['https://static.zara.net/assets/public/41dd/4de2/534547aaaefb/fed93f362cc8/00108313800-p/00108313800-p.jpg?ts=1785321563452&w=1024', 'https://static.zara.net/assets/public/a306/c5c2/326748228e01/fcde0b1a034d/00108313800-a1/00108313800-a1.jpg?ts=1785321563676&w=1024', 'https://static.zara.net/assets/public/3dce/2405/458d442d8d26/2bfb05fa6dd6/00108313800-a2/00108313800-a2.jpg?ts=1785321563114&w=1024', 'https://static.zara.net/assets/public/1ea9/064b/f9134cce93c7/b30e771b708c/00108313800-a3/00108313800-a3.jpg?ts=1785321562998&w=1024'] }
    ,{ id: 111, brand: 'ZARA', cat: 'men', name: 'RELAXED FIT PRINTED SWEATSHIRT', nameMn: 'Хээтэй свитшорт', nameEn: 'Relaxed Fit Printed Sweatshirt', price: 4090, weightKg: 0.55, img: 'https://static.zara.net/assets/public/39da/87d5/e7174108bc51/65b62907fc86/03665301407-p/03665301407-p.jpg?ts=1789455676539&w=819', desc: 'Хээтэй сул загварын свитшорт. (ZARA Japan, хямдрал)', descEn: 'Printed relaxed-fit sweatshirt. (ZARA Japan, sale)', descJp: 'プリント入りリラックススウェットシャツ。（ZARA Japan、セール）', colors: ['BLUE'], url: 'https://www.zara.com/jp/en/relaxed-fit-printed-sweatshirt-p03665301.html', sizes: ['S', 'M', 'L', 'XL'], images: ['https://static.zara.net/assets/public/39da/87d5/e7174108bc51/65b62907fc86/03665301407-p/03665301407-p.jpg?ts=1789455676539&w=819'] }
    ,{ id: 112, brand: 'ZARA', cat: 'kids', name: 'SHINY NUMBER T-SHIRT', nameMn: 'Тоон хээтэй футболк (хүүхэд)', nameEn: 'Shiny Number T-Shirt (Kids)', price: 1690, weightKg: 0.15, img: 'https://static.zara.net/assets/public/32ca/6d19/0cc24c249481/5cc3b01bc0a2/T9920036545-p/T9920036545-p.jpg?ts=1786693087236&w=819', desc: 'Гялалзсан тоон хээтэй хүүхдийн футболк. (ZARA Japan, хямдрал)', descEn: 'Kids\' T-shirt with glitter number print. (ZARA Japan, sale)', descJp: 'ラメ数字プリント キッズTシャツ。（ZARA Japan、セール）', colors: ['White', 'Pastel pink'], url: 'https://www.zara.com/jp/en/shiny-number-t-shirt-p01165713.html', sizes: ['122cm', '131cm', '140cm', '148cm', '156cm', '164cm'], images: ['https://static.zara.net/assets/public/32ca/6d19/0cc24c249481/5cc3b01bc0a2/T9920036545-p/T9920036545-p.jpg?ts=1786693087236&w=819'] }
    ,{ id: 113, brand: 'ZARA', cat: 'kids', name: 'WIDE-LEG HEAVY WEIGHT TROUSERS', nameMn: 'Өргөн хүнд өмд (хүүхэд)', nameEn: 'Wide-Leg Heavy Weight Trousers (Kids)', price: 1990, weightKg: 0.3, img: 'https://static.zara.net/assets/public/0546/b97c/b5524f078093/69165f2d9ca6/04424700712-e1/04424700712-e1.jpg?ts=1779204170872&w=819', desc: 'Өргөн хүнд даавуун хүүхдийн өмд. (ZARA Japan, хямдрал)', descEn: 'Kids\' wide pants in heavy cotton. (ZARA Japan, sale)', descJp: 'キッズ用厚手コットンワイドパンツ。（ZARA Japan、セール）', colors: ['Ecru', 'Sky blue'], url: 'https://www.zara.com/jp/en/wide-leg-heavy-weight-trousers-p04424700.html', sizes: ['122cm', '131cm', '140cm', '148cm', '156cm', '164cm'], images: ['https://static.zara.net/assets/public/0546/b97c/b5524f078093/69165f2d9ca6/04424700712-e1/04424700712-e1.jpg?ts=1779204170872&w=819'] }
    ,{ id: 114, brand: 'ZARA', cat: 'kids', name: 'STUDDED KNIT TOP', nameMn: 'Чимэглэлтэй сүлжмэл топ (хүүхэд)', nameEn: 'Studded Knit Top (Kids)', price: 2470, weightKg: 0.2, img: 'https://static.zara.net/assets/public/08d0/311f/fc42442ba7de/97fddabfcbbf/05536709104-p/05536709104-p.jpg?ts=1784282486609&w=819', desc: 'Чимэглэлтэй сүлжмэл хүүхдийн топ. (ZARA Japan, хямдрал)', descEn: 'Kids\' knit top with embellishments. (ZARA Japan, sale)', descJp: '装飾付きニット キッズトップス。（ZARA Japan、セール）', colors: ['striped', 'Light grey'], url: 'https://www.zara.com/jp/en/studded-knit-top-p05536709.html', sizes: ['122cm', '131cm', '140cm', '148cm', '156cm', '164cm'], images: ['https://static.zara.net/assets/public/08d0/311f/fc42442ba7de/97fddabfcbbf/05536709104-p/05536709104-p.jpg?ts=1784282486609&w=819'] }
    ,{ id: 115, brand: 'ZARA', cat: 'kids', name: 'FLORAL RUFFLE SKIRT', nameMn: 'Цэцэгэн даруулгатай юбка (хүүхэд)', nameEn: 'Floral Ruffle Skirt (Kids)', price: 2470, weightKg: 0.2, img: 'https://static.zara.net/assets/public/750f/55cc/d32648e1a4aa/52fa4d1ec9cd/02511702406-p/02511702406-p.jpg?ts=1781593110473&w=819', desc: 'Цэцэгэн хээтэй даруулгатай хүүхдийн юбка. (ZARA Japan, хямдрал)', descEn: 'Kids\' floral skirt with smocking. (ZARA Japan, sale)', descJp: '花柄シャーリング キッズスカート。（ZARA Japan、セール）', colors: ['Light blue', 'Yellow'], url: 'https://www.zara.com/jp/en/floral-ruffle-skirt-p02511702.html', sizes: ['122cm', '131cm', '140cm', '148cm', '156cm', '164cm'], images: ['https://static.zara.net/assets/public/750f/55cc/d32648e1a4aa/52fa4d1ec9cd/02511702406-p/02511702406-p.jpg?ts=1781593110473&w=819'] }
    ,{ id: 116, brand: 'H&M', cat: 'women', name: 'フィットTシャツ', nameMn: 'Таарсан загварын футболк', nameEn: 'Fitted T-Shirt', price: 799, weightKg: 0.15, img: 'https://image.hm.com/assets/hm/1b/a8/1ba8ed8e6d58d4c6675fbc81d787bd17a0790666.jpg?imwidth=2160', desc: 'Таарсан загварын энгийн футболк. (H&M Japan, хямдрал)', descEn: 'Fitted plain T-shirt. (H&M Japan, sale)', descJp: 'フィット感のある無地Tシャツ。（H&M Japan、セール）', colors: ['クリーム', 'ブラック'], url: 'https://www2.hm.com/ja_jp/productpage.1234741002.html', sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'], images: ['https://image.hm.com/assets/hm/1b/a8/1ba8ed8e6d58d4c6675fbc81d787bd17a0790666.jpg?imwidth=2160'] }
    ,{ id: 117, brand: 'H&M', cat: 'women', name: 'コットンブレンドレギンス', nameMn: 'Хөвөн хольцтой леггинс', nameEn: 'Cotton Blend Leggings', price: 799, weightKg: 0.2, img: 'https://image.hm.com/assets/hm/78/51/7851c1a0de26c64723a5e3863ef6b83216fc45e4.jpg?imwidth=2160', desc: 'Хөвөн хольцтой леггинс. (H&M Japan, хямдрал)', descEn: 'Cotton-blend leggings. (H&M Japan, sale)', descJp: 'コットンブレンドレギンス。（H&M Japan、セール）', colors: ['ブラック'], url: 'https://www2.hm.com/ja_jp/productpage.0768912001.html', sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'], images: ['https://image.hm.com/assets/hm/78/51/7851c1a0de26c64723a5e3863ef6b83216fc45e4.jpg?imwidth=2160'] }
    ,{ id: 118, brand: 'H&M', cat: 'women', name: 'テクスチャードヘアバンド', nameMn: 'Үсний боолт', nameEn: 'Textured Headband', price: 899, weightKg: 0.05, img: 'https://image.hm.com/assets/hm/25/9a/259ab4a26243c6ccf41dcba051e4b69a569fc034.jpg?imwidth=2160', desc: 'Барзгар бүтэцтэй үсний боолт. (H&M Japan, хямдрал)', descEn: 'Textured hairband. (H&M Japan, sale)', descJp: 'テクスチャー素材のヘアバンド。（H&M Japan、セール）', colors: ['ライトターコイズ'], url: 'https://www2.hm.com/ja_jp/productpage.1347103003.html', sizes: ['NS'], images: ['https://image.hm.com/assets/hm/25/9a/259ab4a26243c6ccf41dcba051e4b69a569fc034.jpg?imwidth=2160'] }
    ,{ id: 119, brand: 'H&M', cat: 'women', name: 'スウェットショートパンツ', nameMn: 'Свит шорт', nameEn: 'Sweat Shorts', price: 999, weightKg: 0.25, img: 'https://image.hm.com/assets/hm/5f/25/5f2519afbee8f10deef316641defac5c8e326d49.jpg?imwidth=2160', desc: 'Зөөлөн свит шорт. (H&M Japan, хямдрал)', descEn: 'Soft sweatshorts. (H&M Japan, sale)', descJp: '柔らかなスウェットショーツ。（H&M Japan、セール）', colors: ['ライトグレーメランジ'], url: 'https://www2.hm.com/ja_jp/productpage.1329687002.html', sizes: ['XS', 'S', 'M', 'L', 'XL'], images: ['https://image.hm.com/assets/hm/5f/25/5f2519afbee8f10deef316641defac5c8e326d49.jpg?imwidth=2160'] }
    ,{ id: 120, brand: 'H&M', cat: 'women', name: '長袖ジャージーワンピース', nameMn: 'Урт ханцуйтай жерси даашинз', nameEn: 'Long Sleeve Jersey Dress', price: 1099, weightKg: 0.35, img: 'https://image.hm.com/assets/hm/97/70/9770b207f210ff0562c09505095fe245865ff0d7.jpg?imwidth=1080', desc: 'Урт ханцуйтай жерси даашинз. (H&M Japan, хямдрал)', descEn: 'Long-sleeve jersey dress. (H&M Japan, sale)', descJp: '長袖ジャージーワンピース。（H&M Japan、セール）', colors: ['ブラック', 'ダークブルー'], url: 'https://www2.hm.com/ja_jp/productpage.1328829001.html', sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'], swatches: {'ブラック': 'https://image.hm.com/assets/hm/b9/d3/b9d344475a7432cd864ccd62513c9672bbf334ea.jpg?imwidth=900', 'ダークブルー': 'https://image.hm.com/assets/hm/83/5a/835ae1e4e6dfe8c76745f0720f53f5c134d5d833.jpg?imwidth=900'}, images: ['https://image.hm.com/assets/hm/97/70/9770b207f210ff0562c09505095fe245865ff0d7.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/39/1b/391bd2268ee1cbfa6ee040440a9192fc63102ff2.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/cb/2c/cb2c276808bbc34641fe6523b2f66b0e4718d7df.jpg?imwidth=1080'] }
    ,{ id: 121, brand: 'H&M', cat: 'women', name: 'バルーンレッグ プルオンパンツ', nameMn: 'Бөмбөг хэлбэрийн өмд', nameEn: 'Balloon Leg Pull-On Pants', price: 1099, weightKg: 0.45, img: 'https://image.hm.com/assets/hm/f0/53/f0531a8f47efec5d64ad494a1b2bea09fbad46e8.jpg?imwidth=2160', desc: 'Бөмбөг хэлбэрийн уяатай өмд. (H&M Japan, хямдрал)', descEn: 'Balloon pants with tie waist. (H&M Japan, sale)', descJp: 'ウエストリボン付きバルーンパンツ。（H&M Japan、セール）', colors: ['ライトイエロー／ドット'], url: 'https://www2.hm.com/ja_jp/productpage.1322725004.html', sizes: ['XS', 'S', 'M', 'L'], images: ['https://image.hm.com/assets/hm/f0/53/f0531a8f47efec5d64ad494a1b2bea09fbad46e8.jpg?imwidth=2160'] }
    ,{ id: 122, brand: 'H&M', cat: 'men', name: 'リラックスフィットTシャツ', nameMn: 'Сул загварын футболк', nameEn: 'Relaxed Fit T-Shirt', price: 899, weightKg: 0.2, img: 'https://image.hm.com/assets/hm/56/0a/560aac888a36fe8e3f36ddc00987e909d7cd8057.jpg?imwidth=2160', desc: 'Сул загварын энгийн футболк. (H&M Japan, хямдрал)', descEn: 'Relaxed-fit plain T-shirt. (H&M Japan, sale)', descJp: 'リラックスフィットの無地Tシャツ。（H&M Japan、セール）', colors: ['ライトブルー'], url: 'https://www2.hm.com/ja_jp/productpage.1309319022.html', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], images: ['https://image.hm.com/assets/hm/56/0a/560aac888a36fe8e3f36ddc00987e909d7cd8057.jpg?imwidth=2160'] }
    ,{ id: 123, brand: 'H&M', cat: 'men', name: 'ソックス 2足セット', nameMn: 'Оймс (2 хос)', nameEn: 'Socks (2 Pairs)', price: 999, weightKg: 0.1, img: 'https://image.hm.com/assets/hm/f0/e8/f0e875f0471bbe8f06568b10ae1ab2fd983c9718.jpg?imwidth=2160', desc: 'Оймс, 2 хосын багц. (H&M Japan, хямдрал)', descEn: 'Socks, pack of 2 pairs. (H&M Japan, sale)', descJp: 'ソックス 2足組。（H&M Japan、セール）', colors: ['グリーン／ホワイト'], url: 'https://www2.hm.com/ja_jp/productpage.1303663001.html', sizes: ['37/39', '40/42', '43/45', '46/48'], images: ['https://image.hm.com/assets/hm/f0/e8/f0e875f0471bbe8f06568b10ae1ab2fd983c9718.jpg?imwidth=2160'] }
    ,{ id: 124, brand: 'H&M', cat: 'men', name: 'ネックレス 3本セット', nameMn: 'Хүзүүний зүүлт (3 ширхэг)', nameEn: 'Necklace (Set of 3)', price: 1099, weightKg: 0.05, img: 'https://image.hm.com/assets/hm/82/88/82888630bd9d9995bc5de71ee986201c088894f2.jpg?imwidth=2160', desc: 'Хүзүүний зүүлт, 3 ширхэгийн багц. (H&M Japan, хямдрал)', descEn: 'Necklace set of 3. (H&M Japan, sale)', descJp: 'ネックレス 3点セット。（H&M Japan、セール）', colors: ['ブラック'], url: 'https://www2.hm.com/ja_jp/productpage.1260146004.html', sizes: ['NS'], images: ['https://image.hm.com/assets/hm/82/88/82888630bd9d9995bc5de71ee986201c088894f2.jpg?imwidth=2160'] }
    ,{ id: 125, brand: 'H&M', cat: 'men', name: 'ブルーライトメガネ', nameMn: 'Цэнхэр гэрлийн шил', nameEn: 'Blue Light Glasses', price: 1099, weightKg: 0.05, img: 'https://image.hm.com/assets/hm/09/b7/09b7cf37abac662c0cc69a7009461c018dec51bc.jpg?imwidth=2160', desc: 'Дэлгэцийн цэнхэр гэрлээс хамгаалах шил. (H&M Japan, хямдрал)', descEn: 'Blue-light blocking glasses. (H&M Japan, sale)', descJp: 'ブルーライトカットメガネ。（H&M Japan、セール）', colors: ['ブラック'], url: 'https://www2.hm.com/ja_jp/productpage.1304294002.html', sizes: ['NS'], images: ['https://image.hm.com/assets/hm/09/b7/09b7cf37abac662c0cc69a7009461c018dec51bc.jpg?imwidth=2160'] }
    ,{ id: 126, brand: 'H&M', cat: 'kids', name: 'プリントボディスーツ', nameMn: 'Нярайн хээтэй боди', nameEn: 'Print Bodysuit (Baby)', price: 699, weightKg: 0.1, img: 'https://image.hm.com/assets/hm/4e/eb/4eebe97e14da785bd99973f5827586dd495d854c.jpg?imwidth=2160', desc: 'Нярайн хээтэй боди. (H&M Japan, хямдрал)', descEn: 'Baby printed bodysuit. (H&M Japan, sale)', descJp: 'ベビー用プリントボディスーツ。（H&M Japan、セール）', colors: ['ライトピンク／ストロベリー', 'ライトピンク／フローラル'], url: 'https://www2.hm.com/ja_jp/productpage.1320099001.html', sizes: ['55', '60', '70', '75', '80', '85', '90', '100'], images: ['https://image.hm.com/assets/hm/4e/eb/4eebe97e14da785bd99973f5827586dd495d854c.jpg?imwidth=2160'] }
    ,{ id: 127, brand: 'H&M', cat: 'kids', name: 'アンクルソックス 4足セット', nameMn: 'Нярайн оймс (4 хос)', nameEn: 'Ankle Socks (4 Pairs, Baby)', price: 799, weightKg: 0.05, img: 'https://image.hm.com/assets/hm/3f/91/3f9148061bce384f1bb63275177ae2752ef5020b.jpg?imwidth=2160', desc: 'Нярайн шагайн оймс, 4 хосын багц. (H&M Japan, хямдрал)', descEn: 'Baby ankle socks, pack of 4 pairs. (H&M Japan, sale)', descJp: 'ベビー用アンクルソックス 4足組。（H&M Japan、セール）', colors: ['ライトグリーン／フルーツ'], url: 'https://www2.hm.com/ja_jp/productpage.1334204002.html', sizes: ['13/15', '16/18', '19/21', '22/24', '25/27'], images: ['https://image.hm.com/assets/hm/3f/91/3f9148061bce384f1bb63275177ae2752ef5020b.jpg?imwidth=2160'] }
    ,{ id: 128, brand: 'H&M', cat: 'kids', name: 'コットンTシャツ', nameMn: 'Хүүхдийн хөвөн футболк', nameEn: 'Kids Cotton T-Shirt', price: 799, weightKg: 0.15, img: 'https://image.hm.com/assets/hm/13/2f/132fa8a5a1a3f5b6a71d96e8ff66ea3dc41d9637.jpg?imwidth=2160', desc: 'Хүүхдийн хөвөн футболк. (H&M Japan, хямдрал)', descEn: 'Kids\' cotton T-shirt. (H&M Japan, sale)', descJp: 'キッズ用コットンTシャツ。（H&M Japan、セール）', colors: ['ホワイト', 'ライトダスティグリーン'], url: 'https://www2.hm.com/ja_jp/productpage.0676207004.html', sizes: ['135/140', '145/150', '160/165', '170'], images: ['https://image.hm.com/assets/hm/13/2f/132fa8a5a1a3f5b6a71d96e8ff66ea3dc41d9637.jpg?imwidth=2160'] }
    ,{ id: 129, brand: 'H&M', cat: 'kids', name: 'コットンレギンス', nameMn: 'Хүүхдийн хөвөн леггинс', nameEn: 'Kids Cotton Leggings', price: 799, weightKg: 0.15, img: 'https://image.hm.com/assets/hm/5b/3e/5b3e19806da75643b79f2c0b718c63df83399970.jpg?imwidth=2160', desc: 'Хүүхдийн хөвөн леггинс. (H&M Japan, хямдрал)', descEn: 'Kids\' cotton leggings. (H&M Japan, sale)', descJp: 'キッズ用コットンレギンス。（H&M Japan、セール）', colors: ['ライトピンク／ハート'], url: 'https://www2.hm.com/ja_jp/productpage.1318550009.html', sizes: ['90', '100', '105', '110', '115', '120', '130', '135', '140'], images: ['https://image.hm.com/assets/hm/5b/3e/5b3e19806da75643b79f2c0b718c63df83399970.jpg?imwidth=2160'] }
    ,{ id: 130, brand: 'MICHAEL KORS', cat: 'women', name: 'ラインストーン エンベリッシュ スキューバ ミニドレス', nameMn: 'Райнстон чимэглэлтэй мини даашинз', nameEn: 'Rhinestone Embellished Scuba Mini Dress', price: 187500, weightKg: 0.45, img: 'https://michaelkors.jp/cdn/shop/files/MF683LCD6E-0036_1.jpg?v=1793121766&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['ニッケル'], url: 'https://michaelkors.jp/products/mf683lcd6e36', sizes: ['XXS', 'XS', 'S', 'M', 'L'], images: ['https://michaelkors.jp/cdn/shop/files/MF683LCD6E-0036_1.jpg?v=1793121766&width=1113'] }
    ,{ id: 131, brand: 'MICHAEL KORS', cat: 'women', name: 'オーバーサイズ バーニッシュレザー ジャケット', nameMn: 'Том загварын арьсан хүрэм', nameEn: 'Oversized Burnished Leather Jacket', price: 165500, weightKg: 1.2, img: 'https://michaelkors.jp/cdn/shop/files/MF620IXLKS-0201_1.jpg?v=1793027564&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['チョコレート'], url: 'https://michaelkors.jp/products/mf620ixlks201', sizes: ['XS/S', 'M/L'], images: ['https://michaelkors.jp/cdn/shop/files/MF620IXLKS-0201_1.jpg?v=1793027564&width=1113'] }
    ,{ id: 132, brand: 'MICHAEL KORS', cat: 'women', name: 'GWEN ウーヴン ホーボー ショルダーバッグ スモール', nameMn: 'GWEN сүлжмэл хобо цүнх (жижиг)', nameEn: 'GWEN Woven Hobo Shoulder Bag Small', price: 123700, weightKg: 0.8, img: 'https://michaelkors.jp/cdn/shop/files/30T6AZVH1L-0001_1.jpg?v=1792949454&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['ブラック', 'エッグシェル'], url: 'https://michaelkors.jp/products/30t6azvh1l1', sizes: ['NS'], images: ['https://michaelkors.jp/cdn/shop/files/30T6AZVH1L-0001_1.jpg?v=1792949454&width=1113'] }
    ,{ id: 133, brand: 'MICHAEL KORS', cat: 'women', name: 'フォーファー カラー ウール マキシコート', nameMn: 'Ноосон макси пальто (хиймэл үслэг захтай)', nameEn: 'Faux Fur Collar Wool Maxi Coat', price: 121500, weightKg: 1.4, img: 'https://michaelkors.jp/cdn/shop/files/9oZD3HXJRJkfKThPDvlq9d64m1pf_8-gTsQdgPNxFfkjgEC11XliGwEey06RYwJLUPy9VjN4DaDdEkVhQqgouuHKT45hwhNg7OIxBPyv_s0.jpg?v=1792949508&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['ブラック'], url: 'https://michaelkors.jp/products/mf620mybqa1', sizes: ['XXS', 'XS', 'S', 'M', 'L'], images: ['https://michaelkors.jp/cdn/shop/files/9oZD3HXJRJkfKThPDvlq9d64m1pf_8-gTsQdgPNxFfkjgEC11XliGwEey06RYwJLUPy9VjN4DaDdEkVhQqgouuHKT45hwhNg7OIxBPyv_s0.jpg?v=1792949508&width=1113'] }
    ,{ id: 134, brand: 'MICHAEL KORS', cat: 'women', name: 'TRAVEL トロリー ハードケース スモール - MKシグネチャー', nameMn: 'Аяллын хатуу чемодан (жижиг)', nameEn: 'TRAVEL Trolley Hard Case Small - MK Signature', price: 99500, weightKg: 2.8, img: 'https://michaelkors.jp/cdn/shop/files/Ol-RBcsWBSKG4eWsrG6xDscrnoDz8RLnqt_LyUhcTUftaPMpJYB_4S1Sn2LNts7n5K2ylYn9jPyolk4sbEPyVFjXtSPsGgVfQ6OcqbeZBOA_s0.jpg?v=1792949118&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['バニラ/エイコーン', 'ブラウン/エイコーン'], url: 'https://michaelkors.jp/products/30s0gtft3b1335', sizes: ['NS'], images: ['https://michaelkors.jp/cdn/shop/files/Ol-RBcsWBSKG4eWsrG6xDscrnoDz8RLnqt_LyUhcTUftaPMpJYB_4S1Sn2LNts7n5K2ylYn9jPyolk4sbEPyVFjXtSPsGgVfQ6OcqbeZBOA_s0.jpg?v=1792949118&width=1113'] }
    ,{ id: 135, brand: 'MICHAEL KORS', cat: 'women', name: 'LEXINGTON オーバーサイズ パヴェ シルバートーン ウォッチ', nameMn: 'LEXINGTON цаг (мөнгөлөг)', nameEn: 'LEXINGTON Oversized Pavé Silver-Tone Watch', price: 93450, weightKg: 0.3, img: 'https://michaelkors.jp/cdn/shop/files/TG8_J6TiPhXeP-GD6Ex0mspnSjjWq8VGm0y5jDToeuuy_KNC_SM0gaM7Xt_BYdA-rTc3rut_RoIwXjdvt4dwov9c249PAr56nog8ZU-cQw_s0.jpg?v=1790338662&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['シルバー'], url: 'https://michaelkors.jp/products/mk497240', sizes: ['NS'], images: ['https://michaelkors.jp/cdn/shop/files/TG8_J6TiPhXeP-GD6Ex0mspnSjjWq8VGm0y5jDToeuuy_KNC_SM0gaM7Xt_BYdA-rTc3rut_RoIwXjdvt4dwov9c249PAr56nog8ZU-cQw_s0.jpg?v=1790338662&width=1113'] }
    ,{ id: 136, brand: 'MICHAEL KORS', cat: 'men', name: 'ポケット ピーコート', nameMn: 'Пи пальто (халаастай)', nameEn: 'Pocket Peacoat', price: 145700, weightKg: 1.3, img: 'https://michaelkors.jp/cdn/shop/files/CF5209PBQA-055_1.jpg?v=1792736484&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['アッシュ'], url: 'https://michaelkors.jp/products/cf5209pbqa49', sizes: ['S', 'M', 'L', 'XL'], images: ['https://michaelkors.jp/cdn/shop/files/CF5209PBQA-055_1.jpg?v=1792736484&width=1113'] }
    ,{ id: 137, brand: 'MICHAEL KORS', cat: 'men', name: 'スエード フリンジ ジャケット', nameMn: 'Илгэн цацагтай хүрэм', nameEn: 'Suede Fringe Jacket', price: 121500, weightKg: 1.1, img: 'https://michaelkors.jp/cdn/shop/files/MLFuXY6jgkH3nOW9KZV5j9555xNbPwUJPwSsdIefCHpyYmugpfyuUCYDfCjlbCrTKHwGOn9f2rz_wgtl8pzwJgTLop0WyfFqBDjXCkaa_s0_8610e370-003f-48f2-8972-e5f218ea38af.jpg?v=1793027564&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['チョコレート'], url: 'https://michaelkors.jp/products/cf6802alr6201', sizes: ['S', 'M', 'L', 'XL'], images: ['https://michaelkors.jp/cdn/shop/files/MLFuXY6jgkH3nOW9KZV5j9555xNbPwUJPwSsdIefCHpyYmugpfyuUCYDfCjlbCrTKHwGOn9f2rz_wgtl8pzwJgTLop0WyfFqBDjXCkaa_s0_8610e370-003f-48f2-8972-e5f218ea38af.jpg?v=1793027564&width=1113'] }
    ,{ id: 138, brand: 'MICHAEL KORS', cat: 'men', name: 'JET SET フライト ダッフル - MKシグネチャー', nameMn: 'JET SET аяллын даффел цүнх', nameEn: 'JET SET Flight Duffel - MK Signature', price: 106100, weightKg: 1.2, img: 'https://michaelkors.jp/cdn/shop/files/H9aEDbBOm-Xxsg3kZosbSzGnB1vWzlfP5rRhfuRGkUYuDcx-AWFJ0NsTBicgmKHLIfKqXHhtHZAYFiMcgFuuaygDfqlFEkHL6Gzx2Gbtzdc_s0.jpg?v=1792736256&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['ブラウン/ラゲッジ', 'ブラック'], url: 'https://michaelkors.jp/products/33s6ljsu7b1', sizes: ['NS'], images: ['https://michaelkors.jp/cdn/shop/files/H9aEDbBOm-Xxsg3kZosbSzGnB1vWzlfP5rRhfuRGkUYuDcx-AWFJ0NsTBicgmKHLIfKqXHhtHZAYFiMcgFuuaygDfqlFEkHL6Gzx2Gbtzdc_s0.jpg?v=1792736256&width=1113'] }
    ,{ id: 139, brand: 'MICHAEL KORS', cat: 'men', name: 'HUDSON バーニッシュレザー バックパック', nameMn: 'HUDSON арьсан үүргэвч', nameEn: 'HUDSON Burnished Leather Backpack', price: 99500, weightKg: 1.1, img: 'https://michaelkors.jp/cdn/shop/files/33F6GHDB6L-0201_1.jpg?v=1793027557&width=1113', desc: 'Michael Kors Japan албан ёсны дэлгүүрийн бараа.', descEn: 'Item from the official Michael Kors Japan store.', descJp: 'Michael Kors Japan公式ストアの商品。', colors: ['チョコレート'], url: 'https://michaelkors.jp/products/33f6ghdb6l201', sizes: ['NS'], images: ['https://michaelkors.jp/cdn/shop/files/33F6GHDB6L-0201_1.jpg?v=1793027557&width=1113'] }
];

/* Албан ёсны сайтад дууссан өнгө/размерууд.
   variant түлхүүр: "өнгө|размер". Шинэчлэлтийг stock-sync шалгалтаар хийнэ. */
const SOLD_OUT_VARIANTS = {
    // 2026-10-29 хямдралын каталогийн шалгалт (sale-refresh)
    60: { variants: ['ダークウォッシュ|27', 'ダークウォッシュ|28', 'ダークウォッシュ|29'] },
    61: { variants: ['トゥルーブラック|M', 'トゥルーブラック|L', 'テラブラウン|M', 'テラブラウン|L'] },
    62: { variants: ['ブラック|XS', 'ブラック|S', 'ブラック|M', 'ニューオフホワイト|S'] },
    63: { colors: ['ブラックモスグリーン'], variants: ['トゥルーブラック|XXS', 'トゥルーブラック|XS', 'トゥルーブラック|M', 'トゥルーブラック|L', 'ウィッカータン|XXS', 'ウィッカータン|XS'] },
    64: { variants: ['ライトヘザーグレー|XXS', 'ライトヘザーグレー|XS', 'ネイビー|XXS', 'ネイビー|XS', 'ネイビー|S', 'カールストーン|XXS', 'カールストーン|XS'] },
    66: { variants: ['ブルー|S'] },
    67: { variants: ['タスカンレッド|XS', 'タスカンレッド|S', 'ニュークラシックネイビー|XS', 'ニュークラシックネイビー|S', 'ニュークラシックネイビー|L', 'ニュークラシックネイビー|XL', 'ミッションタン|XS'] },
    68: { variants: ['ブラックプレイド|L', 'ブラックプレイド|XL', 'デザートカモフラージュ|M', 'デザートカモフラージュ|L', 'デザートカモフラージュ|XL', 'ブラウンプレイド|M', 'ブラウンプレイド|L', 'ブラウンプレイド|XL'] },
    69: { variants: ['ブラウンプレイド|XS', 'ブラウンプレイド|S', 'ブラウンプレイド|M'] },
    70: { variants: ['フロストアイボリー|80cm', 'フロストアイボリー|90cm'] },
    73: { variants: ['シティスケープミルク|110cm', 'シティスケープミルク|130cm', 'シティスケープミルク|140cm', 'シティスケープミルク|150cm', 'シティスケープミルク|160cm', 'ビーチピンク|150cm', 'ビーチピンク|160cm', 'フラワープリント|140cm'] },
    74: { variants: ['RED|S', 'RED|M', 'RED|L', 'RED|XL', 'RED|XXL', 'RED|3XL'] },
    75: { variants: ['BLUE|S', 'BLUE|M', 'BLUE|L', 'BLUE|XL', 'BLUE|XXL'] },
    76: { variants: ['GRAY|S', 'GRAY|M', 'GRAY|L', 'GRAY|XL', 'GRAY|XXL', 'GRAY|3XL'] },
    77: { variants: ['WHITE|L'] },
    78: { variants: ['PINK|S', 'PINK|M', 'PINK|L', 'PINK|XL', 'PINK|XXL', 'PINK|3XL', 'PINK|4XL'] },
    79: { variants: ['BLUE|XXL', 'BLUE|3XL'] },
    80: { variants: ['WHITE|S', 'WHITE|M', 'WHITE|L', 'WHITE|XL', 'WHITE|XXL', 'WHITE|3XL', 'WHITE|4XL'] },
    81: { variants: ['WHITE|L'] },
    82: { variants: ['PINK|S', 'PINK|M', 'PINK|L', 'PINK|XL', 'PINK|XXL', 'PINK|3XL', 'PINK|4XL'] },
    83: { variants: ['PURPLE|XS', 'PURPLE|S', 'PURPLE|M', 'PURPLE|3XL', 'PURPLE|4XL'] },
    89: { colors: ['BLACK', 'BLUE'], variants: ['CREAM|M', 'CREAM|L', 'CREAM|XL', 'OFF WHITE|M', 'OFF WHITE|L', 'OFF WHITE|XL'] },
    90: { colors: ['DARK GRAY', 'BLACK'], variants: ['CREAM|S', 'CREAM|M', 'CREAM|L', 'CREAM|XL', 'CREAM|XXL', 'CREAM|3XL', 'PURPLE|S', 'PURPLE|M', 'PURPLE|L', 'PURPLE|XL', 'PURPLE|XXL', 'PURPLE|3XL'] },
    91: { colors: ['WINE'], variants: ['GREEN|S', 'GREEN|M', 'GREEN|L', 'GREEN|XL', 'GREEN|XXL', 'GREEN|3XL'] },
    92: { variants: ['NATURAL|L/XL', 'BLACK|L/XL'] },
    93: { variants: ['GREEN|L', 'GREEN|XL', 'GREEN|XXL', 'GREEN|3XL'] },
    96: { colors: ['YELLOW'], variants: ['GRAY|XS', 'GRAY|S', 'GRAY|XL', 'GRAY|XXL', 'GRAY|3XL'] },
    97: { variants: ['DARK GRAY|XS', 'DARK GRAY|M', 'DARK GRAY|L', 'DARK GRAY|XL', 'DARK GRAY|XXL', 'DARK GRAY|3XL'] },
    98: { variants: ['PINK|100cm', 'PINK|160cm'] },
    99: { variants: ['NAVY|110cm', 'NAVY|120cm', 'NAVY|130cm', 'NAVY|140cm', 'NAVY|150cm', 'NAVY|160cm'] },
    100: { colors: ['OFF WHITE', 'LIGHT GRAY'], variants: ['NAVY|M', 'NAVY|L'] },
    101: { colors: ['ORANGE', 'BLUE'], variants: ['DARK GRAY|100cm', 'DARK GRAY|120cm', 'DARK GRAY|130cm', 'DARK GRAY|140cm', 'DARK GRAY|150cm', 'DARK GRAY|160cm'] },
    103: { colors: ['Beige marl'], variants: ['Light yellow|S', 'Pink marl|S', 'Pink marl|M'] },
    104: { variants: ['Red|XL'] },
    105: { variants: ['Yellow|S', 'White|S', 'White|M'] },
    106: { variants: ['WHITE|S', 'WHITE|L'] },
    107: { variants: ['BLACK|S'] },
    108: { colors: ['Anthracite grey'], variants: ['Green|L', 'Green|XL'] },
    110: { variants: ['Black|36', 'Black|38', 'Black|40', 'Black|42', 'Bottle green|36', 'Brown|36', 'Brown|38', 'Brown|40', 'Khaki|36', 'Khaki|38', 'Khaki|40', 'Khaki|42', 'Grey marl|36', 'Grey marl|38', 'Grey marl|40'] },
    111: { variants: ['BLUE|S', 'BLUE|L', 'BLUE|XL'] },
    112: { variants: ['White|164cm', 'Pastel pink|140cm', 'Pastel pink|148cm', 'Pastel pink|156cm', 'Pastel pink|164cm'] },
    113: { colors: ['Sky blue'], variants: ['Ecru|131cm', 'Ecru|156cm', 'Ecru|164cm'] },
    114: { variants: ['Light grey|164cm'] },
    116: { variants: ['クリーム|S', 'クリーム|M', 'クリーム|L', 'クリーム|XL', 'ブラック|S', 'ブラック|M', 'ブラック|L', 'ブラック|XL'] },
    117: { variants: ['ブラック|XXS', 'ブラック|XS', 'ブラック|S', 'ブラック|M', 'ブラック|L', 'ブラック|XL', 'ブラック|XXL', 'ブラック|3XL'] },
    119: { variants: ['ライトグレーメランジ|XS', 'ライトグレーメランジ|S', 'ライトグレーメランジ|M', 'ライトグレーメランジ|L'] },
    122: { variants: ['ライトブルー|XS', 'ライトブルー|S', 'ライトブルー|M', 'ライトブルー|L', 'ライトブルー|XL'] },
    123: { variants: ['グリーン／ホワイト|37/39', 'グリーン／ホワイト|40/42', 'グリーン／ホワイト|46/48'] },
    126: { variants: ['ライトピンク／ストロベリー|60', 'ライトピンク／ストロベリー|70', 'ライトピンク／ストロベリー|75', 'ライトピンク／ストロベリー|85', 'ライトピンク／ストロベリー|90', 'ライトピンク／ストロベリー|100', 'ライトピンク／フローラル|60', 'ライトピンク／フローラル|70', 'ライトピンク／フローラル|75', 'ライトピンク／フローラル|80', 'ライトピンク／フローラル|85', 'ライトピンク／フローラル|90', 'ライトピンク／フローラル|100'] },
    127: { variants: ['ライトグリーン／フルーツ|13/15', 'ライトグリーン／フルーツ|16/18'] },
    128: { variants: ['ホワイト|145/150', 'ホワイト|160/165', 'ホワイト|170', 'ライトダスティグリーン|135/140', 'ライトダスティグリーン|160/165', 'ライトダスティグリーン|170'] },
    129: { variants: ['ライトピンク／ハート|90', 'ライトピンク／ハート|100', 'ライトピンク／ハート|105', 'ライトピンク／ハート|110', 'ライトピンク／ハート|115', 'ライトピンク／ハート|120'] },
    130: { variants: ['ニッケル|L'] },
    131: { variants: ['チョコレート|M/L'] },
    133: { variants: ['ブラック|L'] },
    136: { variants: ['アッシュ|S', 'アッシュ|L', 'アッシュ|XL'] }
};
function variantKey(color, size) { return `${color}|${size}`; }

function scrollBrandTabs(dir) {
    const el = $('brand-tabs');
    if (!el) return;
    const amount = dir * 230;
    if (typeof el.scrollBy === 'function') el.scrollBy({ left: amount, behavior: 'smooth' });
    else el.scrollLeft += amount;
}
function updateBrandArrows() {
    const el = $('brand-tabs');
    const left = $('brand-arrow-left');
    const right = $('brand-arrow-right');
    if (!el || !left || !right) return;
    const max = el.scrollWidth - el.clientWidth;
    const canScroll = max > 4;
    left.classList.toggle('is-hidden', !canScroll || el.scrollLeft <= 4);
    right.classList.toggle('is-hidden', !canScroll || el.scrollLeft >= max - 4);
}
function soldOutCfg(p) { return SOLD_OUT_VARIANTS[p.id] || {}; }
function isVariantSoldOut(p, color, size) {
    const cfg = soldOutCfg(p);
    return (cfg.colors || []).includes(color) || (cfg.sizes || []).includes(size) || (cfg.variants || []).includes(variantKey(color, size));
}
function isColorSoldOut(p, color) {
    const cfg = soldOutCfg(p);
    if ((cfg.colors || []).includes(color)) return true;
    const sizes = (p.sizes && p.sizes.length) ? p.sizes : ['NS'];
    return sizes.every(sz => isVariantSoldOut(p, color, sz));
}
function productHasAvailable(p) {
    const colors = (p.colors && p.colors.length) ? p.colors : ['black'];
    const sizes = (p.sizes && p.sizes.length) ? p.sizes : ['NS'];
    return colors.some(c => sizes.some(sz => !isVariantSoldOut(p, c, sz)));
}
function firstAvailableVariant(p) {
    const colors = (p.colors && p.colors.length) ? p.colors : ['black'];
    const sizes = (p.sizes && p.sizes.length) ? p.sizes : ['NS'];
    for (const c of colors) for (const sz of sizes) if (!isVariantSoldOut(p, c, sz)) return { color: c, size: sz };
    return null;
}
function cardAddButtonHtml(p) {
    const t = translations[currentLang];
    return productHasAvailable(p)
        ? `<button class="add-to-cart-btn" onclick="event.stopPropagation(); quickAddToCart(${p.id})">${t.btn_add_cart}</button>`
        : `<button class="add-to-cart-btn" disabled>${t.sold_out}</button>`;
}

// Холбоо барих мэдээлэл — хажуугийн цэсний доод хэсэгт харагдана
const CONTACT_PHONE = '';
const SOCIAL_LINKS = { facebook: '', instagram: '', line: '', gmail: '' };

const BRAND_COLORS = {
    'UNIQLO': '#FF0000', 'GU': '#0033A0', 'ZARA': '#000000',
    'H&M': '#E50010', 'GAP': '#002F6C', 'MICHAEL KORS': '#8A6D3B'
};

const PACKAGING_GRAMS = 200; // савлагааны жин (г), захиалга тутамд нэг удаа
const EXCHANGE_RATE = 23.39; // Хаан банк JPY бэлэн бус зарах ханш (2026-10-29)
const CARGO_RATE_PER_KG = 1500; // карго: 1 кг = ¥1,500 (граммаар тооцно: 1 г = ¥1.5)
const DELIVERY_FEE_MNT = 15000; // хот доторх хүргэлт ₮
// Захиалагчид төлбөр баталгаажсан и-мэйл илгээх (EmailJS). Тохиргоо хоосон бол илгээхгүй.
const EMAILJS_CONFIG = { publicKey: 'cuuajLZP5jz4XLWD9', serviceId: 'service_po1ko4e', templateId: 'template_8n3y9rc', templatePlacedId: 'template_7mbdthp' };

// ================= STATE =================
let currentLang = localStorage.getItem('lang') || 'mn';
let currentTheme = localStorage.getItem('theme') || 'light';
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// ===== SUPABASE (жинхэнэ бүртгэл) — URL ба ANON KEY оруулбал идэвхжинэ =====
const SUPABASE_URL = 'https://ozxfjkyefczertdflrca.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96eGZqa3llZmN6ZXJ0ZGZscmNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwODUyODIsImV4cCI6MjEwODY2MTI4Mn0.vwCnbVuHlxMGk2OVJZa_7_hSdvjIuO0FcJQzQrQw8dM';
const USE_SUPABASE = !!(SUPABASE_URL && SUPABASE_ANON_KEY);
let sb = null;
let currentUser = null; // { id, email, name, role }
let currentBrandFilter = 'all';
let currentCategory = 'all';
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
        hero_title: 'ЯПОН УЛСААС ХҮССЭН БАРААГАА ЗАХИАЛЪЯ',
        hero_desc: 'Японы шилдэг брэндүүдээс шууд худалдан аваарай. Хурдан, найдвартай, баталгаатай.',
        btn_shop_now: 'Одоо захиалах',
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
        step3_title: '3. Төлбөр төлөх', step3_desc: 'Банкны шилжүүлэг, PayPay QR-аар төлбөрөө төлнө.',
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
        checkout_subtotal: 'Дэд бараа үнэ', checkout_total: 'Нийт дүн (JPY)', checkout_weight: 'Жин', checkout_packaging: 'Савлагаа', checkout_cargo: 'Карго',
        cargo_by_weight: 'Бодит жингээр тооцно', accept_prices: 'Үйлчилгээний болон каргоны үнийг хүлээн зөвшөөрч байна', msg_accept_prices: 'Үргэлжлүүлэхийн тулд эхлээд үнийг хүлээн зөвшөөрнө үү', price_mnt_label: 'МНТ үнэ', delivery_city: 'Хүргэлт (хот дотор) — 15,000₮', checkout_delivery: 'Хүргэлт',
        ship_info: 'Хүргэлтийн мэдээлэл', pay_info: 'Төлбөрийн мэдээлэл',
        pay_visa: 'Visa карт', pay_visa_off: 'Түр боломжгүй', pay_visa_notice: 'Картаар төлөх боломж одоогоор байхгүй байна. Дансаар шилжүүлнэ үү.', pay_bank: 'Банкны шилжүүлэг', pay_method_label: 'Төлбөрийн хэлбэр:',
        pay_bank_note: 'Дээрх данснуудын аль нэг рүү шилжүүлэг хийнэ үү. Шилжүүлэг хийгдсэний дараа таны захиалга баталгаажна.',
        bank_mn_title: 'Монгол данс', bank_jp_title: 'Япон данс',
        bank_label_bank: 'Банк', bank_label_branch: 'Салбар', bank_label_number: 'Дансны дугаар', bank_label_holder: 'Дансны нэр',
        btn_copy: 'Хуулах', msg_copied: 'Хуулагдлаа',
        cat_men: 'Эрэгтэй', cat_women: 'Эмэгтэй', cat_kids: 'Хүүхэд',
        menu_title: 'Цэс', menu_lang_label: 'ХЭЛ', menu_theme_label: 'ЗАГВАР',
        theme_light: 'Гэрэл', theme_dark: 'Харанхуй', nav_cart: 'Миний сагс',
        nav_cart_short: 'Сагс', nav_account: 'Бүртгэл',
        nav_admin: 'Админ', forgot_password: 'Нууц үгээ мартсан уу?',
        form_new_password: 'Шинэ нууц үг', btn_set_password: 'Нууц үг шинэчлэх',
        msg_check_email: 'Бүртгэл үүслээ! Имэйл рүү тань очсон холбоосоор баталгаажуулна уу.',
        msg_reset_sent: 'Нууц үг сэргээх холбоосыг имэйл рүү тань явууллаа.',
        msg_fill_email: 'Эхлээд имэйлээ бичнэ үү',
        msg_reset_unavailable: 'Энэ боломж жинхэнэ бүртгэл идэвхжсэний дараа ажиллана.',
        msg_password_updated: 'Нууц үг шинэчлэгдлээ', msg_login_error: 'Имэйл эсвэл нууц үг буруу байна',
        msg_order_error: 'Захиалга хадгалахад алдаа гарлаа. Дахин оролдоно уу.',
        admin_orders_title: 'Захиалгууд (Админ)', admin_no_orders: 'Захиалга одоогоор алга',
        msg_status_updated: 'Төлөв шинэчлэгдлээ', sold_out: 'Дууссан', msg_variant_sold_out: 'Энэ өнгө/размер дууссан байна', msg_paid_email_sent: 'Захиалагчид баталгаажсан и-мэйл илгээлээ', msg_paid_email_failed: 'Төлөв шинэчлэгдсэн ч и-мэйл илгээгдсэнгүй', msg_placed_email_sent: 'Захиалгын мэдээлэл таны и-мэйл рүү илгээгдлээ', btn_back_home: 'Нүүр хуудас руу буцах',
        st_new: 'Шинэ', st_paid: 'Төлбөр төлөгдсөн', st_shipped: 'Илгээгдсэн', st_done: 'Дууссан', st_cancelled: 'Цуцлагдсан',
        pay_paypay_note: 'PayPay QR код энд гарна',
        pay_paypay_hint: 'QR кодыг PayPay аппаараа уншуулж төлбөрөө хийгээд, захиалгаа баталгаажуулна уу.',
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
        official_store: 'Албан ёсны дэлгүүрт харах',
        btn_buy_now: 'Худалдаж авах',
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
        hero_title: 'ORDER ANYTHING YOU WANT FROM JAPAN',
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
        step3_title: '3. Make Payment', step3_desc: 'Pay via bank transfer or PayPay QR.',
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
        checkout_subtotal: 'Subtotal', checkout_total: 'Total (JPY)', checkout_weight: 'Weight', checkout_packaging: 'Packaging', checkout_cargo: 'Cargo',
        cargo_by_weight: 'Charged by actual weight', accept_prices: 'I accept the service and cargo prices', msg_accept_prices: 'Please accept the prices to continue', price_mnt_label: 'MNT price', delivery_city: 'City delivery — 15,000₮', checkout_delivery: 'Delivery',
        ship_info: 'Shipping Information', pay_info: 'Payment Information',
        pay_visa: 'Visa card', pay_visa_off: 'Temporarily unavailable', pay_visa_notice: 'Card payment is not available yet. Please pay by bank transfer.', pay_bank: 'Bank transfer', pay_method_label: 'Payment method:',
        pay_bank_note: 'Please transfer to one of the accounts above. Your order is confirmed once the transfer arrives.',
        bank_mn_title: 'Mongolian account', bank_jp_title: 'Japanese account',
        bank_label_bank: 'Bank', bank_label_branch: 'Branch', bank_label_number: 'Account number', bank_label_holder: 'Account name',
        btn_copy: 'Copy', msg_copied: 'Copied',
        cat_men: 'Men', cat_women: 'Women', cat_kids: 'Kids',
        menu_title: 'Menu', menu_lang_label: 'LANGUAGE', menu_theme_label: 'THEME',
        theme_light: 'Light', theme_dark: 'Dark', nav_cart: 'My Cart',
        nav_cart_short: 'Cart', nav_account: 'Account',
        nav_admin: 'Admin', forgot_password: 'Forgot your password?',
        form_new_password: 'New password', btn_set_password: 'Update password',
        msg_check_email: 'Account created! Please confirm via the link sent to your email.',
        msg_reset_sent: 'A password reset link was sent to your email.',
        msg_fill_email: 'Please enter your email first',
        msg_reset_unavailable: 'Available once real accounts are enabled.',
        msg_password_updated: 'Password updated', msg_login_error: 'Wrong email or password',
        msg_order_error: 'Could not save the order. Please try again.',
        admin_orders_title: 'Orders (Admin)', admin_no_orders: 'No orders yet',
        msg_status_updated: 'Status updated', sold_out: 'Sold out', msg_variant_sold_out: 'This color/size is sold out', msg_paid_email_sent: 'Confirmation email sent to the customer', msg_paid_email_failed: 'Status updated, but the email was not sent', msg_placed_email_sent: 'Order details were emailed to you', btn_back_home: 'Back to home',
        st_new: 'New', st_paid: 'Paid', st_shipped: 'Shipped', st_done: 'Done', st_cancelled: 'Cancelled',
        pay_paypay_note: 'PayPay QR code will appear here',
        pay_paypay_hint: 'Scan the QR code with your PayPay app to pay, then confirm your order.',
        form_name: 'Full Name *', form_phone: 'Phone *', form_address: 'Address *',
        form_card_number: 'Card Number', form_expiry: 'Expiry',
        placeholder_phone: '0901234567', placeholder_address: 'Ulaanbaatar, Sukhbaatar district...',
        placeholder_card: '0000 0000 0000 0000', placeholder_expiry: 'MM/YY', placeholder_cvv: '123',
        btn_confirm: '✈️ Confirm Order', btn_back_short: '← Home',
        cart_title: '🛒 Cart', cart_empty_text: 'Your cart is empty',
        cart_empty_desc: 'Go back to shop and add items',
        cart_total: 'Total', btn_checkout: 'Checkout', btn_continue: 'Continue Shopping',
        btn_add_cart: 'Add to Cart',
        official_store: 'View at official store',
        btn_buy_now: 'Buy Now',
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
        hero_title: '日本から欲しい商品を注文しよう',
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
        step3_title: '3. お支払い', step3_desc: '銀行振込、PayPay QRでお支払い。',
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
        checkout_subtotal: '小計', checkout_total: '合計 (JPY)', checkout_weight: '重量', checkout_packaging: '梱包', checkout_cargo: 'カーゴ',
        cargo_by_weight: '実重量で計算します', accept_prices: 'サービス料金とカーゴ料金に同意します', msg_accept_prices: '続けるには料金への同意をお願いします', price_mnt_label: 'MNT価格', delivery_city: '市内配送 — 15,000₮', checkout_delivery: '配送',
        ship_info: '配送情報', pay_info: 'お支払い情報',
        pay_visa: 'Visaカード', pay_visa_off: '一時利用不可', pay_visa_notice: 'カード払いは現在ご利用いただけません。銀行振込でお支払いください。', pay_bank: '銀行振込', pay_method_label: 'お支払い方法:',
        pay_bank_note: '上記の口座のいずれかにお振込みください。お振込み確認後に注文が確定します。',
        bank_mn_title: 'モンゴルの口座', bank_jp_title: '日本の口座',
        bank_label_bank: '銀行', bank_label_branch: '支店', bank_label_number: '口座番号', bank_label_holder: '口座名義',
        btn_copy: 'コピー', msg_copied: 'コピーしました',
        cat_men: 'メンズ', cat_women: 'レディース', cat_kids: 'キッズ',
        menu_title: 'メニュー', menu_lang_label: '言語', menu_theme_label: 'テーマ',
        theme_light: 'ライト', theme_dark: 'ダーク', nav_cart: 'カート',
        nav_cart_short: 'カート', nav_account: 'アカウント',
        nav_admin: '管理者', forgot_password: 'パスワードをお忘れですか？',
        form_new_password: '新しいパスワード', btn_set_password: 'パスワードを更新',
        msg_check_email: '登録しました！メールに届いたリンクで確認してください。',
        msg_reset_sent: 'パスワード再設定リンクをメールに送りました。',
        msg_fill_email: 'まずメールアドレスを入力してください',
        msg_reset_unavailable: '本登録が有効になると使えます。',
        msg_password_updated: 'パスワードを更新しました', msg_login_error: 'メールまたはパスワードが違います',
        msg_order_error: '注文を保存できませんでした。もう一度お試しください。',
        admin_orders_title: '注文一覧（管理者）', admin_no_orders: '注文はまだありません',
        msg_status_updated: 'ステータスを更新しました', sold_out: '完売', msg_variant_sold_out: 'このカラー/サイズは完売しています', msg_paid_email_sent: 'お客様へ確認メールを送信しました', msg_paid_email_failed: 'ステータスは更新されましたが、メールは送信されませんでした', msg_placed_email_sent: '注文内容をメールでお送りしました', btn_back_home: 'ホームに戻る',
        st_new: '新規', st_paid: '支払済', st_shipped: '発送済', st_done: '完了', st_cancelled: 'キャンセル',
        pay_paypay_note: 'PayPay QRコードがここに表示されます',
        pay_paypay_hint: 'PayPayアプリでQRコードを読み取ってお支払い後、注文を確定してください。',
        form_name: '氏名 *', form_phone: '電話 *', form_address: '住所 *',
        form_card_number: 'カード番号', form_expiry: '有効期限',
        placeholder_phone: '0901234567', placeholder_address: 'ウランバートル、スフバートル区...',
        placeholder_card: '0000 0000 0000 0000', placeholder_expiry: 'MM/YY', placeholder_cvv: '123',
        btn_confirm: '✈️ 注文を確定する', btn_back_short: '← ホーム',
        cart_title: '🛒 カート', cart_empty_text: 'カートは空です',
        cart_empty_desc: 'ショップに戻って商品を追加してください',
        cart_total: '合計', btn_checkout: 'お支払い', btn_continue: '買い物を続ける',
        btn_add_cart: 'カートに追加',
        official_store: '公式ストアで見る',
        btn_buy_now: '今すぐ購入',
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
const checkoutWeight = $('checkout-weight');
const checkoutCargo = $('checkout-cargo');
const checkoutTotal = $('checkout-total');
const checkoutExchange = $('checkout-exchange');
const userBtn = $('user-btn');
const mobileLoginLink = $('mobile-login-link');
const mobileLoginLabel = $('mobile-login-label');
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
    syncMenuControls();
    initSupabase();
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

    fillContactInfo();

    const toTopBtn = $('to-top-btn');
    if (toTopBtn) {
        window.addEventListener('scroll', () => {
            toTopBtn.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
    }

    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));

    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => toggleMobileMenu(false));
    });

    menuBtn.addEventListener('click', () => toggleMobileMenu(true));
    closeBtn.addEventListener('click', () => toggleMobileMenu(false));
    overlay.addEventListener('click', () => toggleMobileMenu(false));

// Сонгосон брэндэд байхгүй ангиллын чипийг нуух (жишээ нь MK-д хүүхэд байхгүй)
function updateCatChips() {
    document.querySelectorAll('.cat-chip').forEach(chip => {
        const cat = chip.dataset.cat;
        if (cat === 'all' || currentBrandFilter === 'all') { chip.style.display = ''; return; }
        chip.style.display = PRODUCTS.some(p => p.brand === currentBrandFilter && p.cat === cat) ? '' : 'none';
    });
}

    document.querySelectorAll('.brand-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentBrandFilter = tab.dataset.brand;
            currentCategory = 'all';
            document.querySelectorAll('.cat-chip').forEach(c => c.classList.toggle('active', c.dataset.cat === 'all'));
            const cf = $('category-filter');
            if (cf) cf.classList.toggle('hidden', currentBrandFilter === 'all');
            updateCatChips();
            renderProducts();
        });
    });

    const brandTabsEl = $('brand-tabs');
    if (brandTabsEl) {
        brandTabsEl.addEventListener('scroll', updateBrandArrows, { passive: true });
        window.addEventListener('resize', updateBrandArrows);
        updateBrandArrows();
    }

    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = chip.dataset.cat;
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
    syncMenuControls();
}

function setThemeMode(mode) {
    currentTheme = mode;
    htmlEl.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
    updateThemeIcon();
    syncMenuControls();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    if (langSelect) langSelect.value = lang;
    applyLanguage();
    renderProducts();
    renderCart();
    renderCheckout();
    if (productModal.classList.contains('active') && selectedProduct) {
        openProductDetail(selectedProduct.id, true);
    }
    syncMenuControls();
}

function syncMenuControls() {
    document.querySelectorAll('.lang-icon-btn[data-lang]').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === currentLang);
    });
    const themeBtn = $('menu-theme-btn');
    if (themeBtn) themeBtn.innerHTML = currentTheme === 'dark' ? ICON_MOON : ICON_SUN;
}

function updateThemeIcon() {
    themeToggleBtn.innerHTML = currentTheme === 'dark' ? ICON_SUN : ICON_MOON;
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
    if (mobileLoginLabel) {
        mobileLoginLabel.textContent = isLoggedIn
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
async function handleUserClick() {
    if (isLoggedIn) {
        const t = translations[currentLang];
        if (confirm(t.msg_confirm_logout)) {
            if (USE_SUPABASE && sb) { try { await sb.auth.signOut(); } catch (err) {} }
            isLoggedIn = false;
            currentUser = null;
            localStorage.setItem('isLoggedIn', 'false');
            updateAuthUI();
            renderProducts();
            showToast(t.msg_logout_success, 'info');
        }
    } else {
        openAuthModal('login');
    }
}

async function applySession(session) {
    if (!session || !session.user) {
        currentUser = null;
        isLoggedIn = false;
        localStorage.setItem('isLoggedIn', 'false');
        updateAuthUI();
        renderProducts();
        return;
    }
    let profile = null;
    try {
        const { data } = await sb.from('profiles').select('name, role').eq('id', session.user.id).single();
        profile = data;
    } catch (err) { /* profile байхгүй бол энгийн хэрэглэгч */ }
    currentUser = {
        id: session.user.id,
        email: session.user.email,
        name: (profile && profile.name) || (session.user.user_metadata && session.user.user_metadata.name) || '',
        role: (profile && profile.role) || 'user'
    };
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateAuthUI();
    renderProducts();
}

async function initSupabase() {
    if (!USE_SUPABASE || !window.supabase) return;
    sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    try {
        const { data } = await sb.auth.getSession();
        if (data && data.session) await applySession(data.session);
    } catch (err) { /* сүлжээний алдаа бол демо горимоор үлдэнэ */ }
    sb.auth.onAuthStateChange(async (event, session) => {
        if (event === 'PASSWORD_RECOVERY') openResetForm();
        else if (event === 'SIGNED_OUT') await applySession(null);
        else if (event === 'SIGNED_IN' && session) await applySession(session);
    });
}

async function handleForgotPassword() {
    const t = translations[currentLang];
    if (!(USE_SUPABASE && sb)) { showToast(t.msg_reset_unavailable, 'info'); return; }
    const email = $('login-email').value.trim();
    if (!email) { showToast(t.msg_fill_email, 'warning'); return; }
    const { error } = await sb.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + window.location.pathname
    });
    if (error) { showToast(error.message, 'error'); return; }
    showToast(t.msg_reset_sent, 'success');
}

function openResetForm() {
    authModal.classList.add('active');
    loginForm.classList.remove('active');
    registerForm.classList.remove('active');
    $('reset-form').classList.add('active');
    document.body.style.overflow = 'hidden';
}

async function handleResetPassword(e) {
    e.preventDefault();
    const t = translations[currentLang];
    if (!(USE_SUPABASE && sb)) return;
    const password = $('reset-password').value;
    const { error } = await sb.auth.updateUser({ password });
    if (error) { showToast(error.message, 'error'); return; }
    $('reset-form').classList.remove('active');
    $('reset-form').reset();
    closeAuthModal();
    showToast(t.msg_password_updated, 'success');
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
    const rf = $('reset-form');
    if (rf) rf.classList.remove('active');
}

function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    tabLogin.classList.toggle('active', isLogin);
    tabRegister.classList.toggle('active', !isLogin);
    loginForm.classList.toggle('active', isLogin);
    registerForm.classList.toggle('active', !isLogin);
    const rf = $('reset-form');
    if (rf) rf.classList.remove('active');
}

async function handleLogin(e) {
    e.preventDefault();
    const t = translations[currentLang];
    if (USE_SUPABASE && sb) {
        const email = $('login-email').value.trim();
        const password = $('login-password').value;
        const { data, error } = await sb.auth.signInWithPassword({ email, password });
        if (error) { showToast(t.msg_login_error, 'error'); return; }
        await applySession(data.session);
        closeAuthModal();
        showToast(t.msg_login_success, 'success');
        loginForm.reset();
        return;
    }
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateAuthUI();
    closeAuthModal();
    renderProducts();
    showToast(t.msg_login_success, 'success');
    loginForm.reset();
}

async function handleRegister(e) {
    e.preventDefault();
    const t = translations[currentLang];
    if (USE_SUPABASE && sb) {
        const name = $('reg-name').value.trim();
        const email = $('reg-email').value.trim();
        const password = $('reg-password').value;
        const { data, error } = await sb.auth.signUp({ email, password, options: { data: { name } } });
        if (error) { showToast(error.message, 'error'); return; }
        if (data.session) {
            await applySession(data.session);
            closeAuthModal();
            showToast(t.msg_register_success, 'success');
        } else {
            closeAuthModal();
            showToast(t.msg_check_email, 'info');
        }
        registerForm.reset();
        return;
    }
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    updateAuthUI();
    closeAuthModal();
    renderProducts();
    showToast(t.msg_register_success, 'success');
    registerForm.reset();
}

function updateAuthUI() {
    const t = translations[currentLang];
    const adminItem = $('admin-nav-item');
    if (adminItem) adminItem.style.display = (isLoggedIn && currentUser && currentUser.role === 'admin') ? '' : 'none';
    const adminItemDesktop = $('admin-nav-item-desktop');
    if (adminItemDesktop) adminItemDesktop.style.display = (isLoggedIn && currentUser && currentUser.role === 'admin') ? '' : 'none';
    if (isLoggedIn) {
        userBtn.title = currentLang === 'jp' ? 'ログアウト' : currentLang === 'en' ? 'Logout' : 'Гарах';
        if (mobileLoginLabel) mobileLoginLabel.textContent = currentLang === 'jp' ? 'ログアウト' : currentLang === 'en' ? 'Logout' : 'Гарах';
        loginPrompt.classList.add('hidden');
        productsWrapper.classList.remove('hidden');
    } else {
        userBtn.title = t.btn_login;
        if (mobileLoginLabel) mobileLoginLabel.textContent = t.btn_login;
        loginPrompt.classList.add('hidden');
        productsWrapper.classList.remove('hidden');
    }
    requestAnimationFrame(updateBrandArrows);
}

// ================= PRODUCTS =================
function pname(p) {
    if (!p) return '';
    if (currentLang === 'mn') return p.nameMn || p.name;
    if (currentLang === 'en') return p.nameEn || p.name;
    return p.nameJp || p.name;
}
function pdesc(p) {
    if (!p) return '';
    if (currentLang === 'en') return p.descEn || p.desc;
    if (currentLang === 'jp') return p.descJp || p.desc;
    return p.desc;
}
const COLOR_TR = {"Anthracite grey":{"mn":"Антрацит саарал"},"BLACK":{"mn":"Хар"},"BLUE":{"mn":"Цэнхэр"},"Beige marl":{"mn":"Шаргал меланж"},"Black":{"mn":"Хар"},"Blue":{"mn":"Цэнхэр"},"Bottle green":{"mn":"Гүн ногоон"},"Brown":{"mn":"Бор"},"CREAM":{"mn":"Крем"},"DARK GRAY":{"mn":"Бараан саарал"},"DARK GREEN":{"mn":"Бараан ногоон"},"DARK ORANGE":{"mn":"Бараан улбар шар"},"Ecru":{"mn":"Экрю"},"GRAY":{"mn":"Саарал"},"GREEN":{"mn":"Ногоон"},"Green":{"mn":"Ногоон"},"Grey marl":{"mn":"Саарал меланж"},"Khaki":{"mn":"Хаки"},"LIGHT GRAY":{"mn":"Цайвар саарал"},"Light blue":{"mn":"Цайвар цэнхэр"},"Light grey":{"mn":"Цайвар саарал"},"Light yellow":{"mn":"Цайвар шар"},"NATURAL":{"mn":"Байгалийн өнгө"},"NAVY":{"mn":"Гүн хөх"},"OFF WHITE":{"mn":"Сүүн цагаан"},"OLIVE":{"mn":"Олив ногоон"},"ORANGE":{"mn":"Улбар шар"},"PINK":{"mn":"Ягаан"},"PURPLE":{"mn":"Нил ягаан"},"Pastel pink":{"mn":"Пастель ягаан"},"Pink marl":{"mn":"Ягаан меланж"},"RED":{"mn":"Улаан"},"Red":{"mn":"Улаан"},"Sky blue":{"mn":"Тэнгэрийн цэнхэр"},"WHITE":{"mn":"Цагаан"},"WINE":{"mn":"Бордо улаан"},"White":{"mn":"Цагаан"},"YELLOW":{"mn":"Шар"},"Yellow":{"mn":"Шар"},"striped":{"mn":"Судалтай"},"black":{"mn":"Хар"},"white":{"mn":"Цагаан"},"gray":{"mn":"Саарал"},"navy":{"mn":"Гүн хөх"},"red":{"mn":"Улаан"},"アッシュ":{"mn":"Үнсэн саарал","en":"Ash"},"ウィッカータン":{"mn":"Сагсан шаргал","en":"Wicker Tan"},"エッグシェル":{"mn":"Өндөгний хальсан өнгө","en":"Eggshell"},"オプティックホワイト":{"mn":"Тод цагаан","en":"Optic White"},"カールストーン":{"mn":"Чулуун саарал","en":"Carl Stone"},"クジラ":{"mn":"Халим хөх","en":"Whale Blue"},"クリーム":{"mn":"Крем","en":"Cream"},"グリーン／ホワイト":{"mn":"Ногоон/Цагаан","en":"Green/White"},"シティスケープミルク":{"mn":"Сүүн цайвар саарал","en":"Cityscape Milk"},"シルバー":{"mn":"Мөнгөлөг","en":"Silver"},"タスカンレッド":{"mn":"Тоскана улаан","en":"Tuscan Red"},"ダークウォッシュ":{"mn":"Бараан угаалттай деним","en":"Dark Wash"},"ダークブルー":{"mn":"Бараан цэнхэр","en":"Dark Blue"},"チョコレート":{"mn":"Шоколадан бор","en":"Chocolate"},"テラブラウン":{"mn":"Терра бор","en":"Terra Brown"},"デザートカモフラージュ":{"mn":"Цөлийн камуфляж","en":"Desert Camouflage"},"トゥルーブラック":{"mn":"Жинхэнэ хар","en":"True Black"},"ニッケル":{"mn":"Никель саарал","en":"Nickel"},"ニューオフホワイト":{"mn":"Сүүн цагаан","en":"New Off White"},"ニュークラシックネイビー":{"mn":"Сонгодог гүн хөх","en":"New Classic Navy"},"ネイビー":{"mn":"Гүн хөх","en":"Navy"},"バニラ/エイコーン":{"mn":"Ваниль/Царсны бор","en":"Vanilla/Acorn"},"ビーチピンク":{"mn":"Эргийн ягаан","en":"Beach Pink"},"フラワープリント":{"mn":"Цэцгэн хээтэй","en":"Flower Print"},"フロストアイボリー":{"mn":"Зааны ясан цагаан","en":"Frost Ivory"},"フロストアイボリーフローラル":{"mn":"Зааны ясан цагаан, цэцэгтэй","en":"Frost Ivory Floral"},"ブラウン/エイコーン":{"mn":"Бор/Царсны бор","en":"Brown/Acorn"},"ブラウン/ラゲッジ":{"mn":"Бор/Чемоданы бор","en":"Brown/Luggage"},"ブラウンプレイド":{"mn":"Бор алаг","en":"Brown Plaid"},"ブラック":{"mn":"Хар","en":"Black"},"ブラックプレイド":{"mn":"Хар алаг","en":"Black Plaid"},"ブラックモスグリーン":{"mn":"Хар хөвд ногоон","en":"Black Moss Green"},"ブルー":{"mn":"Цэнхэр","en":"Blue"},"ベインブリッジブルー":{"mn":"Бэйнбриж хөх","en":"Bainbridge Blue"},"ホワイト":{"mn":"Цагаан","en":"White"},"ポーセリンブルー":{"mn":"Шаазан цэнхэр","en":"Porcelain Blue"},"ミッションタン":{"mn":"Миссион шаргал","en":"Mission Tan"},"ムーンレスナイト":{"mn":"Саргүй шөнийн хар","en":"Moonless Night"},"モダンレッド":{"mn":"Орчин үеийн улаан","en":"Modern Red"},"ライトイエロー／ドット":{"mn":"Цайвар шар / Цэгтэй","en":"Light Yellow / Dot"},"ライトインディゴ":{"mn":"Цайвар индиго","en":"Light Indigo"},"ライトグリーン／フルーツ":{"mn":"Цайвар ногоон / Жимстэй","en":"Light Green / Fruit"},"ライトグレーメランジ":{"mn":"Цайвар саарал меланж","en":"Light Grey Melange"},"ライトターコイズ":{"mn":"Цайвар оюу","en":"Light Turquoise"},"ライトダスティグリーン":{"mn":"Цайвар бүдэг ногоон","en":"Light Dusty Green"},"ライトピンク／ストロベリー":{"mn":"Цайвар ягаан / Гүзээлзгэнэтэй","en":"Light Pink / Strawberry"},"ライトピンク／ハート":{"mn":"Цайвар ягаан / Зүрхтэй","en":"Light Pink / Heart"},"ライトピンク／フローラル":{"mn":"Цайвар ягаан / Цэцэгтэй","en":"Light Pink / Floral"},"ライトブルー":{"mn":"Цайвар цэнхэр","en":"Light Blue"},"ライトヘザーグレー":{"mn":"Цайвар алаг саарал","en":"Light Heather Grey"}};
function cname(c) {
    if (!c) return c;
    if (currentLang === 'jp') return c;
    const tr = COLOR_TR[c];
    if (!tr) return c;
    return currentLang === 'mn' ? (tr.mn || tr.en || c) : (tr.en || c);
}

function iname(item) {
    return pname(PRODUCTS.find(x => x.id === item.id)) || item.name || '';
}

function renderProducts() {

    let filtered = PRODUCTS;
    if (currentBrandFilter !== 'all') filtered = filtered.filter(p => p.brand === currentBrandFilter);
    if (currentCategory !== 'all') filtered = filtered.filter(p => p.cat === currentCategory);
    if (currentSearchQuery) {
        filtered = filtered.filter(p =>
            (p.name + ' ' + (p.nameMn || '') + ' ' + (p.nameEn || '') + ' ' + (p.nameJp || '')).toLowerCase().includes(currentSearchQuery) ||
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
                <img src="${p.img}" alt="${pname(p)}" loading="lazy">
                <span class="brand-badge" style="background:${BRAND_COLORS[p.brand] || '#333'}">${p.brand}</span>
                ${p.url ? '<span class="official-badge">✓ OFFICIAL</span>' : ''}
                ${productHasAvailable(p) ? '' : `<span class="sold-out-badge">${t.sold_out}</span>`}
                <button class="wishlist-btn-card" onclick="event.stopPropagation(); toggleWishlist(this)" aria-label="Wishlist">♡</button>
            </div>
            <div class="product-info">
                <h3>${pname(p)}</h3>
                <p class="brand-name">${p.brand}</p>
                <p class="price">¥${p.price.toLocaleString()}</p>
                <p class="price-mnt">${t.price_mnt_label}: ${fmtMNT(p.price).toLocaleString()}₮</p>
                ${cardAddButtonHtml(p)}
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
    if (!isLoggedIn) { openAuthModal('login'); return; }
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    selectedProduct = p;
    if (!keepOpen) {
        const firstAvail = firstAvailableVariant(p);
        selectedSize = firstAvail ? firstAvail.size : ((p.sizes && p.sizes.length) ? p.sizes[0] : 'M');
        selectedColor = firstAvail ? firstAvail.color : ((p.colors && p.colors.length) ? p.colors[0] : 'black');
        selectedQty = 1;
    }

    const colors = [
        { name: 'black', hex: '#000000' }, { name: 'white', hex: '#ffffff' },
        { name: 'gray', hex: '#888888' }, { name: 'navy', hex: '#1a237e' },
        { name: 'red', hex: '#c0392b' }
    ];
    const sizes = (p.sizes && p.sizes.length) ? p.sizes : ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const gallery = (p.images && p.images.length) ? p.images : [p.img];
    const t = translations[currentLang];

    const colorOptionsHtml = (p.colors && p.colors.length)
        ? p.colors.map(c => (p.swatches && p.swatches[c]) ? `
            <button type="button" class="color-swatch ${c === selectedColor ? 'active' : ''}${isColorSoldOut(p, c) ? ' sold-out' : ''}" data-full="${p.swatches[c].replace('w=105', 'w=655')}" onclick="selectColorUI(this, '${c}')" title="${cname(c)}" ${isColorSoldOut(p, c) ? 'disabled' : ''}><img src="${p.swatches[c]}" alt="${cname(c)}">${isColorSoldOut(p, c) ? `<span class="variant-out-badge">${t.sold_out}</span>` : ''}</button>
        ` : `
            <button type="button" class="color-chip ${c === selectedColor ? 'active' : ''}${isColorSoldOut(p, c) ? ' sold-out' : ''}" onclick="selectColorUI(this, '${c}')" ${isColorSoldOut(p, c) ? 'disabled' : ''}><span class="dot" style="background:${JP_COLOR_HEX[c] || '#ccc'}"></span>${cname(c)}${isColorSoldOut(p, c) ? `<span class="variant-out-label">${t.sold_out}</span>` : ''}</button>
        `).join('')
        : colors.map(c => `
            <div class="color-circle ${c.name === selectedColor ? 'active' : ''}"
                 style="background:${c.hex};${c.name === 'white' ? 'border:2px solid #ddd;' : ''}"
                 onclick="selectColor(this, '${c.name}')" title="${cname(c.name)}"></div>
        `).join('');

    $('product-detail-content').innerHTML = `
        <div class="detail-layout">
            <div class="detail-gallery">
                <img id="detail-main-img" src="${gallery[0]}" alt="${pname(p)}" class="detail-img">
                ${gallery.length > 1 ? `<div class="detail-thumbs">${gallery.map((src, i) => `<img src="${src}" class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="selectThumb(this, '${src}')" alt="">`).join('')}</div>` : ''}
            </div>
            <div class="detail-info">
                <p class="brand-tag">${p.brand}</p>
                <h2>${pname(p)}</h2>
                <p class="price">¥${p.price.toLocaleString()}</p>
                <p class="price-mnt">${t.price_mnt_label}: ${fmtMNT(p.price).toLocaleString()}₮</p>
                <p class="detail-weight">${t.checkout_weight}: ${Math.round((p.weightKg || 0) * 1000)} г</p>
                <p class="desc">${pdesc(p)}</p>
                ${p.url ? `<a class="official-link" href="${p.url}" target="_blank" rel="noopener">🔗 ${t.official_store}</a>` : ''}

                <div class="selector-group">
                    <label>${t.detail_color}: <span id="selected-color-name" class="selected-value">${cname(selectedColor)}</span></label>
                    <div class="color-options">
                        ${colorOptionsHtml}
                    </div>
                </div>

                <div class="selector-group">
                    <label>${t.detail_size}</label>
                    <div class="size-options">
                        ${sizes.map(s => `<button type="button" class="size-btn ${s === selectedSize ? 'active' : ''}${isVariantSoldOut(p, selectedColor, s) ? ' sold-out' : ''}" data-size="${s}" onclick="selectSize(this, '${s}')" ${isVariantSoldOut(p, selectedColor, s) ? 'disabled' : ''}>${s}${isVariantSoldOut(p, selectedColor, s) ? `<span class="variant-out-label">${t.sold_out}</span>` : ''}</button>`).join('')}
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

                <div class="detail-actions">
                    <button class="btn btn-primary detail-add-btn" id="detail-add-btn" onclick="addToCartFromDetail()" ${isVariantSoldOut(p, selectedColor, selectedSize) ? 'disabled' : ''}>
                        🛒 ${t.btn_add_cart}
                    </button>
                    <button class="btn btn-buy-now detail-add-btn" id="detail-buy-btn" onclick="buyNowFromDetail()" ${isVariantSoldOut(p, selectedColor, selectedSize) ? 'disabled' : ''}>
                        ⚡ ${t.btn_buy_now}
                    </button>
                </div>
            </div>
        </div>
    `;

    refreshVariantAvailability();

    if (!keepOpen) {
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function refreshVariantAvailability() {
    if (!selectedProduct) return;
    document.querySelectorAll('.size-btn').forEach(btn => {
        const sz = btn.getAttribute('data-size');
        if (!sz) return;
        const out = isVariantSoldOut(selectedProduct, selectedColor, sz);
        btn.disabled = out;
        btn.classList.toggle('sold-out', out);
        let lbl = btn.querySelector('.variant-out-label');
        if (out && !lbl) { lbl = document.createElement('span'); lbl.className = 'variant-out-label'; lbl.textContent = translations[currentLang].sold_out; btn.appendChild(lbl); }
        if (!out && lbl) lbl.remove();
    });
    if (isVariantSoldOut(selectedProduct, selectedColor, selectedSize)) {
        const first = (selectedProduct.sizes || []).find(sz => !isVariantSoldOut(selectedProduct, selectedColor, sz));
        if (first) {
            selectedSize = first;
            document.querySelectorAll('.size-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-size') === first));
        }
    }
    const unavailable = !productHasAvailable(selectedProduct) || isVariantSoldOut(selectedProduct, selectedColor, selectedSize);
    const addBtn = $('detail-add-btn'); if (addBtn) addBtn.disabled = unavailable;
    const buyBtn = $('detail-buy-btn'); if (buyBtn) buyBtn.disabled = unavailable;
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    selectedProduct = null;
}

function selectSize(btn, size) {
    if (btn.disabled) return;
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
    refreshVariantAvailability();
}

const JP_COLOR_HEX = {
    'ブラック': '#151515', 'トゥルーブラック': '#151515', 'ホワイト': '#ffffff',
    'オプティックホワイト': '#ffffff', 'ニューオフホワイト': '#f3eee3',
    'グレー': '#8a8a8a', 'ライトヘザーグレー': '#bcbcbc', 'ネイビー': '#1a237e',
    'レッド': '#c0392b', 'モダンレッド': '#d21f2b', 'ブルー': '#2b5ea7',
    'ポーセリンブルー': '#a8c4e0', 'ムーンレスナイト': '#23283b',
    'ブラウン': '#6d4c41', 'テラブラウン': '#9a5b43', 'ブラウンプレイド': '#8a6d4f',
    'ライトインディゴ': '#7fa3c7', 'ダークウォッシュ': '#2c3e50',
    'ブラックモスグリーン': '#4a5548', 'ウィッカータン': '#c8a165', 'カールストーン': '#cfc8bb'
};

function selectColorUI(el, name) {
    if (el.disabled) return;
    document.querySelectorAll('.color-chip, .color-swatch').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    selectedColor = name;
    const lbl = $('selected-color-name');
    if (lbl) lbl.textContent = cname(name);
    const full = el.getAttribute('data-full');
    if (full) {
        const main = $('detail-main-img');
        if (main) main.src = full;
    }
    refreshVariantAvailability();
}

function selectThumb(el, src) {
    document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    const main = $('detail-main-img');
    if (main) main.src = src;
}

function selectColorChip(el, name) { selectColorUI(el, name); }

function selectColor(el, color) {
    document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    selectedColor = color;
    const lbl = $('selected-color-name');
    if (lbl) lbl.textContent = color;
}

function changeQty(delta) {
    selectedQty = Math.max(1, selectedQty + delta);
    const el = $('qty-display');
    if (el) el.textContent = selectedQty;
}

function addSelectedToCart() {
    if (!selectedProduct) return false;
    if (isVariantSoldOut(selectedProduct, selectedColor, selectedSize)) { showToast(translations[currentLang].msg_variant_sold_out, 'warning'); return false; }
    const existing = cart.find(i => i.id === selectedProduct.id && i.size === selectedSize && i.color === selectedColor);
    if (existing) existing.qty += selectedQty;
    else cart.push({
        id: selectedProduct.id, brand: selectedProduct.brand, name: selectedProduct.name,
        price: selectedProduct.price, img: selectedProduct.img,
        size: selectedSize, color: selectedColor, qty: selectedQty
    });
    saveCart();
    return true;
}

function addToCartFromDetail() {
    if (!addSelectedToCart()) return;
    closeProductModal();
    showToast(translations[currentLang].msg_added_to_cart, 'success');
}

function buyNowFromDetail() {
    if (!addSelectedToCart()) return;
    closeProductModal();
    goToCheckout();
}

function quickAddToCart(id) {
    if (!isLoggedIn) { openAuthModal('login'); return; }
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const defColor = (p.colors && p.colors.length) ? p.colors[0] : 'black';
    const existing = cart.find(i => i.id === id && i.size === 'M' && i.color === defColor);
    if (existing) existing.qty += 1;
    else cart.push({ id: p.id, brand: p.brand, name: p.name, price: p.price, img: p.img, size: 'M', color: defColor, qty: 1 });
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
    const bnavBadge = $('bnav-cart-badge');
    if (bnavBadge) {
        bnavBadge.textContent = total;
        bnavBadge.style.display = total > 0 ? 'flex' : 'none';
    }
}

function setBnavActive(name) {
    document.querySelectorAll('.bnav-item').forEach(b => {
        b.classList.toggle('active', b.dataset.bnav === name);
    });
}

function bnavGo(action) {
    if (action === 'home') {
        navigateTo('home');
    } else if (action === 'products') {
        navigateTo('home');
        setBnavActive('products');
        setTimeout(scrollToProducts, 80);
    } else if (action === 'cart') {
        openCart();
    } else if (action === 'account') {
        handleUserClick();
    }
}

function openCart() {
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
            <img src="${item.img}" alt="${iname(item)}">
            <div class="cart-item-info">
                <h4>${iname(item)}</h4>
                <p class="brand">${item.brand}</p>
                <p class="attrs">${item.size} | ${cname(item.color)} | x${item.qty}</p>
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
// PayPay QR зургийн хаяг (хоосон бол placeholder харагдана)
const PAYPAY_QR_URL = 'paypay-qr.jpg';

// Банкны данснууд — шилжүүлгийн хэсэгт харагдана
const BANK_ACCOUNTS = {
    mn: { bank: 'М Банк', number: 'MN970039008000004436', holder: 'Дармаа Батдэлгэр' },
    jp: { bank: 'ソニー銀行', branch: '001', number: '7403210', holder: 'ダルマー バタデルゲル' }
};

function copyText(elId) {
    const el = $(elId);
    if (!el) return;
    const text = el.textContent.trim();
    if (!text || text === '—') return;
    const done = () => showToast(translations[currentLang].msg_copied, 'success');
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
        fallbackCopy(text, done);
    }
}

function fallbackCopy(text, done) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* noop */ }
    document.body.removeChild(ta);
}

function fillContactInfo() {
    const phoneEl = $('menu-phone-number');
    const phoneLink = $('menu-phone');
    if (phoneEl) phoneEl.textContent = CONTACT_PHONE || '—';
    if (phoneLink && CONTACT_PHONE) {
        phoneLink.href = 'tel:' + CONTACT_PHONE.replace(/[^+\d]/g, '');
        phoneLink.removeAttribute('onclick');
    }
    Object.keys(SOCIAL_LINKS).forEach(key => {
        if (!SOCIAL_LINKS[key]) return;
        document.querySelectorAll('[data-social="' + key + '"]').forEach(el => {
            el.href = SOCIAL_LINKS[key];
            el.removeAttribute('onclick');
            el.target = '_blank';
            el.rel = 'noopener';
        });
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function fillBankDetails() {
    const set = (id, v) => { const el = $(id); if (el) el.textContent = v || '—'; };
    set('bank-mn-bank', BANK_ACCOUNTS.mn.bank);
    set('bank-mn-number', BANK_ACCOUNTS.mn.number);
    set('bank-mn-holder', BANK_ACCOUNTS.mn.holder);
    set('bank-jp-bank', BANK_ACCOUNTS.jp.bank);
    set('bank-jp-branch', BANK_ACCOUNTS.jp.branch);
    set('bank-jp-number', BANK_ACCOUNTS.jp.number);
    set('bank-jp-holder', BANK_ACCOUNTS.jp.holder);
}
let selectedPaymentMethod = 'bank';

function selectPaymentMethod(method, el) {
    if (method === 'visa') {
        const t = translations[currentLang];
        showToast(t.pay_visa_notice, 'warning');
        method = 'bank';
    }
    selectedPaymentMethod = method;
    document.querySelectorAll('.pay-method').forEach(b => b.classList.toggle('active', b.dataset.method === method));
    ['visa', 'bank', 'paypay'].forEach(m => {
        const p = $('pay-panel-' + m);
        if (p) p.classList.toggle('hidden', m !== method);
    });
}

function itemWeight(i) { const p = PRODUCTS.find(x => x.id === i.id); return (p && p.weightKg) || i.weight || 0; }
function itemWeightGrams(i) { return Math.round(itemWeight(i) * 1000); }
function cartGoodsWeightGrams() { return cart.reduce((sum, i) => sum + itemWeightGrams(i) * i.qty, 0); }
function cartBilledWeightGrams() { if (!cart.length) return 0; return cartGoodsWeightGrams() + PACKAGING_GRAMS; }
function cargoFeeForGrams(grams) { return Math.round(grams * CARGO_RATE_PER_KG / 1000); }
function fmtMNT(yen) { return Math.round(yen * EXCHANGE_RATE / 100) * 100; }
function deliveryFeeYen() { return Math.round(DELIVERY_FEE_MNT / EXCHANGE_RATE); }
function paintSummary() {
    const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    const billed = cartBilledWeightGrams();
    const cargoFee = cart.length ? cargoFeeForGrams(billed) : 0;
    const delivChecked = !!($('city-delivery') && $('city-delivery').checked);
    const delivYen = delivChecked ? deliveryFeeYen() : 0;
    checkoutSubtotal.textContent = `¥${subtotal.toLocaleString()}`;
    if (checkoutWeight) checkoutWeight.textContent = `${cartGoodsWeightGrams().toLocaleString()} г`;
    const pRow = $('checkout-packaging-row'); if (pRow) pRow.style.display = cart.length ? '' : 'none';
    const pEl = $('checkout-packaging'); if (pEl) pEl.textContent = `${PACKAGING_GRAMS.toLocaleString()} г`;
    if (checkoutCargo) checkoutCargo.textContent = `¥${cargoFee.toLocaleString()}`;
    const dRow = $('checkout-delivery-row'); if (dRow) dRow.style.display = delivChecked ? '' : 'none';
    const dEl = $('checkout-delivery'); if (dEl) dEl.textContent = `¥${delivYen.toLocaleString()}`;
    const total = subtotal + cargoFee + delivYen;
    checkoutTotal.textContent = `¥${total.toLocaleString()}`;
    if (checkoutExchange) checkoutExchange.textContent = cart.length ? `${translations[currentLang].price_mnt_label}: ${((fmtMNT(subtotal + cargoFee)) + (delivChecked ? DELIVERY_FEE_MNT : 0)).toLocaleString()}₮` : '';
    return { subtotal, cargoFee, delivYen, total };
}
function updateConfirmState() { const cb = $('accept-prices'); const btn = $('confirm-order-btn'); if (btn) btn.disabled = !(cb && cb.checked); }

function renderCheckout() {
    const t = translations[currentLang];
    const acceptCb = $('accept-prices'); if (acceptCb) acceptCb.checked = false; updateConfirmState();

    if (PAYPAY_QR_URL) {
        const img = $('paypay-qr-img');
        const note = $('paypay-qr-note');
        if (img) { img.src = PAYPAY_QR_URL; img.style.display = 'block'; }
        if (note) note.style.display = 'none';
    }
    fillBankDetails();

    if (cart.length === 0) {
        checkoutItems.innerHTML = `<p style="text-align:center;color:var(--text-secondary);padding:20px;">${t.msg_cart_empty}</p>`;
        paintSummary();
        return;
    }

    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.img}" alt="${iname(item)}">
            <div class="checkout-item-info">
                <p><strong>${iname(item)}</strong></p>
                <p class="small">${item.brand} | ${item.size} | ${cname(item.color)} | x${item.qty} | ${itemWeightGrams(item)} г</p>
                <p class="price">¥${(item.price * item.qty).toLocaleString()}</p>
            </div>
        </div>
    `).join('');

    paintSummary();
}

// ================= PAYMENT =================
async function processPayment() {
    const t = translations[currentLang];
    if (!isLoggedIn) { openAuthModal('login'); return; }
    if (cart.length === 0) { showToast(t.msg_cart_empty, 'warning'); return; }
    const acceptCb = $('accept-prices');
    if (!acceptCb || !acceptCb.checked) { showToast(t.msg_accept_prices, 'warning'); return; }

    const name = $('ship-name').value.trim();
    const phone = $('ship-phone').value.trim();
    const address = $('ship-address').value.trim();

    if (!name || !phone || !address) {
        showToast(t.msg_fill_fields, 'error');
        return;
    }

    if (selectedPaymentMethod === 'visa') {
        // Visa is temporarily disabled: fall back to bank transfer.
        selectPaymentMethod('bank');
    }

    if (USE_SUPABASE && sb && currentUser) {
        const items = cart.map(i => { const p = PRODUCTS.find(x => x.id === i.id); const cimg = (p && p.swatches && i.color && p.swatches[i.color]) || i.img || ''; return { id: i.id, brand: i.brand || (p ? p.brand : ''), name: iname(i), size: i.size || '', color: i.color || '', qty: i.qty, price: i.price, weight: (p && p.weightKg) || 0, img: cimg }; });
        const sum = paintSummary();
        const total = sum.total;
        const { data: inserted, error } = await sb.from('orders').insert({
            user_id: currentUser.id, email: currentUser.email,
            name, phone, address, items, total, payment_method: selectedPaymentMethod
        }).select('id').single();
        if (error) { showToast(t.msg_order_error, 'error'); return; }
        const placedOrder = { id: inserted ? inserted.id : '', email: currentUser.email, name, phone, items, total, payment_method: selectedPaymentMethod };
        const placedSent = await sendOrderPlacedEmail(placedOrder, sum);
        if (placedSent) showToast(t.msg_placed_email_sent, 'success');
    }

    const orderNum = '#JB' + Date.now().toString().slice(-8);
    $('order-number').textContent = orderNum;
    const payEl = $('order-payment');
    if (payEl) payEl.textContent = selectedPaymentMethod === 'visa' ? t.pay_visa : selectedPaymentMethod === 'bank' ? t.pay_bank : 'PayPay QR';

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
    const adminView = $('admin-view');
    if (adminView) adminView.classList.remove('active');
    if (viewName === 'home') { homeView.classList.add('active'); setBnavActive('home'); }
    if (viewName === 'checkout') {
        checkoutView.classList.add('active');
        renderCheckout();
    }
    if (viewName === 'admin' && adminView) {
        adminView.classList.add('active');
        loadAdminOrders();
    }
    toggleMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ================= ADMIN =================
function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const ORDER_STATUSES = ['new', 'paid', 'shipped', 'done', 'cancelled'];
let adminOrdersById = {};

function orderItemsText(o) {
    return (o.items || []).map(i => `• ${i.name} — өнгө: ${cname(i.color) || '-'}, размер: ${i.size || '-'}, тоо: ${i.qty}, үнэ: ¥${(i.price * i.qty).toLocaleString()}`).join('\n');
}
function orderItemsHtml(o) {
    return (o.items || []).map(i => `• ${esc(i.name)} — өнгө: ${esc(cname(i.color) || '-')}, размер: ${esc(i.size || '-')}, тоо: ${i.qty}, үнэ: ¥${(i.price * i.qty).toLocaleString()}`).join('<br>');
}
async function sendPaidOrderEmail(order) {
    if (!order || !order.email) return false;
    const cfg = EMAILJS_CONFIG;
    if (!(cfg.publicKey && cfg.serviceId && cfg.templateId && window.emailjs)) return false;
    try {
        await window.emailjs.send(cfg.serviceId, cfg.templateId, {
            to_email: order.email,
            to_name: order.name || '',
            order_id: order.id,
            order_total: `¥${(order.total || 0).toLocaleString()}`,
            order_items: orderItemsText(order),
            order_items_html: orderItemsHtml(order),
            payment_method: order.payment_method || '',
            customer_phone: order.phone || '',
            store_name: 'JAPANBUY'
        }, { publicKey: cfg.publicKey });
        return true;
    } catch (err) {
        console.warn('Paid email failed', err);
        return false;
    }
}

async function sendOrderPlacedEmail(order, sum) {
    if (!order || !order.email) return false;
    const cfg = EMAILJS_CONFIG;
    if (!(cfg.publicKey && cfg.serviceId && cfg.templatePlacedId && window.emailjs)) return false;
    try {
        const totalMnt = fmtMNT(sum.subtotal + sum.cargoFee) + (sum.delivYen > 0 ? DELIVERY_FEE_MNT : 0);
        await window.emailjs.send(cfg.serviceId, cfg.templatePlacedId, {
            to_email: order.email,
            to_name: order.name || '',
            order_id: order.id,
            subtotal: `¥${(sum.subtotal || 0).toLocaleString()}`,
            cargo_fee: `¥${(sum.cargoFee || 0).toLocaleString()}`,
            order_total: `¥${(order.total || 0).toLocaleString()}`,
            exchange_rate: EXCHANGE_RATE.toLocaleString(),
            total_mnt: totalMnt.toLocaleString(),
            order_items: orderItemsText(order),
            order_items_html: orderItemsHtml(order),
            payment_method: order.payment_method || '',
            customer_phone: order.phone || '',
            store_name: 'JAPANBUY'
        }, { publicKey: cfg.publicKey });
        return true;
    } catch (err) {
        console.warn('Placed email failed', err);
        return false;
    }
}

async function loadAdminOrders() {
    const box = $('admin-orders');
    if (!box) return;
    const t = translations[currentLang];
    if (!(USE_SUPABASE && sb)) { box.innerHTML = ''; return; }
    box.innerHTML = '<p class="admin-note">...</p>';
    const { data, error } = await sb.from('orders').select('*').order('created_at', { ascending: false }).limit(100);
    if (error) { box.innerHTML = '<p class="admin-note">' + esc(t.msg_order_error) + '</p>'; return; }
    if (!data || data.length === 0) { box.innerHTML = '<p class="admin-note">' + esc(t.admin_no_orders) + '</p>'; return; }
    adminOrdersById = {};
    data.forEach(o => { adminOrdersById[o.id] = o; });
    box.innerHTML = data.map(o => {
        const itemsHtml = (o.items || []).map(i => {
            const p = PRODUCTS.find(x => x.id === i.id);
            const img = i.img || (p && p.swatches && i.color && p.swatches[i.color]) || (p ? p.img : '');
            const meta = [i.brand || (p ? p.brand : ''), cname(i.color), i.size, (i.weight || (p && p.weightKg)) ? ((i.weight || p.weightKg) + ' кг') : ''].filter(Boolean).map(x => esc(x)).join(' · ');
            return `<div class="admin-item">${img ? `<img class="admin-item-img" src="${esc(img)}" alt="" loading="lazy">` : ''}<div class="admin-item-main"><div>${esc(i.name)} × ${i.qty}</div><div class="admin-item-meta">${meta}</div></div><span class="admin-item-price">¥${(i.price * i.qty).toLocaleString()}</span></div>`;
        }).join('');
        const opts = ORDER_STATUSES.map(s => `<option value="${s}" ${s === o.status ? 'selected' : ''}>${esc(t['st_' + s] || s)}</option>`).join('');
        const date = new Date(o.created_at).toLocaleString();
        return `<div class="admin-order">
            <div class="admin-order-head"><strong>#${o.id}</strong><span>${esc(date)}</span></div>
            <div class="admin-order-meta">${esc(o.name)} · ${esc(o.phone)} · ${esc(o.address)}</div>
            <div class="admin-order-meta">${esc(o.email)} · ${esc(o.payment_method)}</div>
            ${itemsHtml}
            <div class="admin-order-foot"><strong>¥${(o.total || 0).toLocaleString()}</strong>
            <select onchange="updateOrderStatus(${o.id}, this.value)">${opts}</select></div>
        </div>`;
    }).join('');
}

async function updateOrderStatus(id, status) {
    if (!(USE_SUPABASE && sb)) return;
    const order = adminOrdersById[id] || null;
    const previousStatus = order ? order.status : null;
    const { error } = await sb.from('orders').update({ status }).eq('id', id);
    if (error) { showToast(translations[currentLang].msg_order_error, 'error'); return; }
    if (order) order.status = status;
    showToast(translations[currentLang].msg_status_updated, 'success');
    if (status === 'paid' && previousStatus !== 'paid' && order) {
        const sent = await sendPaidOrderEmail(order);
        showToast(translations[currentLang][sent ? 'msg_paid_email_sent' : 'msg_paid_email_failed'], sent ? 'success' : 'warning');
    }
}

console.log('✅ JAPANBUY ачаалагдлаа! Хэл:', currentLang, '| Бүтээгдэхүүн:', PRODUCTS.length);