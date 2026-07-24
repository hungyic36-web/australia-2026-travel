export type FoodInfo = {
  intro: string;
  officialUrl?: string;
  linkLabel?: "官方網站" | "官方社群";
};

const info: Record<string, FoodInfo> = {
  "Patricia Coffee Brewers": {
    intro: "墨爾本 CBD 的站飲型咖啡吧，空間精簡、出杯節奏俐落，適合安排在市區步行途中短暫停留。",
    officialUrl: "https://patriciacoffee.com.au/",
  },
  "Brother Baba Budan": {
    intro: "Seven Seeds 團隊旗下的巷弄咖啡店，以懸掛木椅的室內設計聞名；座位不多，較適合喝完再繼續逛街。",
  },
  "Little Rogue": {
    intro: "藏在小巷藍色門面後的咖啡店，風格安靜簡潔，也提供抹茶系飲品，適合避開主街人潮。",
    officialUrl: "https://www.littlerogue.com.au/",
  },
  "Dukes Coffee Roasters": {
    intro: "Flinders Lane 上的精品咖啡店，著重自家烘焙與可追溯咖啡豆；尖峰時段常有人潮，外帶通常較有效率。",
    officialUrl: "https://www.dukescoffee.com.au/",
  },
  "Brick Lane Melbourne": {
    intro: "位於 Guildford Lane 的綠意 bakery-café，餐點在店內製作且菜單隨季節調整，適合想把咖啡與完整早午餐排在一起的人。",
    officialUrl: "https://thebricklane.com.au/",
  },
  "League of Honest Coffee": {
    intro: "Little Lonsdale Street 一帶的咖啡專門店，除現場飲用外也販售咖啡豆與器材；平日上班時段較繁忙。",
    officialUrl: "https://leagueofhonestcoffee.com.au/",
  },
  "Market Lane Coffee": {
    intro: "墨爾本在地精品咖啡烘焙品牌，重視產地、季節與可追溯性；市區有多個據點，前往前可先確認最順路的分店。",
    officialUrl: "https://marketlane.com.au/pages/locations",
  },
  "Axil Coffee Roasters": {
    intro: "墨爾本本地烘焙品牌，市區分店適合快速喝咖啡或外帶；若要找指定分店，建議先由官方門市頁確認。",
    officialUrl: "https://axilcoffee.com.au/",
  },
  "Operator 25": {
    intro: "由舊電話交換所改造的 CBD café，餐點帶有亞洲風味；若要坐下享用完整早午餐，建議比一般外帶咖啡多預留一些時間。",
    officialUrl: "https://operator25.com.au/",
  },
  "Everyday Midtown": {
    intro: "市中心的極簡風咖啡店，適合喜歡乾淨明亮空間與手沖、filter coffee 的旅客，行程密集時也方便外帶。",
  },
  "Parami": {
    intro: "結合日式茶飲與飯糰的輕食店，適合早餐或移動途中簡單用餐；熱門品項可能提早售完。",
  },
  "Industry Beans York St": {
    intro: "Industry Beans 的 Sydney CBD 據點，兼具自家烘焙咖啡與完整 brunch 菜單，想坐下用餐時可優先考慮。",
    officialUrl: "https://industrybeans.com/",
  },
  "Skittle Lane": {
    intro: "Sydney CBD 的精品咖啡品牌，店面以咖啡為主、節奏俐落；適合在 Wynyard 一帶行程中短停。",
    officialUrl: "https://skittlelane.com/",
  },
  "Stitch Coffee QVB": {
    intro: "位於 QVB 的 Stitch Coffee 據點，方便與市中心購物行程串連；店內以自家烘焙咖啡及季節飲品為主。",
    officialUrl: "https://stitch.coffee/",
  },
  "Kosmos Espresso Cafe": {
    intro: "靠近 Sydney CBD 南側的社區型 espresso bar，較適合早餐、外帶或在市區步行途中快速補充咖啡。",
  },
  "Toby’s Estate Coffee": {
    intro: "源自 Sydney 的咖啡烘焙品牌，Chippendale 周邊據點可搭配附近散步；不同分店的餐點與座位配置可能不同。",
    officialUrl: "https://www.tobysestate.com.au/",
  },
  "Mogu Mogu Onigiri": {
    intro: "以日式飯糰為主的輕食選項，份量與攜帶性適合 Circular Quay 行程中快速用餐，不必安排正式餐廳時段。",
  },
  "Marrickville Pork Roll": {
    intro: "以越南 bánh mì 聞名的快餐選項，適合外帶；市區據點與 Marrickville 本店不同，前往前應確認分店位置。",
    officialUrl: "https://marrickvilleporkroll.com.au/",
  },
  "Four Frogs Crêperie": {
    intro: "Sydney 的法式 crêperie，甜、鹹薄餅皆有，可作下午茶或輕晚餐；Circular Quay 店位於 Gateway Sydney 一帶。",
    officialUrl: "https://www.fourfrogs.com.au/",
  },
  "Auvers Dining": {
    intro: "以現代澳洲料理結合亞洲風味的 café／餐廳，菜色呈現感較強，適合想安排一頓較完整早午餐的時段。",
    officialUrl: "https://auvers.com.au/",
  },
  "Pancakes on the Rocks": {
    intro: "Sydney 長期營業的休閒餐廳品牌，以甜、鹹 pancakes 與大份量餐點為主，適合多人分食或較晚時段用餐。",
    officialUrl: "https://pancakesontherocks.com.au/",
  },
  "Edition Roasters": {
    intro: "結合日系與北歐風格的 specialty café，咖啡與餐點都重視細緻呈現，適合預留坐下用餐的時間。",
    officialUrl: "https://editionroasters.com/",
  },
  "Macchiato Wood Fire Pizza": {
    intro: "Sydney CBD 的義式餐廳，主打 wood-fired pizza，適合安排為多人晚餐；熱門晚餐時段可先確認訂位。",
    officialUrl: "https://macchiato.com.au/",
  },
  "Boon Restaurant & Café": {
    intro: "泰式雜貨與餐飲概念店，可吃到較貼近日常口味的泰式麵飯與甜點，適合 Thai Town 一帶散步時順訪。",
  },
  "KHAO·SOI": {
    intro: "以泰北咖哩麵為主題的餐飲選項，口味與一般泰式炒河粉不同；若同行者不吃辣，點餐前宜先確認辣度。",
  },
  "Chat Thai": {
    intro: "Sydney 的泰國餐飲品牌，菜色選擇廣、用餐節奏熱鬧；分店不少，建議依當天動線選擇並確認排隊情況。",
    officialUrl: "https://www.chatthai.com.au/",
  },
  "Shortstop Coffee & Donuts": {
    intro: "主打每日現做 donuts 與咖啡，適合下午點心；口味會輪替，想吃指定款可先查看店家當日公告。",
    officialUrl: "https://www.short-stop.com.au/",
  },
  "IIKO Mazesoba": {
    intro: "以日式拌麵 mazesoba 為主的專門店，屬於無湯麵型餐點；可依個人口味調整配料與拌醬。",
    officialUrl: "https://iikomazesoba.com.au/",
  },
  "Macelleria Newtown": {
    intro: "以 butcher-to-table 概念供應牛排與漢堡，肉類選擇較多；適合 Newtown 行程後安排較有份量的正餐。",
    officialUrl: "https://macelleria.com.au/",
  },
  "Paramount Coffee Project": {
    intro: "Surry Hills 的大型 specialty café，會呈現不同烘焙商的咖啡，也有完整 brunch；週末可能需要等位。",
    officialUrl: "https://paramountcoffeeproject.com.au/",
  },
  "Joe Black Cafe": {
    intro: "Sydney CBD 邊緣的平價 café，餐點走傳統澳式早餐路線，適合不想為早餐繞路太遠的行程。",
  },
  "Minnow Cafe": {
    intro: "South Yarra 的 neighbourhood café，適合抵達住宿區後安排輕鬆早午餐或咖啡；PDF 標示與住宿區步行約 10 分鐘。",
  },
  "Two Birds One Stone": {
    intro: "South Yarra 的成熟 brunch café，以完整早餐盤與咖啡為主；若接近廚房收餐時間，宜先確認是否仍供餐。",
    officialUrl: "https://twobirdsonestonecafe.com.au/",
  },
  "Campos Coffee|South Yarra": {
    intro: "Campos Coffee 的 South Yarra 行程選項，適合住宿區周邊短停；實際分店與營業資訊應以官方門市頁為準。",
    officialUrl: "https://camposcoffee.com/",
  },
  "Lune Croissanterie": {
    intro: "以精準層次與酥脆口感聞名的 croissanterie，熱門門市常排隊且品項可能售罄；若時間有限可優先選經典款。",
    officialUrl: "https://www.lunecroissanterie.com/",
  },
  "Pho Bo Ga Mekong": {
    intro: "Swanston Street 上的老牌越南河粉店，翻桌速度快，適合 CBD 行程中的簡單正餐。",
  },
  "Hareruya": {
    intro: "以日式甜點與麻糬 gelato／冰品為特色的小店，適合市區步行途中安排短暫甜點休息。",
    officialUrl: "https://hareruya.com.au/",
  },
  "La Petite Crêperie": {
    intro: "市中心的法式薄餅小店，適合外帶甜點或輕食；攤位型據點座位有限，可直接接續 CBD 步行動線。",
    officialUrl: "https://www.lapetitecreperie.com.au/",
  },
  "Overlay Coffee": {
    intro: "Melbourne CBD 的創意咖啡選項，飲品風味較活潑；適合想在傳統 espresso 之外嘗試特色口味的人。",
  },
  "Pidapipó Gelateria": {
    intro: "墨爾本人氣 gelateria，口味依季節調整，適合 Degraves Street 或 CBD 散步收尾；尖峰時段常需排隊。",
    officialUrl: "https://pidapipo.com/",
  },
  "Haigh’s Chocolates": {
    intro: "澳洲家族巧克力品牌，市區門市適合採買伴手禮；不同包裝的保存與過敏原資訊可在店內確認。",
    officialUrl: "https://www.haighschocolates.com.au/",
  },
  "Restaurant 1309 at Balgownie Estate": {
    intro: "Balgownie Estate 酒莊內的早餐用餐地點，行程安排在熱氣球活動後休息用餐；供餐內容依當日預約為準。",
    officialUrl: "https://www.balgownie.com/",
  },
  "Yering Station": {
    intro: "Yarra Valley 酒莊與品飲據點，可將 tasting、餐飲與莊園參觀合併安排；品飲後勿自行駕車。",
    officialUrl: "https://www.yering.com/",
  },
  "Yarra Valley Dairy": {
    intro: "Yarra Valley 的乳酪品嚐與選購點，適合作為酒莊之間的短停；冷藏商品需考量後續車程與保存。",
    officialUrl: "https://www.yvd.com.au/",
  },
  "Punt Road Wines": {
    intro: "位於 Yarra Valley 的酒莊品牌，提供 cellar door 品飲；實際場次與是否需預約請以官方公告為準。",
    officialUrl: "https://puntroadwines.com.au/",
  },
  "St Huberts Cellar Door": {
    intro: "Yarra Valley 的 cellar door，行程安排在此停留並享用午餐；品飲與供餐內容依當日預約為準。",
    officialUrl: "https://www.sthuberts.com.au/",
  },
  "Domaine Chandon": {
    intro: "Yarra Valley 的氣泡酒莊園，品飲與餐飲體驗通常需較完整的停留時間；熱門日期宜事先預約。",
    officialUrl: "https://www.chandon.com.au/",
  },
  "The Chocolateries Yarra Valley": {
    intro: "Yarra Valley 的巧克力、甜點與冰淇淋複合景點，較適合家庭或不品酒的同行者；假日人潮通常較多。",
    officialUrl: "https://www.yvci.com.au/",
  },
  "Brunetti Classico": {
    intro: "墨爾本的義式甜點與咖啡品牌，適合多人各選甜點，也可作較晚時段的市區休息站。",
    officialUrl: "https://brunetticlassico.com.au/",
  },
  "DOC Pizza": {
    intro: "Carlton 的義式 pizza 餐廳，適合 Lygon Street 行程中的晚餐；熱門時段建議先查看訂位。",
    officialUrl: "https://docgroup.net/",
  },
  "Tiamo": {
    intro: "Lygon Street 的義式餐館，氣氛較傳統、菜色以 pasta 與經典義大利料理為主，適合多人共享。",
    officialUrl: "https://www.tiamo.com.au/",
  },
  "Donnini’s": {
    intro: "Carlton 的家族式義大利餐廳，以 pasta 為主，適合想在 Lygon Street 坐下吃一頓較完整晚餐的行程。",
  },
  "ST. ALi": {
    intro: "South Melbourne 的 specialty coffee 品牌與 café，餐飲空間比一般外帶咖啡店完整，適合市場行程前後安排。",
    officialUrl: "https://stali.com.au/",
  },
  "Padre Coffee": {
    intro: "在 South Melbourne Market 設有據點的澳洲咖啡烘焙品牌，適合逛市場時順手外帶。",
    officialUrl: "https://www.padrecoffee.com.au/",
  },
  "Deli Nuts": {
    intro: "市場型乾果與堅果採買選項，適合作為旅途中零食；購買前可確認調味、過敏原與是否需要密封保存。",
  },
  "Aptus Seafood": {
    intro: "South Melbourne Market 的海鮮商家，可查看當日生鮮、即食與外帶選項；品項與價格會依當天漁獲變動。",
    officialUrl: "https://aptusseafoods.com.au/",
  },
  "Simply Spanish": {
    intro: "South Melbourne Market 一帶的西班牙餐廳，以 paella 與 tapas 為主，適合多人分食；熱門時段可先訂位。",
    officialUrl: "https://simplyspanish.com.au/",
  },
  "Agathé Pâtisserie": {
    intro: "South Melbourne Market 內的法式 pâtisserie，現場烘焙品項可能陸續售罄，適合逛市場時先買再繼續走。",
    officialUrl: "https://www.agathe.com.au/",
  },
  "Cannoleria": {
    intro: "專做 Sicilian cannoli 的甜點品牌，內餡口味會更換；適合市場行程中作小份甜點。",
    officialUrl: "https://cannoleria.com.au/",
  },
  "Baba Su": {
    intro: "South Melbourne Market 的烘焙甜點選項，PDF 特別列出斑蘭牛角包；適合逛市場時作為小份點心。",
  },
  "Mama Tran Dumplings": {
    intro: "市場內的餃子與亞洲小吃選項，適合多人分食或快速補充；現場品項依攤位供應為準。",
  },
  "Dim Sim King": {
    intro: "以 South Melbourne Market 經典 dim sim 為主的市場小吃，適合即買即吃，不需另外安排正式用餐時間。",
  },
  "Claypots Seafood Bar": {
    intro: "以海鮮料理與 claypot 烹調為特色的餐廳，份量適合共享；若要吃完整正餐，建議與市場逛街時間分開預留。",
    officialUrl: "https://claypots.com.au/",
  },
  "Ho Jiak Haymarket": {
    intro: "Haymarket 的馬來西亞餐廳，菜色取向熱鬧、口味較濃，適合多人共享；熱門晚餐時段可先訂位。",
    officialUrl: "https://www.hojiak.com.au/",
  },
  "Mamak": {
    intro: "以 roti、satay 與馬來西亞街頭料理聞名，現場常見排隊；若行程時間固定，可避開正餐尖峰。",
    officialUrl: "https://mamak.com.au/",
  },
  "ASLAN Coffee": {
    intro: "以印尼產區咖啡為核心的 Sydney roaster，適合在 The Rocks／Circular Quay 行程中嘗試不同產區風味。",
    officialUrl: "https://aslancoffee.com.au/",
  },
  "Bourke Street Bakery": {
    intro: "Sydney 的 artisan bakery 品牌，以 sausage roll、pie 與麵包甜點為主；適合早餐或外帶到附近景點。",
    officialUrl: "https://bourkestreetbakery.com.au/",
  },
  "The Mint Café": {
    intro: "Sydney CBD 歷史建築區周邊的 café 選項，適合 Hyde Park／Macquarie Street 動線中安排咖啡或輕食。",
  },
  "Wayzgoose Diner": {
    intro: "Leura 的 casual diner／café，可作藍山行程中的午餐或下午茶；旅遊旺季宜留意候位時間。",
  },
  "Diggies": {
    intro: "Kiama 海邊的 café，以海景與 brunch 為主，適合與 Blowhole 行程結合；戶外座位受天候影響。",
    officialUrl: "https://diggies.com.au/",
  },
  "Penny Whistlers": {
    intro: "Kiama Harbour 附近的 waterfront café／restaurant，適合海邊行程後坐下用餐；熱門時段宜先訂位。",
    officialUrl: "https://pennywhistlers.com.au/",
  },
  "The Hill Bar & Kitchen": {
    intro: "Gerringong 一帶的休閒餐酒館，可作南岸自駕途中的正餐停靠點；菜單與營業日請出發前確認。",
    officialUrl: "https://thehillbarandkitchen.com/",
  },
  "Vic’s Meat Market": {
    intro: "Sydney Fish Market 內以肉品與熟食為主的商家，可找現做三明治等選項；市場重建或攤位調整期間應先確認位置。",
    officialUrl: "https://www.vicsmeatmarket.com.au/",
  },
  "烤生蠔": {
    intro: "這是 Sydney Fish Market 的現場小吃類型，不指向單一店家；建議依當日攤商、價格與生蠔來源現場選擇。",
  },
  "Campos Coffee|Newtown": {
    intro: "Campos Coffee 起源於 Newtown，適合與雪梨大學及 King Street 行程相接；實際門市狀態請先查看官方資訊。",
    officialUrl: "https://camposcoffee.com/",
  },
  "Emperor’s Puffs": {
    intro: "Chinatown 的現做 custard puff 小吃，通常以窗口排隊購買，適合作為夜市行程中的小份甜點。",
  },
  "Celsius Coffee Co.": {
    intro: "Kirribilli 碼頭旁的 waterfront café，可搭渡輪前往；座位有限，週末可能需要候位。",
    officialUrl: "https://celsiuscoffee.com.au/",
  },
  "The Grounds of the City": {
    intro: "位於 Sydney CBD 的復古風 café／restaurant，空間與服務較完整，適合購物行程中安排坐下用餐。",
    officialUrl: "https://thegrounds.com.au/",
  },
  "Black Star Pastry": {
    intro: "Sydney 甜點品牌，以層次鮮明的蛋糕與 pastry 為主；各門市供應品項可能不同，適合先查看當日陳列。",
    officialUrl: "https://blackstarpastry.com.au/",
  },
};

export function getFoodInfo(name: string, area?: string): FoodInfo {
  return info[`${name}|${area}`] ?? info[name] ?? {
    intro: "此地點來自行程 PDF；目前沒有足夠的官方資料可補充，前往前請以店家最新公告為準。",
  };
}
