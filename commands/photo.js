const axios = require('axios')
const { cmd } = require('../lib')

     //---------------------------------------------------------------------------

     const images = [
        "https://www.entoin.com/images/chara51.jpg",
"https://www.entoin.com/images/chara50.jpg",
"https://www.entoin.com/images/chara49.jpg",
"https://www.entoin.com/images/chara48.jpg",
"https://www.entoin.com/images/chara47.jpg",
"https://www.entoin.com/images/chara46.jpg",
"https://www.entoin.com/images/chara45.jpg",
"https://www.entoin.com/images/chara44.jpg",
"https://www.entoin.com/images/chara43.jpg",
"https://www.entoin.com/images/chara42.jpg",
"https://www.entoin.com/images/chara41.jpg",
"https://www.entoin.com/images/chara40.jpg",
"https://www.entoin.com/images/chara39.jpg",
"https://www.entoin.com/images/chara38.jpg",
"https://www.entoin.com/images/chara37.jpg",
"https://www.entoin.com/images/chara36.jpg",
"https://www.entoin.com/images/chara35.jpg",
"https://www.entoin.com/images/chara34.jpg",
"https://www.entoin.com/images/chara33.jpg",
"https://www.entoin.com/images/chara32.jpg",
"https://www.entoin.com/images/adball2.jpg",
"https://www.entoin.com/images/adball3.jpg",
"https://www.entoin.com/images/adball6.jpg",
"https://www.entoin.com/images/adball8.jpg",
"https://www.entoin.com/images/adball9.jpg",
"https://www.entoin.com/images/adball10.jpg",
"https://www.entoin.com/images/adball11.jpg",
"https://www.entoin.com/images/adball12.jpg",
"https://www.entoin.com/images/sllaye23.jpg",
"https://www.entoin.com/images/adball13.jpg",
"https://www.entoin.com/images/adball15.jpg",
"https://www.entoin.com/images/adball16.jpg",
"https://www.entoin.com/images/adball17.jpg",
"https://www.entoin.com/images/adball19.jpg",
"https://www.entoin.com/images/adball23.jpg",
"https://www.entoin.com/images/adball25.jpg",
"https://www.entoin.com/images/adball26.jpg",
"https://www.entoin.com/images/adball27.jpg",
"https://www.entoin.com/images/adball29.jpg",
"https://www.entoin.com/images/adball39.jpg",
"https://www.entoin.com/images/adball44.jpg",
"hhttps://www.entoin.com/images/adball42.jpg",
"https://www.entoin.com/images/enfp50.jpg",
"https://www.entoin.com/images/enfp49.jpg",
"https://www.entoin.com/images/enfp48.jpg",
"https://www.entoin.com/images/enfp47.jpg",
"https://www.entoin.com/images/enfp46.jpg",
"https://www.entoin.com/images/enfp45.jpg",
"https://www.entoin.com/images/enfp44.jpg",
"https://www.entoin.com/images/enfp43.jpg",
"https://www.entoin.com/images/enfp40.jpg",
"https://www.entoin.com/images/enfp39.jpg",
"https://www.entoin.com/images/enfp35.jpg",
"https://www.entoin.com/images/enfp32.jpg",
"https://www.entoin.com/images/enfp31.jpg",
"https://www.entoin.com/images/enfp28.jpg",
"https://www.entoin.com/images/enfp27.jpg",
"https://www.entoin.com/images/piece12.jpg",
"https://www.entoin.com/images/piece14.jpg",
"https://www.entoin.com/images/piece16.jpg",
"https://www.entoin.com/images/piece18.jpg",
"https://www.entoin.com/images/piece111.jpg",
"https://www.entoin.com/images/piece112.jpg",
"https://www.entoin.com/images/piece118.jpg",
"https://www.entoin.com/images/piece120.jpg",
"https://www.entoin.com/images/piece121.jpg",
"https://www.entoin.com/images/piece122.jpg",
"https://www.entoin.com/images/piece134.jpg",
"https://www.entoin.com/images/badaa51.jpg",
"https://www.entoin.com/images/badaa50.jpg",
"https://www.entoin.com/images/badaa49.jpg",
"https://www.entoin.com/images/badaa48.jpg",
"https://www.entoin.com/images/badaa47.jpg",
"https://www.entoin.com/images/badaa46.jpg",
"https://www.entoin.com/images/badaa44.jpg",
"https://www.entoin.com/images/badaa43.jpg",
"https://www.entoin.com/images/badaa42.jpg",
"https://www.entoin.com/images/badaa39.jpg",
"https://www.entoin.com/images/badaa38.jpg",
"https://www.entoin.com/images/badaa37.jpg",
"https://www.entoin.com/images/badaa36.jpg",
"https://www.entoin.com/images/badaa35.jpg",
"https://www.entoin.com/images/badaa34.jpg",
"https://www.entoin.com/images/badaa33.jpg",
"https://www.entoin.com/images/badaa31.jpg",
"https://www.entoin.com/images/badaa28.jpg",
"https://www.entoin.com/images/badaa27.jpg",
"https://www.entoin.com/images/badaa26.jpg",
"https://www.entoin.com/images/badaa25.jpg",
"https://www.entoin.com/images/badaa24.jpg",
"https://www.entoin.com/images/badaa23.jpg",
"https://www.entoin.com/images/badaa22.jpg",
"https://www.entoin.com/images/badaa21.jpg",
"https://www.entoin.com/images/badaa20.jpg",
"https://www.entoin.com/images/badaa19.jpg",
"https://www.entoin.com/images/badaa18.jpg",
"https://www.entoin.com/images/badaa17.jpg",
"https://www.entoin.com/images/badaa16.jpg",
"https://www.entoin.com/images/badaa15.jpg",
"https://www.entoin.com/images/badaa14.jpg",
"https://www.entoin.com/images/badaa13.jpg",
"https://www.entoin.com/images/badaa12.jpg",
"https://www.entoin.com/images/badaa11.jpg",
"https://www.entoin.com/images/badaa10.jpg",
"https://www.entoin.com/images/badaa9.jpg",
"https://www.entoin.com/images/badaa8.jpg",
"https://www.entoin.com/images/badaa7.jpg",
"https://www.entoin.com/images/badaa6.jpg",
"https://www.entoin.com/images/badaa5.jpg",
"https://www.entoin.com/images/badaa4.jpg",
"https://www.entoin.com/images/badaa3.jpg",
"https://www.entoin.com/images/badaa2.jpg",
"https://www.entoin.com/images/badaa1.jpg",
"https://www.entoin.com/images/piece138.jpg",
"https://www.entoin.com/images/piece139.jpg",
"https://www.entoin.com/images/piece140.jpg",
"https://www.entoin.com/images/enfp23.jpg",
"https://www.entoin.com/images/adball1.jpg",
"https://www.entoin.com/images/adball2.jpg",
"https://www.entoin.com/images/adball3.jpg",
"https://www.entoin.com/images/adball4.jpg",
"https://www.entoin.com/images/adball5.jpg",
"https://www.entoin.com/images/adball7.jpg",
"https://www.entoin.com/images/fatt49.jpg",
"https://www.entoin.com/images/fatt48.jpg",
"https://www.entoin.com/images/hero1.jpg",
"https://www.entoin.com/images/hero2.jpg",
"https://www.entoin.com/images/hero3.jpg",
"https://www.entoin.com/images/hero4.jpg",
"https://www.entoin.com/images/hero5.jpg",
"https://www.entoin.com/images/hero6.jpg",
"https://www.entoin.com/images/hero9.jpg",
"https://www.entoin.com/images/hero10.jpg",
"https://www.entoin.com/images/hero11.jpg",
"https://www.entoin.com/images/hero15.jpg",
"https://www.entoin.com/images/hero18.jpg",
"https://www.entoin.com/images/hero22.jpg",
"https://www.entoin.com/images/hero25.jpg",
"https://www.entoin.com/images/enfp19.jpg",
"https://www.entoin.com/images/enfp18.jpg",
"https://www.entoin.com/images/enfp17.jpg",
"https://www.entoin.com/images/enfp2.jpg",
"https://www.entoin.com/images/enfp3.jpg",
"https://www.entoin.com/images/enfp4.jpg",
"https://www.entoin.com/images/enfp5.jpg",
"https://www.entoin.com/images/enfp6.jpg",
"https://www.entoin.com/images/enfp8.jpg",
"https://www.entoin.com/images/enfp11.jpg",
"https://www.entoin.com/images/enfp13.jpg",
"https://www.entoin.com/images/enfp14.jpg",
"https://www.entoin.com/images/enfp15.jpg",
"https://www.entoin.com/images/sllaye7.jpg",
"https://www.entoin.com/images/sllaye8.jpg",
"https://www.entoin.com/images/sllaye12.jpg",
"https://www.entoin.com/images/sllaye17.jpg",
"https://www.entoin.com/images/sllaye18.jpg",
"https://www.entoin.com/images/riah20.jpg",
"https://www.entoin.com/images/riah17.jpg",
"https://www.entoin.com/images/riah21.jpg",
"https://www.entoin.com/images/riah23.jpg",
"https://www.entoin.com/images/riah26.jpg",
"https://www.entoin.com/images/riah27.jpg",
"https://www.entoin.com/images/riah29.jpg",
"https://www.entoin.com/images/riah31.jpg",
"https://www.entoin.com/images/riah34.jpg",
"https://www.entoin.com/images/riah35.jpg",
"https://www.entoin.com/images/riah36.jpg",
"https://www.entoin.com/images/riah38.jpg",
"https://www.entoin.com/images/riah39.jpg",
"https://www.entoin.com/images/riah41.jpg",
"https://www.entoin.com/images/riah42.jpg",
"https://www.entoin.com/images/riah43.jpg",
"https://www.entoin.com/images/riah44.jpg",
"https://www.entoin.com/images/riah46.jpg",
"https://www.entoin.com/images/rah47.jpg",
"https://www.entoin.com/images/riah48.jpg",
"https://www.entoin.com/images/sllaye19.jpg",
"https://www.entoin.com/images/sllaye20.jpg",
"https://www.entoin.com/images/sllaye21.jpg"
        // Add more image URLs as needed
      ];
      
      cmd({
        pattern: 'احزر',
      }, async(Void, citel, text) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
      
        await Void.sendMessage(citel.chat, {
          image: { url: randomImage },
          caption: "احزر اسم الشخصية"
        });
      });
      


     //---------------------------------------------------------------------------



const stickers = [
  "https://raw.githubusercontent.com/akida-15/akida/master/sticker/1.webp",
  "https://raw.githubusercontent.com/akida-15/akida/master/sticker/2.webp",
  "https://raw.githubusercontent.com/akida-15/akida/master/sticker/3.webp",
  "https://raw.githubusercontent.com/akida-15/akida/master/sticker/4.webp",
  "https://raw.githubusercontent.com/akida-15/akida/master/sticker/5.webp",
  "https://raw.githubusercontent.com/akida-15/akida/master/sticker/6.webp"
];

cmd({
  pattern: 'نرد',
}, async (Void, citel, text) => {
  const randomIndex = Math.floor(Math.random() * stickers.length);
  const randomSticker = stickers[randomIndex];

  await Void.sendMessage(citel.chat, { sticker: { url: randomSticker } });
});
