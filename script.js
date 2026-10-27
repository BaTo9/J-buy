/**
 * ============================================================
 *  JAPANBUY - Product Config (ЭНД ЗӨВХӨН ӨӨРЧИЛНӨ)
 * ============================================================
 */
const ICON_SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

const PRODUCTS = [
    { id: 18, brand: 'GAP', cat: 'women', name: 'ヘビーウェイト フレンチテリー GAPロゴ バギースウェットパンツ', nameMn: 'GAP логотой өргөн свит өмд', nameEn: 'Heavyweight French Terry GAP Logo Baggy Sweatpants', price: 3999, img: 'https://www2.assets-gap.com/webcontent/0063/087/043/cn63087043.jpg?q=h&w=655', desc: 'Зузаан френч терри өмд, GAP логотой, сул загвар. (GAP Japan албан ёсны дэлгүүр)', colors: ['ライトヘザーグレー', 'ネイビー', 'モダンレッド', 'カールストーン'], url: 'https://www.gap.co.jp/gap/heavyweight-french-terry-gap-logo-baggy-sweatpants/911044006.html?dwvar_911044006_color=911044006&cid=1177311' , sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'ライトヘザーグレー': 'https://www2.assets-gap.com/webcontent/0063/087/043/cn63087043.jpg?q=h&w=105', 'ネイビー': 'https://www2.assets-gap.com/webcontent/0062/898/692/cn62898692.jpg?q=h&w=105', 'モダンレッド': 'https://www2.assets-gap.com/webcontent/0062/764/801/cn62764801.jpg?q=h&w=105', 'カールストーン': 'https://www2.assets-gap.com/webcontent/0063/099/553/cn63099553.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/087/043/cn63087043.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/067/cn63087067.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/047/cn63087047.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/080/cn63087080.jpg?q=h&w=655'] },
    { id: 19, brand: 'GAP', cat: 'women', name: 'デニム ミディ ペンシルスカート', nameMn: 'Жинсэн миди харандаа юбка', nameEn: 'Denim Midi Pencil Skirt', price: 2999, img: 'https://www2.assets-gap.com/webcontent/0063/423/500/cn63423500.jpg?q=h&w=655', desc: 'Деним миди урт харандаа юбка. (GAP Japan албан ёсны дэлгүүр)', colors: ['ダークウォッシュ'], url: 'https://www.gap.co.jp/gap/denim-midi-pencil-skirt/1180244006.html?dwvar_1180244006_color=1180244006&cid=1177311' , sizes: ['23', '24', '25', '26', '27', '28', '29'], swatches: {'ダークウォッシュ': 'https://www2.assets-gap.com/webcontent/0063/423/500/cn63423500.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/423/500/cn63423500.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/211/327/cn63211327.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/211/334/cn63211334.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/423/562/cn63423562.jpg?q=h&w=655'] },
    { id: 20, brand: 'GAP', cat: 'women', name: 'モダンリブ ヘンリーネック マキシワンピース', nameMn: 'Макси даашинз (Хенли хүзүүтэй)', nameEn: 'Modern Rib Henley Maxi Dress', price: 2999, img: 'https://www2.assets-gap.com/webcontent/0063/283/438/cn63283438.jpg?q=h&w=655', desc: 'Рип даавуун, хэнли хүзүүтэй урт даашинз. (GAP Japan албан ёсны дэлгүүр)', colors: ['トゥルーブラック', 'テラブラウン'], url: 'https://www.gap.co.jp/gap/modern-rib-henley-maxi-dress/912664016.html?dwvar_912664016_color=912664016&cid=1177311' , sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'トゥルーブラック': 'https://www2.assets-gap.com/webcontent/0063/283/438/cn63283438.jpg?q=h&w=105', 'テラブラウン': 'https://www2.assets-gap.com/webcontent/0062/913/721/cn62913721.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/283/438/cn63283438.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/277/285/cn63277285.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/277/318/cn63277318.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/277/367/cn63277367.jpg?q=h&w=655'] },
    { id: 23, brand: 'GAP', cat: 'women', name: 'ハイライズ ミニ ユーティリティ ミニスカート・スコート', nameMn: 'Мини юбка-шорт', nameEn: 'High-Rise Mini Utility Skort', price: 2999, img: 'https://www2.assets-gap.com/webcontent/0063/087/225/cn63087225.jpg?q=h&w=655', desc: 'Өндөр суудалтай мини юбка-шорт. Үлдэгдэл бага. (GAP Japan албан ёсны дэлгүүр)', colors: ['トゥルーブラック', 'ウィッカータン', 'ブラックモスグリーン'], url: 'https://www.gap.co.jp/gap/high-rise-mini-utility-skort/898546036.html?dwvar_898546036_color=898546036&cid=1177311' , sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'トゥルーブラック': 'https://www2.assets-gap.com/webcontent/0063/087/225/cn63087225.jpg?q=h&w=105', 'ウィッカータン': 'https://www2.assets-gap.com/webcontent/0063/078/835/cn63078835.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/087/225/cn63087225.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/230/cn63087230.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/147/077/cn63147077.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/087/336/cn63087336.jpg?q=h&w=655'] },
    { id: 24, brand: 'GAP', cat: 'women', name: 'ミッドライズ ベルト バギーデニム', nameMn: 'Бүстэй өргөн жинсэн өмд', nameEn: 'Mid-Rise Belted Baggy Jeans', price: 4999, img: 'https://www2.assets-gap.com/webcontent/0062/132/779/cn62132779.jpg?q=h&w=655', desc: 'Бүстэй, сул загварын баги деним жийнс. (GAP Japan албан ёсны дэлгүүр)', colors: ['ライトインディゴ'], url: 'https://www.gap.co.jp/gap/mid-rise-belted-baggy-jeans/893789006.html?dwvar_893789006_color=893789006&cid=1177311' , sizes: ['23', '24', '25', '26', '27', '28', '29', '30'], swatches: {'ライトインディゴ': 'https://www2.assets-gap.com/webcontent/0062/132/779/cn62132779.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0062/132/779/cn62132779.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0062/131/852/cn62131852.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0062/131/876/cn62131876.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0062/131/928/cn62131928.jpg?q=h&w=655'] },
    { id: 25, brand: 'GAP', cat: 'women', name: 'オーガニックコットン ポプリン スクープネック トップス', nameMn: 'Поплин топ (органик хөвөн)', nameEn: 'Organic Cotton Poplin Scoop-Neck Top', price: 2999, img: 'https://www2.assets-gap.com/webcontent/0063/290/455/cn63290455.jpg?q=h&w=655', desc: 'Органик хөвөн поплин топ. (GAP Japan албан ёсны дэлгүүр)', colors: ['ブラック', 'ニューオフホワイト'], url: 'https://www.gap.co.jp/gap/organic-cotton-poplin-scoop-neck-top/913904006.html?dwvar_913904006_color=913904006&cid=1177311' , sizes: ['XXS', 'XS', 'S', 'M', 'L'], swatches: {'ブラック': 'https://www2.assets-gap.com/webcontent/0063/290/455/cn63290455.jpg?q=h&w=105', 'ニューオフホワイト': 'https://www2.assets-gap.com/webcontent/0062/913/629/cn62913629.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0063/290/455/cn63290455.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/289/270/cn63289270.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/289/267/cn63289267.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/289/302/cn63289302.jpg?q=h&w=655'] },
    { id: 26, brand: 'GAP', cat: 'women', name: 'リラックスフィット ピケ クロップド ポロシャツ', nameMn: 'Богино поло цамц (пике)', nameEn: 'Relaxed Pique Cropped Polo Shirt', price: 1499, img: 'https://www2.assets-gap.com/webcontent/0061/830/553/cn61830553.jpg?q=h&w=655', desc: 'Сул загварын богино поло цамц. (GAP Japan албан ёсны дэлгүүр)', colors: ['ポーセリンブルー', 'オプティックホワイト', 'ブルー', 'ムーンレスナイト'], url: 'https://www.gap.co.jp/gap/relaxed-pique-crop-polo/867536046.html?dwvar_867536046_color=867536046&cid=1177311' , sizes: ['XS', 'S', 'M', 'L', 'XL'], swatches: {'ポーセリンブルー': 'https://www2.assets-gap.com/webcontent/0062/001/381/cn62001381.jpg?q=h&w=105', 'オプティックホワイト': 'https://www2.assets-gap.com/webcontent/0061/830/553/cn61830553.jpg?q=h&w=105', 'ブルー': 'https://www2.assets-gap.com/webcontent/0061/791/414/cn61791414.jpg?q=h&w=105', 'ムーンレスナイト': 'https://www2.assets-gap.com/webcontent/0061/791/429/cn61791429.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0061/830/553/cn61830553.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/829/888/cn61829888.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/829/887/cn61829887.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/828/880/cn61828880.jpg?q=h&w=655'] },
    { id: 27, brand: 'GAP', cat: 'women', name: 'ボクシーフィット オックスフォードシャツ', nameMn: 'Оксфорд цамц (boxy)', nameEn: 'Boxy Fit Oxford Shirt', price: 2999, img: 'https://www2.assets-gap.com/webcontent/0061/220/296/cn61220296.jpg?q=h&w=655', desc: 'Бокси загварын оксфорд цамц. (GAP Japan албан ёсны дэлгүүр)', colors: ['ブラウンプレイド'], url: 'https://www.gap.co.jp/gap/oxford-shirt-in-boxy-fit/888336036.html?dwvar_888336036_color=888336036&cid=1177311' , sizes: ['XS', 'S', 'M', 'L', 'XL'], swatches: {'ブラウンプレイド': 'https://www2.assets-gap.com/webcontent/0061/220/296/cn61220296.jpg?q=h&w=105'}, images: ['https://www2.assets-gap.com/webcontent/0061/220/296/cn61220296.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/220/317/cn61220317.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/220/331/cn61220331.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/220/358/cn61220358.jpg?q=h&w=655'] },
    { id: 28, brand: 'GAP', cat: 'men', name: 'リラックスフィット GAPロゴ フレンチテリー ジョガーパンツ', nameMn: 'GAP логотой жоггер өмд', nameEn: 'Relaxed GAP Logo French Terry Jogger Pants', price: 1999, img: 'https://www2.assets-gap.com/webcontent/0063/453/588/cn63453588.jpg?q=h&w=655', desc: 'GAP логотой зөөлөн жоггер өмд — өдөр тутмын өмсгөлд тохиромжтой.', colors: ['ブラックプレイド', 'デザートカモフラージュ', 'ブラウンプレイド'], sizes: ['XS', 'S', 'M', 'L', 'XL'], swatches: { 'ブラックプレイド': 'https://www2.assets-gap.com/webcontent/0063/453/047/cn63453047.jpg?q=h&w=655', 'デザートカモフラージュ': 'https://www2.assets-gap.com/webcontent/0063/459/089/cn63459089.jpg?q=h&w=655', 'ブラウンプレイド': 'https://www2.assets-gap.com/webcontent/0063/329/431/cn63329431.jpg?q=h&w=655' }, images: ['https://www2.assets-gap.com/webcontent/0063/453/588/cn63453588.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/453/061/cn63453061.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/560/471/cn63560471.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0063/452/938/cn63452938.jpg?q=h&w=655'], url: 'https://www.gap.co.jp/gap/relaxed-gap-logo-french-terry-joggers/907376006.html' }
    ,{ id: 29, brand: 'GAP', cat: 'kids', name: 'GapKids セサミストリート オーバーサイズ クルーネック スウェットシャツ', nameMn: 'Хүүхдийн цамц — Сесами гудамж', nameEn: 'GapKids Sesame Street Oversized Crewneck Sweatshirt', price: 1699, img: 'https://www2.assets-gap.com/webcontent/0061/716/396/cn61716396.jpg?q=h&w=655', desc: 'Сесами гудамж зурагтай хүүхдийн цамц.', colors: ['ニューオフホワイト', 'サマーアザレア'], sizes: ['110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], swatches: { 'ニューオフホワイト': 'https://www2.assets-gap.com/webcontent/0061/711/340/cn61711340.jpg?q=h&w=655', 'サマーアザレア': 'https://www2.assets-gap.com/webcontent/0061/711/390/cn61711390.jpg?q=h&w=655' }, images: ['https://www2.assets-gap.com/webcontent/0061/716/396/cn61716396.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/711/306/cn61711306.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/711/330/cn61711330.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/712/147/cn61712147.jpg?q=h&w=655'], url: 'https://www.gap.co.jp/gap/gapkids-%7C-sesame-street-oversized-wedge-crewneck-sweatshirt/870849016.html' }
    ,{ id: 30, brand: 'GAP', cat: 'kids', name: 'GapKids | マインクラフト グラフィックTシャツ', nameMn: 'Хүүхдийн футболк — Minecraft', nameEn: 'GapKids Minecraft Graphic T-Shirt', price: 1999, img: 'https://www2.assets-gap.com/webcontent/0060/272/566/cn60272566.jpg?q=h&w=655', desc: 'Minecraft зурагтай хүүхдийн футболк.', colors: ['ブラック', 'ブルー', 'グレークリスタル'], sizes: ['110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], swatches: { 'ブラック': 'https://www2.assets-gap.com/webcontent/0060/272/284/cn60272284.jpg?q=h&w=655', 'ブルー': 'https://www2.assets-gap.com/webcontent/0060/272/300/cn60272300.jpg?q=h&w=655', 'グレークリスタル': 'https://www2.assets-gap.com/webcontent/0060/272/311/cn60272311.jpg?q=h&w=655' }, images: ['https://www2.assets-gap.com/webcontent/0060/272/566/cn60272566.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0060/272/480/cn60272480.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0060/272/381/cn60272381.jpg?q=h&w=655'], url: 'https://www.gap.co.jp/gap/gapkids-%7C-minecraft-graphic-t-shirt/796954006.html' }
    ,{ id: 31, brand: 'GAP', cat: 'kids', name: 'リラックスフィット GAPロゴTシャツ (キッズ)', nameMn: 'Хүүхдийн GAP лого футболк', nameEn: 'Kids Relaxed GAP Logo T-Shirt', price: 999, img: 'https://www2.assets-gap.com/webcontent/0061/284/861/cn61284861.jpg?q=h&w=655', desc: 'GAP логотой хүүхдийн футболк.', colors: ['ラベンダー'], sizes: ['120cm', '130cm', '140cm', '150cm', '160cm'], swatches: { 'ラベンダー': 'https://www2.assets-gap.com/webcontent/0061/284/775/cn61284775.jpg?q=h&w=655' }, images: ['https://www2.assets-gap.com/webcontent/0061/284/861/cn61284861.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/284/879/cn61284879.jpg?q=h&w=655', 'https://www2.assets-gap.com/webcontent/0061/284/867/cn61284867.jpg?q=h&w=655'], url: 'https://www.gap.co.jp/gap/kids-relaxed-gap-logo-t-shirt/890744036.html' }
    ,{ id: 32, brand: 'UNIQLO', cat: 'women', name: 'パフテックブルゾン', nameMn: 'Паффтек блузон куртка', nameEn: 'PUFFTECH Blouson', price: 9990, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/item/jpgoods_69_487469_3x4.jpg?width=1000', desc: 'Хөнгөн дулаан паффтек блузон куртка.', colors: ['NAVY', 'NATURAL'], sizes: ['S', 'M', 'L', 'XL'], swatches: { 'NAVY': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/item/jpgoods_69_487469_3x4.jpg?width=1000', 'NATURAL': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/item/jpgoods_30_487469_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/item/jpgoods_69_487469_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/sub/jpgoods_487469_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/sub/jpgoods_487469_sub4_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487469/sub/jpgoods_487469_sub5_3x4.jpg?width=1000'], url: 'https://www.uniqlo.com/jp/ja/products/E487469-000/00' }
    ,{ id: 33, brand: 'UNIQLO', cat: 'women', name: 'ボアフリースコンビネーションジャケット', nameMn: 'Боа флийс хосолсон куртка', nameEn: 'Boa Fleece Combination Jacket', price: 3990, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/item/jpgoods_69_487594_3x4.jpg?width=1000', desc: 'Боа флийс хосолсон дулаан куртка.', colors: ['NAVY', 'OFF WHITE', 'BLACK', 'WINE'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], swatches: { 'NAVY': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/item/jpgoods_69_487594_3x4.jpg?width=1000', 'OFF WHITE': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/item/jpgoods_01_487594_3x4.jpg?width=1000', 'BLACK': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/item/jpgoods_09_487594_3x4.jpg?width=1000', 'WINE': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/item/jpgoods_18_487594_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/item/jpgoods_69_487594_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487594/sub/jpgoods_487594_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/487594/sub/goods_487594_sub11_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/487594/sub/goods_487594_sub12_3x4.jpg?width=1000'], url: 'https://www.uniqlo.com/jp/ja/products/E487594-000/00' }
    ,{ id: 34, brand: 'UNIQLO', cat: 'women', name: 'コーティングブルゾン', nameMn: 'Бүрээстэй блузон куртка', nameEn: 'Coated Blouson', price: 7990, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487883/item/jpgoods_08_487883_3x4.jpg?width=1000', desc: 'Бүрээстэй, ус нэвтэрдэггүй шахуу блузон.', colors: ['DARK GRAY', 'DARK BROWN'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], swatches: { 'DARK GRAY': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487883/item/jpgoods_08_487883_3x4.jpg?width=1000', 'DARK BROWN': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487883/item/jpgoods_39_487883_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487883/item/jpgoods_08_487883_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487883/sub/jpgoods_487883_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/487883/sub/jpgoods_487883_sub4_3x4.jpg?width=1000'], url: 'https://www.uniqlo.com/jp/ja/products/E487883-000/00' }
    ,{ id: 35, brand: 'UNIQLO', cat: 'men', name: 'パデッドシャツジャケット', nameMn: 'Дүүргэчтэй цамцан куртка', nameEn: 'Padded Shirt Jacket', price: 6990, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489492/item/jpgoods_39_489492_3x4.jpg?width=1000', desc: 'Дүүргэчтэй цамцан куртка (unisex).', colors: ['DARK BROWN', 'WINE'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], swatches: { 'DARK BROWN': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489492/item/jpgoods_39_489492_3x4.jpg?width=1000', 'WINE': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489492/item/jpgoods_19_489492_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489492/item/jpgoods_39_489492_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/489492/sub/jpgoods_489492_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/489492/sub/goods_489492_sub11_3x4.jpg?width=1000'], url: 'https://www.uniqlo.com/jp/ja/products/E489492-000/00' }
    ,{ id: 36, brand: 'UNIQLO', cat: 'men', name: 'ステンカラーコート', nameMn: 'Стен хүзүүтэй пальто', nameEn: 'Soutien Collar Coat', price: 6990, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/484613/item/jpgoods_69_484613_3x4.jpg?width=1000', desc: 'Сонгодог стен хүзүүтэй урт пальто.', colors: ['NAVY', 'BEIGE'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'], swatches: { 'NAVY': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/484613/item/jpgoods_69_484613_3x4.jpg?width=1000', 'BEIGE': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/484613/item/jpgoods_32_484613_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/484613/item/jpgoods_69_484613_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/484613/sub/jpgoods_484613_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/484613/sub/goods_484613_sub14_3x4.jpg?width=1000'], url: 'https://www.uniqlo.com/jp/ja/products/E484613-000/00' }
    ,{ id: 37, brand: 'UNIQLO', cat: 'kids', name: 'カーゴジョガーパンツ', nameMn: 'Хүүхдийн карго жоггер өмд', nameEn: 'Kids Cargo Jogger Pants', price: 1990, img: 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/item/jpgoods_32_483502_3x4.jpg?width=1000', desc: 'Хүүхдийн карго халаастай жоггер өмд.', colors: ['BEIGE', 'OLIVE', 'BLACK'], sizes: ['100cm', '110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], swatches: { 'BEIGE': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/item/jpgoods_32_483502_3x4.jpg?width=1000', 'OLIVE': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/item/jpgoods_56_483502_3x4.jpg?width=1000', 'BLACK': 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/item/jpgoods_09_483502_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/item/jpgoods_32_483502_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/sub/jpgoods_483502_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/UQ/ST3/jp/imagesgoods/483502/sub/jpgoods_483502_sub4_3x4.jpg?width=1000'], url: 'https://www.uniqlo.com/jp/ja/products/E483502-000/00' }
    ,{ id: 38, brand: 'GU', cat: 'women', name: 'バルーンスリーブジップアップパーカ(スーパーオーバーサイズフィット)', nameMn: 'Бөмбөг ханцуйтай цахилгаантай хүүди', nameEn: 'Balloon Sleeve Zip-Up Hoodie (Super Oversized)', price: 1990, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/item/jpgoods_02_360907_3x4.jpg?width=1000', desc: 'Том хэмжээст, бөмбөг ханцуйтай цахилгаантай парka.', colors: ['LIGHT GRAY', 'BLACK', 'NAVY'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], swatches: { 'LIGHT GRAY': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/item/jpgoods_02_360907_3x4.jpg?width=1000', 'BLACK': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/item/jpgoods_09_360907_3x4.jpg?width=1000', 'NAVY': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/item/jpgoods_69_360907_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/item/jpgoods_02_360907_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/sub/jpgoods_360907_sub10_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/sub/jpgoods_360907_sub18_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360907/sub/jpgoods_360907_sub19_3x4.jpg?width=1000'], url: 'https://www.gu-global.com/jp/ja/products/E360907-000/00' }
    ,{ id: 39, brand: 'GU', cat: 'women', name: 'バルマカーンテントラインコート(スーパーオーバーサイズフィット)', nameMn: 'Тэнт шугамтай пальто (том хэмжээст)', nameEn: 'Balmacaan Tent-Line Coat (Super Oversized)', price: 3990, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/item/jpgoods_34_361845_3x4.jpg?width=1000', desc: 'Өргөн тэнт шугамтай урт пальто.', colors: ['BROWN', 'GRAY', 'NAVY'], sizes: ['S/M', 'L/XL'], swatches: { 'BROWN': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/item/jpgoods_34_361845_3x4.jpg?width=1000', 'GRAY': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/item/jpgoods_07_361845_3x4.jpg?width=1000', 'NAVY': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/item/jpgoods_69_361845_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/item/jpgoods_34_361845_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/sub/goods_361845_sub51_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/sub/jpgoods_361845_sub18_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/361845/sub/jpgoods_361845_sub19_3x4.jpg?width=1000'], url: 'https://www.gu-global.com/jp/ja/products/E361845-000/00' }
    ,{ id: 40, brand: 'GU', cat: 'women', name: 'リブニットスクエアネックタンクトップ', nameMn: 'Сүлжмэл дөрвөлжин хүзүүтэй майк', nameEn: 'Rib Knit Square-Neck Tank Top', price: 1290, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_30_358779_3x4.jpg?width=1000', desc: 'Хавирга сүлжмэл, дөрвөлжин хүзүүтэй майк.', colors: ['NATURAL', 'DARK GRAY', 'BLACK', 'ORANGE', 'BROWN', 'GREEN'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], swatches: { 'NATURAL': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_30_358779_3x4.jpg?width=1000', 'DARK GRAY': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_08_358779_3x4.jpg?width=1000', 'BLACK': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_09_358779_3x4.jpg?width=1000', 'ORANGE': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_26_358779_3x4.jpg?width=1000', 'BROWN': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_34_358779_3x4.jpg?width=1000', 'GREEN': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_54_358779_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/item/goods_30_358779_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/sub/goods_358779_sub51_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/sub/goods_358779_sub10_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358779/sub/goods_358779_sub18_3x4.jpg?width=1000'], url: 'https://www.gu-global.com/jp/ja/products/E358779-000/00' }
    ,{ id: 41, brand: 'GU', cat: 'men', name: 'ジップアップブルゾン', nameMn: 'Цахилгаантай блузон куртка', nameEn: 'Zip-Up Blouson Jacket', price: 1990, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/item/jpgoods_36_360540_3x4.jpg?width=1000', desc: 'Цахилгаантай хөнгөн блузон куртка.', colors: ['BROWN チェック', 'BROWN', 'NAVY'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], swatches: { 'BROWN チェック': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/item/jpgoods_36_360540_3x4.jpg?width=1000', 'BROWN': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/item/jpgoods_34_360540_3x4.jpg?width=1000', 'NAVY': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/item/jpgoods_69_360540_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/item/jpgoods_36_360540_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/sub/jpgoods_360540_sub10_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/sub/jpgoods_360540_sub18_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360540/sub/jpgoods_360540_sub19_3x4.jpg?width=1000'], url: 'https://www.gu-global.com/jp/ja/products/E360540-000/00' }
    ,{ id: 42, brand: 'GU', cat: 'men', name: 'トラックジャケット(オーバーサイズフィット)', nameMn: 'Трек куртка (том хэмжээст)', nameEn: 'Track Jacket (Oversized Fit)', price: 1490, img: 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/item/jpgoods_55_360457_3x4.jpg?width=1000', desc: 'Том хэмжээст трек куртка (unisex).', colors: ['GREEN', 'BLACK', 'NAVY'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'], swatches: { 'GREEN': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/item/jpgoods_55_360457_3x4.jpg?width=1000', 'BLACK': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/item/jpgoods_09_360457_3x4.jpg?width=1000', 'NAVY': 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/item/jpgoods_69_360457_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/item/jpgoods_55_360457_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/sub/jpgoods_360457_sub10_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/sub/jpgoods_360457_sub3_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/360457/sub/jpgoods_360457_sub18_3x4.jpg?width=1000'], url: 'https://www.gu-global.com/jp/ja/products/E360457-000/00' }
    ,{ id: 43, brand: 'GU', cat: 'kids', name: 'KIDSヘビーウェイトスウェットフルジップパーカ', nameMn: 'Хүүхдийн зузаан свит хүүди (цахилгаантай)', nameEn: 'Kids Heavyweight Sweat Full-Zip Hoodie', price: 990, img: 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358474/item/goods_17_358474_3x4.jpg?width=1000', desc: 'Хүүхдийн зузаан свит цахилгаантай хүүди.', colors: ['RED', 'DARK GREEN'], sizes: ['100cm', '110cm', '120cm', '130cm', '140cm', '150cm', '160cm'], swatches: { 'RED': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358474/item/goods_17_358474_3x4.jpg?width=1000', 'DARK GREEN': 'https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358474/item/goods_58_358474_3x4.jpg?width=1000' }, images: ['https://image.uniqlo.com/GU/ST3/AsianCommon/imagesgoods/358474/item/goods_17_358474_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/358474/sub/jpgoods_358474_sub10_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/358474/sub/jpgoods_358474_sub11_3x4.jpg?width=1000', 'https://image.uniqlo.com/GU/ST3/jp/imagesgoods/358474/sub/jpgoods_358474_sub12_3x4.jpg?width=1000'], url: 'https://www.gu-global.com/jp/ja/products/E358474-000/01' }
    ,{ id: 44, brand: 'ZARA', cat: 'women', name: 'BELTED PEPLUM JACKET', nameMn: 'Бүстэй пеплум пиджак', nameEn: 'Belted Peplum Jacket', price: 5990, img: 'https://static.zara.net/assets/public/3443/f8c2/168c45179be7/622408aab3ec/03046358712-p/03046358712-p.jpg?ts=1790781652206&w=1024', desc: 'Бүстэй, пеплум загварын пиджак.', colors: ['Ecru'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], images: ['https://static.zara.net/assets/public/3443/f8c2/168c45179be7/622408aab3ec/03046358712-p/03046358712-p.jpg?ts=1790781652206&w=1024', 'https://static.zara.net/assets/public/0e07/5a56/451a4c8692f3/ce74006d351b/03046358712-a1/03046358712-a1.jpg?ts=1790781651900&w=1024', 'https://static.zara.net/assets/public/21bf/25ee/03bf4e4b9470/15b8588ca543/03046358712-a2/03046358712-a2.jpg?ts=1790781651832&w=1024', 'https://static.zara.net/assets/public/307d/b3be/5d434df89d04/1dc798eb25e4/03046358712-a3/03046358712-a3.jpg?ts=1790781651207&w=1024'], url: 'https://www.zara.com/jp/en/belted-peplum-jacket-p03046358.html' }
    ,{ id: 45, brand: 'ZARA', cat: 'women', name: 'ARGYLE KNIT JUMPER', nameMn: 'Аргайл хээтэй сүлжмэл цамц', nameEn: 'Argyle Knit Jumper', price: 3990, img: 'https://static.zara.net/assets/public/00b8/717a/3a4648aea3d7/993022f10cb8/02893148756-p/02893148756-p.jpg?ts=1787903434255&w=1024', desc: 'Аргайл хээтэй сүлжмэл цамц.', colors: ['Mid-camel'], sizes: ['S', 'M', 'L'], images: ['https://static.zara.net/assets/public/00b8/717a/3a4648aea3d7/993022f10cb8/02893148756-p/02893148756-p.jpg?ts=1787903434255&w=1024', 'https://static.zara.net/assets/public/3038/545e/79204fb79681/5f7a7e53c7f1/02893148756-a1/02893148756-a1.jpg?ts=1787903436598&w=1024', 'https://static.zara.net/assets/public/e5b6/de08/195742728dd4/23b47dd399d5/02893148756-a2/02893148756-a2.jpg?ts=1787903433652&w=1024', 'https://static.zara.net/assets/public/a707/4483/077a4db78fbe/bfe31cd5fb05/02893148756-a3/02893148756-a3.jpg?ts=1787903434892&w=1024'], url: 'https://www.zara.com/jp/en/argyle-knit-jumper-p02893148.html' }
    ,{ id: 46, brand: 'ZARA', cat: 'women', name: 'TEXTURED KNIT JUMPER', nameMn: 'Бүтэцтэй сүлжмэл цамц', nameEn: 'Textured Knit Jumper', price: 3990, img: 'https://static.zara.net/assets/public/7ca9/e412/ce5946168f4c/fab1bb1c508b/06771200401-a1/06771200401-a1.jpg?ts=1787666861928&w=1024', desc: 'Бүтэцтэй сүлжмэл цамц.', colors: ['Navy blue', 'Sand'], sizes: ['S', 'M', 'L', 'XL'], images: ['https://static.zara.net/assets/public/7ca9/e412/ce5946168f4c/fab1bb1c508b/06771200401-a1/06771200401-a1.jpg?ts=1787666861928&w=1024', 'https://static.zara.net/assets/public/e490/adea/f5f04dcdaa14/8029d0496aa3/06771200401-a2/06771200401-a2.jpg?ts=1787666862060&w=1024', 'https://static.zara.net/assets/public/e6cb/8589/45c94fc088e1/db2a8e0153cb/06771200401-a3/06771200401-a3.jpg?ts=1787666862227&w=1024', 'https://static.zara.net/assets/public/a21a/8900/3b9e49ae8453/180c819dbe00/06771200401-a4/06771200401-a4.jpg?ts=1787666863200&w=1024'], url: 'https://www.zara.com/jp/en/textured-knit-jumper-p06771200.html' }
    ,{ id: 47, brand: 'ZARA', cat: 'men', name: 'BARREL FIT DRAWSTRING TROUSERS', nameMn: 'Баррел өмд (уян бүстэй)', nameEn: 'Barrel Fit Drawstring Trousers', price: 3590, img: 'https://static.zara.net/assets/public/41dd/4de2/534547aaaefb/fed93f362cc8/00108313800-p/00108313800-p.jpg?ts=1785321563452&w=1024', desc: 'Уян бүстэй баррел загварын өмд.', colors: ['Black', 'Bottle green', 'Brown', 'Khaki', 'Grey marl'], sizes: ['36', '38', '40', '42', '44', '46'], images: ['https://static.zara.net/assets/public/41dd/4de2/534547aaaefb/fed93f362cc8/00108313800-p/00108313800-p.jpg?ts=1785321563452&w=1024', 'https://static.zara.net/assets/public/a306/c5c2/326748228e01/fcde0b1a034d/00108313800-a1/00108313800-a1.jpg?ts=1785321563676&w=1024', 'https://static.zara.net/assets/public/3dce/2405/458d442d8d26/2bfb05fa6dd6/00108313800-a2/00108313800-a2.jpg?ts=1785321563114&w=1024', 'https://static.zara.net/assets/public/1ea9/064b/f9134cce93c7/b30e771b708c/00108313800-a3/00108313800-a3.jpg?ts=1785321562998&w=1024'], url: 'https://www.zara.com/jp/en/barrel-fit-drawstring-trousers-p00108313.html' }
    ,{ id: 48, brand: 'ZARA', cat: 'men', name: 'CROPPED FIT TECHNICAL HOODED JACKET', nameMn: 'Богино малгайтай техник куртка', nameEn: 'Cropped Fit Technical Hooded Jacket', price: 6590, img: 'https://static.zara.net/assets/public/133b/dbf6/15c547f1ac10/3ac9dd41eb53/00155792800-p/00155792800-p.jpg?ts=1788190409594&w=1024', desc: 'Богино загварын малгайтай техник материалтай куртка.', colors: ['Black', 'Brown'], sizes: ['S', 'M', 'L', 'XL'], images: ['https://static.zara.net/assets/public/133b/dbf6/15c547f1ac10/3ac9dd41eb53/00155792800-p/00155792800-p.jpg?ts=1788190409594&w=1024', 'https://static.zara.net/assets/public/6bde/e17a/efed4ab688a3/07133c6f976f/00155792800-a1/00155792800-a1.jpg?ts=1788190411163&w=1024', 'https://static.zara.net/assets/public/4991/fd57/f99c451892ba/9116e29b4b52/00155792800-a2/00155792800-a2.jpg?ts=1788190410486&w=1024', 'https://static.zara.net/assets/public/1cc4/7098/bdff47a99d18/73df02b71c64/00155792800-a3/00155792800-a3.jpg?ts=1788190411078&w=1024'], url: 'https://www.zara.com/jp/en/cropped-fit-technical-hooded-jacket-p00155792.html' }
    ,{ id: 49, brand: 'ZARA', cat: 'kids', name: 'DENIM JACKET', nameMn: 'Хүүхдийн жинсэн куртка', nameEn: 'Kids Denim Jacket', price: 2750, img: 'https://static.zara.net/assets/public/a9e9/a49e/df694cf58b08/4cd0b628c829/04551780400-p/04551780400-p.jpg?ts=1789128345849&w=1024', desc: 'Хүүхдийн сонгодог жинсэн куртка.', colors: ['Blue'], sizes: ['122cm', '131cm', '140cm', '148cm', '156cm', '164cm'], images: ['https://static.zara.net/assets/public/a9e9/a49e/df694cf58b08/4cd0b628c829/04551780400-p/04551780400-p.jpg?ts=1789128345849&w=1024', 'https://static.zara.net/assets/public/7fec/c6fc/38fc4cd59c63/36f1afd9a105/04551780400-a1/04551780400-a1.jpg?ts=1789128345686&w=1024', 'https://static.zara.net/assets/public/1fd1/17f7/30c2462b889a/b4e88eaacdc9/04551608400-e1/04551608400-e1.jpg?ts=1770797273226&w=1024', 'https://static.zara.net/assets/public/c068/0971/bcc04ba0ad4e/e55d52925793/04551608400-e2/04551608400-e2.jpg?ts=1770797273822&w=1024'], url: 'https://www.zara.com/jp/en/denim-jacket-p04551608.html' }
    ,{ id: 50, brand: 'H&M', cat: 'women', name: 'Vネック ニットトップス', nameMn: 'V хүзүүтэй сүлжмэл топ', nameEn: 'V-Neck Knit Top', price: 1499, img: 'https://image.hm.com/assets/hm/26/7c/267c9a83d0015749b5526d78177b414c05e32b49.jpg?imwidth=1080', desc: 'Зөөлөн сүлжмэл V хүзүүтэй топ.', colors: ['ライトベージュ', 'ブライトレッド', 'ダークグレー'], sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'], swatches: { 'ライトベージュ': 'https://image.hm.com/assets/hm/cf/ea/cfeac82aa9a725f62d9cc7c949bda22556e4e2c3.jpg?imwidth=900', 'ブライトレッド': 'https://image.hm.com/assets/hm/db/ae/dbae89eb7fbddd79eea8feb4ea48d0d632d2b8da.jpg?imwidth=900', 'ダークグレー': 'https://image.hm.com/assets/hm/42/43/4243a5c2e05e1d8fb01ccaf834df0944f55d318b.jpg?imwidth=900' }, images: ['https://image.hm.com/assets/hm/26/7c/267c9a83d0015749b5526d78177b414c05e32b49.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/03/14/0314be8d2e836c53d9b1442305bd809887d7ce25.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/4d/46/4d4670da70c9202b435ab180c6ef43f35e5974f1.jpg?imwidth=1080'], url: 'https://www2.hm.com/ja_jp/productpage.1313628003.html' }
    ,{ id: 51, brand: 'H&M', cat: 'women', name: 'ベルテッドストレートパンツ', nameMn: 'Бүстэй шулуун өмд', nameEn: 'Belted Straight Pants', price: 1499, img: 'https://image.hm.com/assets/hm/fb/ea/fbeafdd3d2519bf709a4ef2b25ac14e652e4b4ce.jpg?imwidth=1080', desc: 'Бүстэй шулуун загварын өмд.', colors: ['ダークパープル', 'クリーム', 'ライトベージュ', 'ブラック'], sizes: ['34', '36', '38', '40', '42'], swatches: { 'ダークパープル': 'https://image.hm.com/assets/hm/51/b6/51b695de36fbc2e831d792ea13f0baa55c068723.jpg?imwidth=900', 'クリーム': 'https://image.hm.com/assets/hm/60/2c/602c81ba686f92423f227ffb2db7ea274960b606.jpg?imwidth=900', 'ライトベージュ': 'https://image.hm.com/assets/hm/58/89/588978ea2c60d463b4b2260d4494f327e830cd01.jpg?imwidth=900', 'ブラック': 'https://image.hm.com/assets/hm/6f/a0/6fa0106154936127240245d737b9091d6451fb5a.jpg?imwidth=900' }, images: ['https://image.hm.com/assets/hm/fb/ea/fbeafdd3d2519bf709a4ef2b25ac14e652e4b4ce.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/40/38/40382b33187fc2a0b911a5ae5ebd41d3c5c2fdee.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/10/c1/10c1cff943837463f7683c68b3cb89ef550d5a05.jpg?imwidth=1080'], url: 'https://www2.hm.com/ja_jp/productpage.1343397005.html' }
    ,{ id: 52, brand: 'H&M', cat: 'women', name: '長袖ジャージーワンピース', nameMn: 'Урт ханцуйтай жерси даашинз', nameEn: 'Long-Sleeve Jersey Dress', price: 599, img: 'https://image.hm.com/assets/hm/97/70/9770b207f210ff0562c09505095fe245865ff0d7.jpg?imwidth=1080', desc: 'Урт ханцуйтай зөөлөн жерси даашинз.', colors: ['ブラック', 'ダークブルー'], sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'], swatches: { 'ブラック': 'https://image.hm.com/assets/hm/b9/d3/b9d344475a7432cd864ccd62513c9672bbf334ea.jpg?imwidth=900', 'ダークブルー': 'https://image.hm.com/assets/hm/83/5a/835ae1e4e6dfe8c76745f0720f53f5c134d5d833.jpg?imwidth=900' }, images: ['https://image.hm.com/assets/hm/97/70/9770b207f210ff0562c09505095fe245865ff0d7.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/39/1b/391bd2268ee1cbfa6ee040440a9192fc63102ff2.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/cb/2c/cb2c276808bbc34641fe6523b2f66b0e4718d7df.jpg?imwidth=1080'], url: 'https://www2.hm.com/ja_jp/productpage.1328829001.html' }
    ,{ id: 53, brand: 'H&M', cat: 'men', name: 'レギュラーフィット シングルブレストジャケット', nameMn: 'Эрэгтэй пиджак (regular fit)', nameEn: 'Regular Fit Single-Breasted Jacket', price: 4499, img: 'https://image.hm.com/assets/hm/58/49/5849f0d78a65353312db2b9b8d72597799901b59.jpg?imwidth=1080', desc: 'Сонгодог дан товчтой эрэгтэй пиджак.', colors: ['グレー／チェック', 'ダークグレー'], sizes: ['42', '44', '46', '48', '50', '52', '54', '56'], swatches: { 'グレー／チェック': 'https://image.hm.com/assets/hm/f6/f9/f6f9c44cb5994618e1689e7a200904e307a82469.jpg?imwidth=900', 'ダークグレー': 'https://image.hm.com/assets/hm/ac/83/ac830d929ac4ed6603857de2e545da4690ddb2cb.jpg?imwidth=900' }, images: ['https://image.hm.com/assets/hm/58/49/5849f0d78a65353312db2b9b8d72597799901b59.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/8a/99/8a990f0b462e9bbbcd22b5bfb7486d2396e4cb4a.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/d2/e5/d2e52c53ff9ded99be3f2e0d7c5618ac3e8b9f0f.jpg?imwidth=1080'], url: 'https://www2.hm.com/ja_jp/productpage.1308189002.html' }
    ,{ id: 54, brand: 'H&M', cat: 'men', name: 'レギュラーフィット ケーブルニットポロシャツ', nameMn: 'Эрэгтэй сүлжмэл поло цамц', nameEn: 'Regular Fit Cable-Knit Polo Shirt', price: 1999, img: 'https://image.hm.com/assets/hm/80/50/80504fe439ee1939108c8adb3f1f95d6bf66e6cb.jpg?imwidth=1080', desc: 'Кабель сүлжмэл поло цамц.', colors: ['イエロー'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], swatches: { 'イエロー': 'https://image.hm.com/assets/hm/3f/ed/3fed23a4690257559151b1e9c6507229537e333b.jpg?imwidth=900' }, images: ['https://image.hm.com/assets/hm/80/50/80504fe439ee1939108c8adb3f1f95d6bf66e6cb.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/a0/98/a0981a4903c6dbdbbfecc4866ca011fa4bab3d0e.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/70/70/7070ec8225cb199ebc7df0f2f903b33c8b77c8a8.jpg?imwidth=1080'], url: 'https://www2.hm.com/ja_jp/productpage.1291561006.html' }
    ,{ id: 55, brand: 'H&M', cat: 'kids', name: 'プリントレイヤードワンピース', nameMn: 'Хүүхдийн хээтэй даашинз (Hello Kitty)', nameEn: 'Kids Print Layered Dress', price: 1699, img: 'https://image.hm.com/assets/hm/8d/21/8d21345bd4b4c30d5a36bc77b76e93b40a3a29ba.jpg?imwidth=1080', desc: 'Хүүхдийн хээтэй давхар даашинз.', colors: ['ネイビーブルー／ハローキティ', 'クリーム／シナモロール'], sizes: ['90', '100/105', '110/115', '120/130', '135/140'], swatches: { 'ネイビーブルー／ハローキティ': 'https://image.hm.com/assets/hm/21/06/210698d7e1ab81831e2b8cf2401e829ede751ddb.jpg?imwidth=900', 'クリーム／シナモロール': 'https://image.hm.com/assets/hm/1a/01/1a014773310698c04486447529351b3224c73fd4.jpg?imwidth=900' }, images: ['https://image.hm.com/assets/hm/8d/21/8d21345bd4b4c30d5a36bc77b76e93b40a3a29ba.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/65/f9/65f9815e9d631cc85f13b03b8409744372441ff9.jpg?imwidth=1080', 'https://image.hm.com/assets/hm/eb/a4/eba46f91529d103afe9c18b3a6de3abbfdd4bc69.jpg?imwidth=1080'], url: 'https://www2.hm.com/ja_jp/productpage.1325663001.html' }
    ,{ id: 56, brand: 'MICHAEL KORS', cat: 'women', name: 'HAMILTON ソフト クロスボディ エクストラスモール', nameMn: 'Hamilton жижиг кроссбоди цүнх', nameEn: 'HAMILTON Soft Crossbody Extra Small', price: 45100, img: 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6ANXC0E-0201_1.jpg?v=1792950254', desc: 'Зөөлөн арьсан жижиг кроссбоди цүнх.', colors: ['チョコレート', 'ラゲッジ', 'ブラック'], sizes: ['NS'], swatches: { 'チョコレート': 'https://michaelkors.jp/cdn/shop/files/32F6ANXC0E-0201_1_300x.jpg?v=1792950254', 'ラゲッジ': 'https://michaelkors.jp/cdn/shop/files/32F6ANXC0E-0230_1_300x.jpg?v=1792948900', 'ブラック': 'https://michaelkors.jp/cdn/shop/files/32F6ANXC0E-001_1_300x.jpg?v=1793027562' }, images: ['https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6ANXC0E-0201_1.jpg?v=1792950254', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6ANXC0E-0201_2.jpg?v=1792950254', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6ANXC0E-0201_3.jpg?v=1792950254', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6ANXC0E-0201_4.jpg?v=1792950254'], url: 'https://michaelkors.jp/products/32f6anxc0e201' }
    ,{ id: 57, brand: 'MICHAEL KORS', cat: 'women', name: 'BRYANT ロゴエンボスレザー ウォレット ミディアム', nameMn: 'Bryant логотой арьсан түрийвч', nameEn: 'BRYANT Logo Embossed Leather Wallet Medium', price: 28600, img: 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6AYTZ2L-0301_1.jpg?v=1792951340', desc: 'Лого даралттай арьсан дунд хэмжээний түрийвч.', colors: ['ローデン', 'チョコレート'], sizes: ['NS'], swatches: { 'ローデン': 'https://michaelkors.jp/cdn/shop/files/32F6AYTZ2L-0301_1_300x.jpg?v=1792951340', 'チョコレート': 'https://michaelkors.jp/cdn/shop/files/32F6AYTZ2L-0201_1_300x.jpg?v=1792949683' }, images: ['https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6AYTZ2L-0301_1.jpg?v=1792951340', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6AYTZ2L-0301_2.jpg?v=1792951340', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6AYTZ2L-0301_3.jpg?v=1792951340', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32F6AYTZ2L-0301_4.jpg?v=1792951340'], url: 'https://michaelkors.jp/products/32f6aytz2l301' }
    ,{ id: 58, brand: 'MICHAEL KORS', cat: 'women', name: 'MK コード チャーム', nameMn: 'MK чарм (цүнхний чимэглэл)', nameEn: 'MK Cord Charm', price: 16500, img: 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32T5GD0K2U-0301_1.jpg?v=1792951147', desc: 'Цүнхэнд зүүх MK чарм чимэглэл.', colors: ['ローデン', 'ブラック', 'アップル', 'カーキ', 'ライトベリーソルベ', 'プリムローズ', 'エッグシェル', 'ダスティセージ', 'バーントカーキ'], sizes: ['NS'], swatches: { 'ローデン': 'https://michaelkors.jp/cdn/shop/files/32T5GD0K2U-0301_1_300x.jpg?v=1792951147', 'ブラック': 'https://michaelkors.jp/cdn/shop/files/pQtdKRaVkQktK6dIo9n1EabKyY2EufKt0TxU6lvd0O37tlFNqgiDIC9F93ImqHk83jALhc9-fK6SyHS07Z2S2Wy1N0U8iSizXw3OnhIH_s0_300x.jpg?v=1792949698', 'アップル': 'https://michaelkors.jp/cdn/shop/files/L8zGSfcXoDkYG7-ylz2ewLK5ItDvmgQRZmpz-wxJMNfSxRjYdRc008ovEM-qJfxbv8EajANGMYVCuQBoBbU-W_GfKRqNevGW5ic-Bt-Z_s0_300x.jpg?v=1792950283', 'カーキ': 'https://michaelkors.jp/cdn/shop/files/YWsQU3sljiTD0ERAiCnWu46JqrH-mBU6DN_pGTB3ij7T0y9EbTdE8i1mEmOOEAjD9-j3GUBRx4dmUpI0_92Eb1aPJoqqf1gjnmCRwpCE_s0_300x.jpg?v=1792950393', 'ライトベリーソルベ': 'https://michaelkors.jp/cdn/shop/files/32T5GD0K2U-7011_1_300x.jpg?v=1792949799', 'プリムローズ': 'https://michaelkors.jp/cdn/shop/files/32T5GD0K2U-2717_1_300x.jpg?v=1792950102', 'エッグシェル': 'https://michaelkors.jp/cdn/shop/files/32T5GD0K2U-0106_2_300x.jpg?v=1792951209', 'ダスティセージ': 'https://michaelkors.jp/cdn/shop/files/32T5GD0K2U-4175_1_300x.jpg?v=1792949123', 'バーントカーキ': 'https://michaelkors.jp/cdn/shop/files/Gr4MwrV_6KzC2540qml_DxuG7gGd_Us0gWBkvjPFBlYTdMRosyLvm6t_dUMmu37Ta5NYlobIiy_HJDfSWpBKj4csoQdtCWAZVfM3Jqp5qIQ_s0_300x.jpg?v=1793027571' }, images: ['https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32T5GD0K2U-0301_1.jpg?v=1792951147', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32T5GD0K2U-0301_3.jpg?v=1792951147', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/32T5GD0K2U-0301_6.jpg?v=1792951147'], url: 'https://michaelkors.jp/products/32t5gd0k2u301' }
    ,{ id: 59, brand: 'MICHAEL KORS', cat: 'men', name: 'JET SET ナイロン バックパック', nameMn: 'Jet Set нейлон үүргэвч', nameEn: 'JET SET Nylon Backpack', price: 45100, img: 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/33T6LJSB2X-0001_1.jpg?v=1792736748', desc: 'Хөнгөн нейлон үүргэвч — өдөр тутам болон аялалд.', colors: ['ブラック'], sizes: ['NS'], swatches: { 'ブラック': 'https://michaelkors.jp/cdn/shop/files/33T6LJSB2X-0001_1_300x.jpg?v=1792736748' }, images: ['https://cdn.shopify.com/s/files/1/0742/5671/1865/files/33T6LJSB2X-0001_1.jpg?v=1792736748', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/33T6LJSB2X-0001_2.jpg?v=1792736748', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/33T6LJSB2X-0001_3.jpg?v=1792736748', 'https://cdn.shopify.com/s/files/1/0742/5671/1865/files/33T6LJSB2X-0001_4.jpg?v=1792736748'], url: 'https://michaelkors.jp/products/33t6ljsb2x1' }

];

// Холбоо барих мэдээлэл — хажуугийн цэсний доод хэсэгт харагдана
const CONTACT_PHONE = '';
const SOCIAL_LINKS = { facebook: '', instagram: '', line: '', gmail: '' };

const BRAND_COLORS = {
    'UNIQLO': '#FF0000', 'GU': '#0033A0', 'ZARA': '#000000',
    'H&M': '#E50010', 'GAP': '#002F6C', 'MICHAEL KORS': '#8A6D3B'
};

const SHIPPING_FEE = 1500;
const EXCHANGE_RATE = 22; // 1 JPY ≈ 22 MNT

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
        hero_title: 'ЯПОН УЛСААС ХҮССЭН БАРААГАА ЗАХИАЛ',
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
        pay_visa: 'Visa карт', pay_bank: 'Банкны шилжүүлэг', pay_method_label: 'Төлбөрийн хэлбэр:',
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
        msg_status_updated: 'Төлөв шинэчлэгдлээ', btn_back_home: 'Нүүр хуудас руу буцах',
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
        pay_visa: 'Visa card', pay_bank: 'Bank transfer', pay_method_label: 'Payment method:',
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
        msg_status_updated: 'Status updated', btn_back_home: 'Back to home',
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
        pay_visa: 'Visaカード', pay_bank: '銀行振込', pay_method_label: 'お支払い方法:',
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
        msg_status_updated: 'ステータスを更新しました', btn_back_home: 'ホームに戻る',
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
const checkoutShipping = $('checkout-shipping');
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

    document.querySelectorAll('.brand-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentBrandFilter = tab.dataset.brand;
            currentCategory = 'all';
            document.querySelectorAll('.cat-chip').forEach(c => c.classList.toggle('active', c.dataset.cat === 'all'));
            const cf = $('category-filter');
            if (cf) cf.classList.toggle('hidden', currentBrandFilter === 'all');
            renderProducts();
        });
    });

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
}

// ================= PRODUCTS =================
function pname(p) {
    if (!p) return '';
    if (currentLang === 'mn') return p.nameMn || p.name;
    if (currentLang === 'en') return p.nameEn || p.name;
    return p.nameJp || p.name;
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
                <button class="wishlist-btn-card" onclick="event.stopPropagation(); toggleWishlist(this)" aria-label="Wishlist">♡</button>
            </div>
            <div class="product-info">
                <h3>${pname(p)}</h3>
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
    if (!isLoggedIn) { openAuthModal('login'); return; }
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    selectedProduct = p;
    if (!keepOpen) {
        selectedSize = (p.sizes && p.sizes.length) ? (p.sizes.includes('M') ? 'M' : p.sizes[0]) : 'M';
        selectedColor = (p.colors && p.colors.length) ? p.colors[0] : 'black';
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
            <button type="button" class="color-swatch ${c === selectedColor ? 'active' : ''}" data-full="${p.swatches[c].replace('w=105', 'w=655')}" onclick="selectColorUI(this, '${c}')" title="${c}"><img src="${p.swatches[c]}" alt="${c}"></button>
        ` : `
            <button type="button" class="color-chip ${c === selectedColor ? 'active' : ''}" onclick="selectColorUI(this, '${c}')"><span class="dot" style="background:${JP_COLOR_HEX[c] || '#ccc'}"></span>${c}</button>
        `).join('')
        : colors.map(c => `
            <div class="color-circle ${c.name === selectedColor ? 'active' : ''}"
                 style="background:${c.hex};${c.name === 'white' ? 'border:2px solid #ddd;' : ''}"
                 onclick="selectColor(this, '${c.name}')" title="${c.name}"></div>
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
                <p class="desc">${p.desc}</p>
                ${p.url ? `<a class="official-link" href="${p.url}" target="_blank" rel="noopener">🔗 ${t.official_store}</a>` : ''}

                <div class="selector-group">
                    <label>${t.detail_color}: <span id="selected-color-name" class="selected-value">${selectedColor}</span></label>
                    <div class="color-options">
                        ${colorOptionsHtml}
                    </div>
                </div>

                <div class="selector-group">
                    <label>${t.detail_size}</label>
                    <div class="size-options">
                        ${sizes.map(s => `<button class="size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectSize(this, '${s}')">${s}</button>`).join('')}
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
                    <button class="btn btn-primary detail-add-btn" onclick="addToCartFromDetail()">
                        🛒 ${t.btn_add_cart}
                    </button>
                    <button class="btn btn-buy-now detail-add-btn" onclick="buyNowFromDetail()">
                        ⚡ ${t.btn_buy_now}
                    </button>
                </div>
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
    document.querySelectorAll('.color-chip, .color-swatch').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    selectedColor = name;
    const lbl = $('selected-color-name');
    if (lbl) lbl.textContent = name;
    const full = el.getAttribute('data-full');
    if (full) {
        const main = $('detail-main-img');
        if (main) main.src = full;
    }
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
let selectedPaymentMethod = 'visa';

function selectPaymentMethod(method, el) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.pay-method').forEach(b => b.classList.toggle('active', b.dataset.method === method));
    ['visa', 'bank', 'paypay'].forEach(m => {
        const p = $('pay-panel-' + m);
        if (p) p.classList.toggle('hidden', m !== method);
    });
}

function renderCheckout() {
    const t = translations[currentLang];

    if (PAYPAY_QR_URL) {
        const img = $('paypay-qr-img');
        const note = $('paypay-qr-note');
        if (img) { img.src = PAYPAY_QR_URL; img.style.display = 'block'; }
        if (note) note.style.display = 'none';
    }
    fillBankDetails();

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
            <img src="${item.img}" alt="${iname(item)}">
            <div class="checkout-item-info">
                <p><strong>${iname(item)}</strong></p>
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
async function processPayment() {
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

    if (selectedPaymentMethod === 'visa') {
        const num = $('card-number').value.replace(/\s/g, '');
        const exp = $('card-expiry').value.trim();
        const cvv = $('card-cvv').value.trim();
        if (num.length < 12 || !exp || cvv.length < 3) {
            showToast(t.msg_fill_fields, 'error');
            return;
        }
    }

    if (USE_SUPABASE && sb && currentUser) {
        const items = cart.map(i => { const p = PRODUCTS.find(x => x.id === i.id); const cimg = (p && p.swatches && i.color && p.swatches[i.color]) || i.img || ''; return { id: i.id, brand: i.brand || (p ? p.brand : ''), name: iname(i), size: i.size || '', color: i.color || '', qty: i.qty, price: i.price, img: cimg }; });
        const total = cart.reduce((s, i) => s + i.price * i.qty, 0) + SHIPPING_FEE;
        const { error } = await sb.from('orders').insert({
            user_id: currentUser.id, email: currentUser.email,
            name, phone, address, items, total, payment_method: selectedPaymentMethod
        });
        if (error) { showToast(t.msg_order_error, 'error'); return; }
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

async function loadAdminOrders() {
    const box = $('admin-orders');
    if (!box) return;
    const t = translations[currentLang];
    if (!(USE_SUPABASE && sb)) { box.innerHTML = ''; return; }
    box.innerHTML = '<p class="admin-note">...</p>';
    const { data, error } = await sb.from('orders').select('*').order('created_at', { ascending: false }).limit(100);
    if (error) { box.innerHTML = '<p class="admin-note">' + esc(t.msg_order_error) + '</p>'; return; }
    if (!data || data.length === 0) { box.innerHTML = '<p class="admin-note">' + esc(t.admin_no_orders) + '</p>'; return; }
    box.innerHTML = data.map(o => {
        const itemsHtml = (o.items || []).map(i => {
            const p = PRODUCTS.find(x => x.id === i.id);
            const img = i.img || (p && p.swatches && i.color && p.swatches[i.color]) || (p ? p.img : '');
            const meta = [i.brand || (p ? p.brand : ''), i.color, i.size].filter(Boolean).map(x => esc(x)).join(' · ');
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
    const { error } = await sb.from('orders').update({ status }).eq('id', id);
    if (!error) showToast(translations[currentLang].msg_status_updated, 'success');
}

console.log('✅ JAPANBUY ачаалагдлаа! Хэл:', currentLang, '| Бүтээгдэхүүн:', PRODUCTS.length);