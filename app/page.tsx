"use client";

import { useMemo, useState } from "react";

type Day = {
  day: number;
  date: string;
  weekday: string;
  city: "移動" | "墨爾本" | "雪梨";
  title: string;
  summary: string;
  transport: string;
  stops: string[];
  food?: string[];
  note?: string;
};

const days: Day[] = [
  { day: 1, date: "8/8", weekday: "六", city: "移動", title: "台北出發・香港轉機", summary: "傍晚前往機場，經香港轉機飛往墨爾本。", transport: "CX531 → CX105", stops: ["TPE 19:55 出發", "HKG 22:00 抵達", "香港轉機 2 小時 20 分", "HKG 00:20 出發"] },
  { day: 2, date: "8/9", weekday: "日", city: "墨爾本", title: "抵達・South Yarra 慢遊", summary: "抵達後先安頓行李，以住宿周邊散步和採買為主。", transport: "機場接駁／電車＋步行", stops: ["MEL 11:15 抵達", "住宿 Check-in 15:00", "Prahran Market（週日 08:00–16:00）", "Toorak Road、Chapel Street、Oxford Street", "皇家植物園與河岸夜景"], food: ["Minnow Cafe", "Two Birds One Stone", "Campos Coffee"], note: "長途飛行後保留彈性；市場與店家時間請當日確認。" },
  { day: 3, date: "8/10", weekday: "一", city: "墨爾本", title: "CBD 咖啡、建築與塗鴉", summary: "從 Lune 與 Chinatown 一路走到 Flinders Street，串連經典拱廊與咖啡巷。", transport: "電車＋步行", stops: ["08:30 Lune Russell Street", "Chinatown", "10:00 州立圖書館圓頂閱覽室", "Melbourne Central 大鐘與子彈塔", "Essensorie 香氛店", "皇家拱廊、Block Arcade、Haigh’s Chocolates", "Town Hall 與聖保羅大教堂", "Hosier Lane 塗鴉街", "Flinders Street Station", "Degraves Street", "Pidapipó Gelato 收尾"], food: ["Lune Croissanterie", "Axil Coffee", "Pho Bo Ga Mekong", "Hareruya 麻糬冰", "La Petite Crêperie", "Overlay Coffee 花生咖啡"], note: "Overlay 建議 15:30 前抵達、La Petite Crêperie 約 16:00 開始營業；時間請當日確認。" },
  { day: 4, date: "8/11", weekday: "二", city: "墨爾本", title: "Yarra Valley 熱氣球與酒莊", summary: "清晨熱氣球俯瞰葡萄園，接著品酒、起司與尋找野生袋鼠。", transport: "預約包車＋熱氣球", stops: ["Balgownie Estate 集合", "Yarra Valley 熱氣球（飛行約 1 小時）", "Balgownie Estate 早餐", "Yering Station", "Yarra Valley Dairy", "Punt Road Wines", "St Huberts Cellar Door 午餐", "Domaine Chandon", "Yarra Valley Chocolaterie & Ice Creamery", "野生袋鼠觀察"], note: "熱氣球受天候影響大，前一晚確認集合與取消通知；飲酒後勿駕車。" },
  { day: 5, date: "8/12", weekday: "三", city: "墨爾本", title: "Great Ocean Road 大洋路", summary: "沿海岸公路經 Geelong、紀念拱門與 Lorne，前往十二門徒岩。", transport: "包車・單程約 3 小時以上", stops: ["Geelong", "Great Ocean Road Memorial Arch", "Lorne 小鎮", "沿岸觀景點", "十二門徒岩", "Loch Ard Gorge 周邊"], note: "大洋路全長約 276 km；冬季日照短，穿防風防雨外套並預留車程，容易暈車者先準備暈車藥。" },
  { day: 6, date: "8/13", weekday: "四", city: "墨爾本", title: "北區藝文・市場與大學", summary: "從 Queen Victoria Market 走訪 Carlton、Lygon Street、墨爾本大學與 Fitzroy。", transport: "電車＋步行", stops: ["06:00–15:00 Queen Victoria Market", "Carlton Gardens 與皇家展覽館", "Melbourne Museum", "Lygon Street 小義大利", "墨爾本大學", "Fitzroy 文青街區", "王子橋亞拉河夜景", "有時間可加 Spencer Outlet"], food: ["Brunetti Classico", "DOC Pizza", "Tiamo", "Donnini’s"], note: "QVM 週三休市，8/13 為週四；出發前再確認當週開市資訊。" },
  { day: 7, date: "8/14", weekday: "五", city: "墨爾本", title: "Phillip Island 小企鵝", summary: "彩虹小屋、野生動物與海岸景觀，晚上觀賞小企鵝歸巢。", transport: "包車・市區至島上約 1.5–2 小時", stops: ["Brighton Bathing Boxes", "Maru Koala & Animal Park", "Churchill Island Heritage Farm", "Nobbies Centre", "Penguin Parade 小企鵝歸巢"], note: "海邊夜間寒冷，準備保暖防風衣物；企鵝歸巢依現場規範禁止攝影。" },
  { day: 8, date: "8/15", weekday: "六", city: "墨爾本", title: "南墨爾本・藝術與綠意", summary: "從 NGV、皇家植物園到市場美食，視體力安排 DFO 採買。", transport: "電車＋步行", stops: ["NGV 維多利亞國家美術館", "Royal Botanic Gardens", "South Melbourne Market", "DFO South Wharf（選配）", "Chapel Street"], food: ["ST. ALi／Padre Coffee", "Aptus Oysters", "Simply Spanish", "Agathé Pâtisserie", "Mama Tran Dumplings"], note: "市場人潮較多，建議早到；NGV 特展可能需另購票。" },
  { day: 9, date: "8/16", weekday: "日", city: "墨爾本", title: "Sovereign Hill 淘金小鎮", summary: "搭火車前往 Ballarat，體驗地下礦場、淘金與 1850 年代街景。", transport: "V/Line 火車＋當地公車", stops: ["07:41／08:24 Southern Cross 出發", "Ballarat Station 轉公車", "Red Hill Mine 地下導覽", "溪畔免費淘金", "12:00 煉金表演", "13:30 紅衣衛隊遊行", "備選：Ballarat Wildlife Park", "備選：Lake Wendouree 與植物園", "回程可逛 Spencer Outlet"], note: "火車與公車路線可能異動，出發前用 PTV Journey Planner 確認即時班次。" },
  { day: 10, date: "8/17", weekday: "一", city: "移動", title: "墨爾本飛雪梨・Darling Harbour", summary: "中午搭國內線前往雪梨，入住後漫步 Darling Harbour 與 QVB。", transport: "QF444・MEL 12:30 → SYD 13:55", stops: ["墨爾本住宿 Check-out 11:00", "QF444 飛往雪梨", "雪梨住宿 Check-in 15:00", "16:30 Darling Harbour", "QVB 夜景"], food: ["Ho Jiak Haymarket", "KHAO·SOI", "Chat Thai", "Mamak", "Shortstop Coffee & Donuts"], note: "預留國內線報到與市區交通時間。" },
  { day: 11, date: "8/18", weekday: "二", city: "雪梨", title: "歌劇院與港灣歷史步道", summary: "Circular Quay 出發，走訪歌劇院、皇家植物園、歷史建築與海德公園。", transport: "火車／輕軌＋步行", stops: ["Circular Quay", "Sydney Opera House 11:00 中文導覽（已規劃預約）", "Mrs Macquarie’s Chair", "The Mint", "Hyde Park", "St Mary’s Cathedral"], food: ["ASLAN Coffee／Mogu Mogu", "Marrickville Pork Roll"], note: "導覽票與集合地點請前一天再次確認。" },
  { day: 12, date: "8/19", weekday: "三", city: "雪梨", title: "Blue Mountains 深度一日遊", summary: "早班火車至 Katoomba，搭景觀纜車、走雨林步道與三姊妹岩。", transport: "Central → Katoomba 火車＋686 公車", stops: ["06:25 Central 出發", "08:25 Katoomba 抵達", "轉 686／686G 公車至 Scenic World", "黃色 Skyway → 紅色 Railway", "雨林步道約 30 分鐘", "藍色 Cableway 上山（站右側看景）", "Three Sisters／Echo Point", "14:00–16:00 Leura 小鎮", "16:19 Leura 回程"], food: ["Wayzgoose Diner 下午茶"], note: "班次與纜車營運可能調整，當天以官方資訊為準。" },
  { day: 13, date: "8/20", weekday: "四", city: "雪梨", title: "Kiama & Gerringong 南海岸", summary: "搭火車探索海濱小鎮、網紅路牌與 Kiama Blowhole。", transport: "Central → Gerringong → Kiama 火車／737 公車", stops: ["Gerringong", "Tasma Drive 周邊步行", "巴士返回 Kiama", "Kiama 午餐", "Kiama Blowhole", "市區特色小店"], food: ["Diggies", "Penny Whistlers"], note: "火車約每小時一班；以 Transport NSW Trip Planner 查詢即時班次。" },
  { day: 14, date: "8/21", weekday: "五", city: "雪梨", title: "魚市場・雪梨大學・Newtown", summary: "海鮮早餐後走訪大學古典建築，下午探索 Newtown，晚上逛唐人街夜市。", transport: "輕軌＋步行", stops: ["08:30 Sydney Fish Market", "11:00 University of Sydney／The Quadrangle", "14:00 Newtown", "18:00 Chinatown Friday Night Market"], food: ["Vic’s Meat Market 牛肉三明治", "烤生蠔", "Campos Coffee", "Emperor’s Puffs"], note: "魚市場新址與攤商資訊可能調整，出發前查官方公告。" },
  { day: 15, date: "8/22", weekday: "六", city: "雪梨", title: "North Sydney・The Rocks・返程", summary: "以北雪梨早餐和週末市集收尾，下午採買後前往機場。", transport: "火車／渡輪＋機場交通", stops: ["09:00 Kirribilli／North Sydney", "The Rocks Weekend Market", "12:00 QVB", "14:00 Black Star Pastry", "16:00 取行李前往機場", "SYD 21:55 出發"], food: ["Celsius Coffee Co.", "The Grounds", "Black Star Pastry"], note: "國際線建議至少提前 3 小時抵達；機場站附加費不計入 Opal 日上限。" },
  { day: 16, date: "8/23", weekday: "日", city: "移動", title: "香港轉機・抵達台北", summary: "清晨抵達香港，轉機返回台北。", transport: "CX138 → CX564", stops: ["HKG 05:10 抵達", "香港轉機約 3 小時", "HKG 08:10 出發", "TPE 10:00 抵達"] },
];

const melCoffee = [
  ["Patricia Coffee Brewers", "Double Ristretto Flat White、季節手沖", "巷弄站飲、極簡菜單"],
  ["Brother Baba Budan", "Single Origin Flat White", "Seven Seeds 系、天花板木椅"],
  ["Little Rogue", "抹茶小白、冰滴咖啡", "小藍門內的日韓極簡風"],
  ["Dukes Coffee Roasters", "Batch Brew、Espresso", "Flinders Lane、乾淨甜感"],
  ["Brick Lane Melbourne", "Haymaker Blend Flat White", "紅磚倉庫與澳式早午餐"],
  ["League of Honest Coffee", "燕麥奶／豆奶 Latte", "Little Lonsdale Street"],
  ["Market Lane Coffee", "V60 單品手沖", "專注產地與細緻風味"],
  ["Axil Coffee Roasters", "Magic", "雙份 Ristretto、薄奶泡"],
  ["Operator 25", "Coffee Spritz、Cold Brew", "舊電話交換局、亞洲風早午餐"],
  ["Everyday Midtown", "Filter Coffee、植物奶白咖啡", "北歐極簡、酸質溫和"],
];

const sydFood = [
  ["Parami", "CBD", "焙茶／抹茶拿鐵、飯糰", "AUD 10–22"],
  ["Industry Beans York St", "North CBD", "Flat White、Ricotta Hotcakes", "AUD 20–40"],
  ["Skittle Lane", "North CBD", "Single Origin Coffee", "AUD 5–15"],
  ["Stitch Coffee QVB", "QVB", "Yuzu Cold Brew", "AUD 6–18"],
  ["Kosmos Espresso Cafe", "Southern CBD", "Flat White", "AUD 6–18"],
  ["Toby’s Estate Coffee", "Chippendale", "Flat White、酪梨吐司", "AUD 10–25"],
  ["Mogu Mogu Onigiri", "Circular Quay", "飯糰、抹茶拿鐵", "AUD 10–20"],
  ["Marrickville Pork Roll", "Circular Quay", "越南豬肉卷", "AUD 10–18"],
  ["Four Frogs Crêperie", "Circular Quay", "甜／鹹法式薄餅", "AUD 18–35"],
  ["Auvers Dining", "Darling Square", "班尼迪克蛋、抹茶鬆餅", "AUD 25–40"],
  ["Pancakes on the Rocks", "Darling Square", "Devil’s Delight、Big Breakfast", "AUD 20–35"],
  ["Edition Roasters", "Darling Square", "抹茶舒芙蕾、明太子大蝦烏龍麵", "AUD 20–35"],
  ["Macchiato Wood Fire Pizza", "Haymarket", "Pizza、義大利麵、燉飯", "AUD 25–45"],
  ["Boon Restaurant & Café", "Haymarket", "泰式料理、Toast", "AUD 18–35"],
  ["KHAO·SOI", "Haymarket", "椰奶咖哩麵", "AUD 20–40"],
  ["Chat Thai", "Haymarket", "泰國家常菜", "AUD 20–40"],
  ["Shortstop Coffee & Donuts", "Haymarket", "現炸甜甜圈、咖啡", "AUD 8–18"],
  ["IIKO Mazesoba", "Haymarket", "鰻魚蕎麥麵、日式拌麵", "AUD 20–40"],
  ["Macelleria Newtown", "Newtown", "丁骨牛排、Angus Rib Eye", "AUD 30–60"],
  ["Paramount Coffee Project", "Surry Hills", "Crumbed Eggs、Chicken Waffle", "AUD 25–40"],
  ["Joe Black Cafe", "Surry Hills", "Big Breakfast", "AUD 20–35"],
];

const links = {
  ptv: "https://www.ptv.vic.gov.au/",
  nsw: "https://transportnsw.info/trip",
  smartgate: "https://www.abf.gov.au/smartgate/Pages/arrivals.aspx",
  melMap: "https://www.visitmelbourne.com/officialmapmelbourne",
  sydney: "https://www.sydney.com/",
};

function MapLink({ query }: { query: string }) {
  return <a className="map-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query + ", Australia")}`} target="_blank" rel="noreferrer" aria-label={`在 Google Maps 開啟 ${query}`}><span className="pin-icon" aria-hidden="true"></span><span>開啟地圖</span><span className="external-arrow" aria-hidden="true">↗</span></a>;
}

export default function Home() {
  const [city, setCity] = useState("全部");
  const [openDay, setOpenDay] = useState(2);
  const visibleDays = useMemo(() => city === "全部" ? days : days.filter((d) => d.city === city), [city]);
  const tripStatus = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const start = new Date(2026, 7, 8);
    const end = new Date(2026, 7, 23);
    const oneDay = 86400000;
    if (today < start) return { label: "距離出發", value: String(Math.ceil((start.getTime() - today.getTime()) / oneDay)), unit: "天", day: days[0] };
    if (today > end) return { label: "旅程狀態", value: "完成", unit: "", day: days[15] };
    const index = Math.floor((today.getTime() - start.getTime()) / oneDay);
    return { label: "今天是", value: `D${index + 1}`, unit: "", day: days[index] };
  }, []);

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到首頁"><span>AU</span> Australia 2026</a>
        <nav aria-label="主要導覽">
          <a href="#itinerary">行程</a><a href="#essentials">資訊</a><a href="#food">美食</a><a href="#checklist">清單</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">2026 澳洲旅行手冊 · 8/8—8/23</p>
          <h1>墨爾本<br/><em>→ 雪梨</em></h1>
          <p className="lede">16 天行程、交通、餐廳、票券與行前清單，都放在這裡。</p>
          <div className="hero-actions"><a className="button dark" href="#itinerary">每日行程</a><a className="button line" href="#essentials">航班／住宿／交通</a></div>
        </div>
        <div className="route-card trip-card" aria-label="旅程狀態">
          <small>{tripStatus.label}</small><strong>{tripStatus.value}<i>{tripStatus.unit}</i></strong>
          <div className="next-plan"><b>{tripStatus.day.date}（{tripStatus.day.weekday}）</b><span>{tripStatus.day.title}</span><small>{tripStatus.day.transport}</small></div>
          <a href={`#day-${tripStatus.day.day}`}>查看這一天 ↓</a>
        </div>
      </section>

      <section className="stats" id="quick">
        <div><strong>16</strong><span>旅行天數</span></div><div><strong>2</strong><span>主要城市</span></div><div><strong>6</strong><span>近郊探險</span></div><div><strong>31</strong><span>咖啡與餐廳</span></div>
      </section>

      <section className="section itinerary" id="itinerary">
        <div className="section-head"><div><p className="eyebrow">THE MASTER PLAN</p><h2>逐日行程</h2></div><p>點開日期即可看到景點順序、交通、餐飲與當日提醒。</p></div>
        <div className="filters" role="group" aria-label="篩選城市">{["全部","移動","墨爾本","雪梨"].map(x => <button key={x} className={city===x?"active":""} onClick={()=>setCity(x)}>{x}</button>)}</div>
        <div className="day-list">
          {visibleDays.map((d) => <article id={`day-${d.day}`} className={`day ${openDay===d.day?"open":""}`} key={d.day}>
            <button className="day-summary" onClick={()=>setOpenDay(openDay===d.day?0:d.day)} aria-expanded={openDay===d.day}>
              <span className="day-no">D{String(d.day).padStart(2,"0")}</span><span className="day-date">{d.date}<small>{d.weekday}</small></span><span className="day-title"><small>{d.city}</small>{d.title}</span><span className="toggle">{openDay===d.day?"−":"＋"}</span>
            </button>
            {openDay===d.day && <div className="day-detail"><div className="detail-intro"><p>{d.summary}</p><span>{d.transport}</span></div><ol>{d.stops.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol>{d.food&&<div className="food-line"><b>順路口袋名單</b>{d.food.map(f=><span key={f}>{f}</span>)}</div>}{d.note&&<p className="note">NOTE — {d.note}</p>}</div>}
          </article>)}
        </div>
      </section>

      <section className="section essentials" id="essentials">
        <div className="section-head light"><div><p className="eyebrow">TRAVEL ESSENTIALS</p><h2>旅途速查</h2></div><p>需要的關鍵資訊集中在這裡。票價與班次可能調整，請以連結內的官方即時資料為準。</p></div>
        <div className="info-grid">
          <article><span className="index">01</span><h3>航班</h3><dl><dt>去程</dt><dd>CX531 TPE 19:55 → HKG 22:00<br/>CX105 HKG 00:20 → MEL 11:15</dd><dt>中段</dt><dd>QF444 MEL 12:30 → SYD 13:55</dd><dt>回程</dt><dd>CX138 SYD 21:55 → HKG 05:10+1<br/>CX564 HKG 08:10 → TPE 10:00</dd></dl></article>
          <article><span className="index">02</span><h3>住宿</h3><dl><dt>Melbourne</dt><dd>South Yarra 3BR Retreat<br/>South Yarra, Melbourne VIC<br/><MapLink query="South Yarra Melbourne VIC"/></dd><dt>Sydney</dt><dd>Rydges Darling Square Apartment Hotel<br/>72 Liverpool Street, Sydney<br/><MapLink query="Rydges Darling Square Apartment Hotel"/></dd><dt>時間</dt><dd>Check-in 15:00<br/>Check-out 11:00</dd></dl></article>
          <article><span className="index">03</span><h3>墨爾本交通</h3><p>Free Tram Zone 內搭 Tram 免費且不需 touch on；起點或終點超出免費區，需使用 myki。火車與公車依規定 touch on／off。</p><a href={links.ptv} target="_blank" rel="noreferrer">PTV Journey Planner ↗</a><a href={links.melMap} target="_blank" rel="noreferrer">2026 官方旅遊地圖 ↗</a></article>
          <article><span className="index">04</span><h3>雪梨交通</h3><p>可用 Opal 或 Contactless card/device 搭 Metro、Train、Bus、Ferry、Light Rail。上下車都要正確 Tap；機場站費用另計。</p><a href={links.nsw} target="_blank" rel="noreferrer">Transport NSW Trip Planner ↗</a></article>
          <article><span className="index">05</span><h3>澳洲入境</h3><p>準備有效護照、有效簽證與 Incoming Passenger Card。符合資格者可在 kiosk 完成第一階段，再至 SmartGate 進行臉部辨識。</p><a href={links.smartgate} target="_blank" rel="noreferrer">ABF SmartGate 官方說明 ↗</a></article>
          <article><span className="index">06</span><h3>天氣與行李</h3><p>澳洲 8 月為冬季。墨爾本天氣多變，準備防風防雨外套、摺疊傘與保暖層；企鵝島、熱氣球與藍山尤其注意低溫。</p><p>目前行李規劃：託運 23 kg、手提 7 kg；出發前再以航空公司訂位資料確認。行動電源必須隨身攜帶。</p></article>
          <article><span className="index">07</span><h3>TRS 旅客退稅</h3><p>同一 ABN 的合格消費含 GST 合計至少 AUD 300，並於離境前 60 天內購買。離境當天攜帶護照、登機證、商品與合格正本發票；受限或大型託運物品需先給 ABF 查驗。</p><a href="https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" target="_blank" rel="noreferrer">ABF Tourist Refund Scheme ↗</a></article>
        </div>
      </section>

      <section className="section food" id="food">
        <div className="section-head"><div><p className="eyebrow">COFFEE & TABLE</p><h2>雙城口袋名單</h2></div><p>依區域查看推薦餐點與預算，出發前可直接開啟地圖導航。</p></div>
        <div className="food-block"><div className="food-title"><span>MEL</span><div><h3>Melbourne Coffee Trail</h3><p>CBD 10 間特色咖啡店</p></div></div><div className="card-grid">{melCoffee.map((x,i)=><article className="place-card" key={x[0]}><small>{String(i+1).padStart(2,"0")} · COFFEE</small><h4>{x[0]}</h4><b>{x[1]}</b><p>{x[2]}</p><MapLink query={`${x[0]} Melbourne`}/></article>)}</div></div>
        <div className="food-block"><div className="food-title coral"><span>SYD</span><div><h3>Sydney Food Guide</h3><p>精選 21 間咖啡、早午餐、正餐與甜點</p></div></div><div className="restaurant-list">{sydFood.map((x,i)=><article key={x[0]}><span>{String(i+1).padStart(2,"0")}</span><div><small>{x[1]}</small><h4>{x[0]}</h4><p>{x[2]}</p></div><b>{x[3]}</b><MapLink query={`${x[0]} Sydney`}/></article>)}</div><p className="data-note">價格為預估範圍；營業時間與菜單請在前往前確認。</p></div>
      </section>

      <section className="section checklist" id="checklist">
        <div className="section-head"><div><p className="eyebrow">BEFORE YOU GO</p><h2>行前清單</h2></div></div>
        <div className="check-grid">
          <article><h3>文件與預約</h3>{["有效護照與澳洲簽證／ETA","航班與住宿確認","Incoming Passenger Card 英文填寫","處方藥英文證明","熱氣球預約確認","Phillip Island 門票","Sovereign Hill 門票","Sydney Opera House 中文導覽","Blue Mountains Scenic World 票券"].map(x=><label key={x}><input type="checkbox"/> {x}</label>)}</article>
          <article><h3>隨身與衣物</h3>{["Type I 八字型轉接頭","SIM／eSIM 與離線地圖","防風防雨羽絨外套","發熱衣褲與保暖中層","毛帽、圍巾、手套與厚襪","好走的防滑鞋","摺疊傘、環保袋與保溫瓶","頸枕、耳塞、護唇與保濕用品","常備藥與暈車藥","行動電源放隨身行李","護照與重要文件離線備份","出發前再次秤重"].map(x=><label key={x}><input type="checkbox"/> {x}</label>)}</article>
          <article><h3>購物備忘</h3>{["Tim Tam、Red Rock Deli、Pods","T2 Tea、Manuka Honey","Lucas Papaw Ointment","Goat Soap、Vitamin E Cream","Aesop／Jurlique","Swisse／Blackmores","UGG 與羊毛製品","Haigh’s Chocolates","Queen Victoria Market 伴手禮","TRS：同一 ABN 滿 AUD 300 且離境前 60 天內"].map(x=><label key={x}><input type="checkbox"/> {x}</label>)}</article>
        </div>
      </section>

      <section className="emergency">
        <div><p className="eyebrow">KEEP THIS HANDY</p><h2>緊急資訊</h2><p>澳洲警察、消防、救護：<a href="tel:000">000</a></p></div>
        <div><h3>駐澳洲代表處公開聯絡資訊</h3><p>旅外急難救助全球免付費專線：<a href="tel:+80008850885">+800-0885-0885</a></p><p>外交部旅外國人急難救助：<a href="tel:+886800085095">+886-800-085-095</a></p><p>護照遺失：先向當地警察報案取得證明，再聯繫駐外館處，準備護照影本、照片與報案證明。</p></div>
      </section>

      <footer><div className="brand"><span>AU</span> Australia 2026</div><p>班次、票價、營業時間與入境規定可能變動，出發前請以官方即時資訊為準。</p><div><a href={links.melMap} target="_blank" rel="noreferrer">Visit Melbourne</a><a href={links.sydney} target="_blank" rel="noreferrer">Sydney.com</a><a href="#top">回到頂端 ↑</a></div></footer>
    </main>
  );
}
