/**
██╗███████╗██╗   ██╗██╗  ██╗██╗   ██╗    ███╗   ███╗██████╗ 
██║╚══███╔╝██║   ██║██║ ██╔╝██║   ██║    ████╗ ████║██╔══██╗
██║  ███╔╝ ██║   ██║█████╔╝ ██║   ██║    ██╔████╔██║██║  ██║
██║ ███╔╝  ██║   ██║██╔═██╗ ██║   ██║    ██║╚██╔╝██║██║  ██║
██║███████╗╚██████╔╝██║  ██╗╚██████╔╝    ██║ ╚═╝ ██║██████╔╝
╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝     ╚═╝╚═════╝ 
                                                            
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

 const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,cmd,getBuffer } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
  //---------------------------------------------------------------------------
 cmd({
    pattern: "setwelcome",
    alias: ["الترحيب","تغيرالترحيب"],
    desc: "sets welcome message in specific group.",
    category: "misc",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('*֎╎ايـن رسـالـه الـترحـيـب الـجـديـده*')
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('*֎╎تـم تـغـيـر رسـالـه الـتـرحـيـب بـنـجـاح*')
                
            }      
}
)
 //---------------------------------------------------------------------------
cmd({
    pattern: "setgoodbye",
    alias: ["المغادره","المغادرة","تغيرالمغادره","تغيرالمغادرة"],
    desc: "sets goodbye message in specific group.",
    category: "misc",
},
async(Void, citel, text,{ isCreator }) => {
    if (!isCreator) return citel.reply(tlang().owner)
          let Group = await sck.findOne({ id: citel.chat })
            if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('*֎╎ايـن رسـالـه الـمـغـادره الـجـديـده*');
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('*֎╎تـم تـغـيـر رسـالـه الـمـغـادره بـنـجـاح*');     
            }      
}
)
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "steal",
             alias: ["سرقه","سرقة","زرف","ملصقي"],
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`*֎╎رد عـلـي مـلـصـق لـسـرقـتـه*`);
             let mime = citel.quoted.mtype
             var pack;
             var author;
             if (text) {
                 anu = text.split("|");
                 pack = anu[0] !== "" ? anu[0] : citel.pushName + '𝐸𝐿𝑆𝐴 𝐵𝑂𝑇-𝑀𝐷';
                 author = anu[1] !== "" ? anu[1] : Config.author;
             } else {
                 pack = citel.pushName;
                 author = "𝐸𝐿𝑆𝐴 𝐵𝑂𝑇-𝑀𝐷";
             }
                 let media = await citel.quoted.download();
                 citel.reply("*֎╎لـحـظـه بـرسـلـك الـمـلـصـق...*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "المده",
             alias: ["runtime"],
             desc: "Tells runtime/uptime of bot.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             const upt = runtime(process.uptime())
             return citel.reply(`֎╎مـده تـشـغـيـل ${tlang().title}: ${upt}`)
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "رابطه",
             alias: ["رابطة"],
             desc: "Makes wa.me of quoted or mentioned user.",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, text) => {
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            return citel.reply(`https://wa.me/${users}`)
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "شخص",
             desc: "Pics random user from Group",
             category: "misc",
             filename: __filename,
         },
         async(Void, citel, match) => {
             if (!match) return citel.reply("*֎╎اكـتـب صـفـه مـعـيـنـه*");
             const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                 .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
             let member = participants.map((u) => u.id);
             let me = citel.sender;
             let pick = member[Math.floor(Math.random() * member.length)];
             Void.sendMessage(citel.chat, {
                 text: `*֎╎اكـتـر شـخـص ${match} فـي هـذا الـقـروب هـو @${pick.split("@")[0]}*`,
                 mentions: [pick],
             }, {
                 quoted: citel,
             });
         }
     )
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "عكس",
             desc: "Flips given text.",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`*֎╎مـثـال┇.عـكـس الـسـا*`)
             flipe = text.split('').reverse().join('')
             citel.reply(`\`\`\`*〖عـكـس الـكـلـمـات〗*\`\`\`\n*֎╎الـكـلـمـه الاصـلـيـه┇* \n${text}\n*֎╎الـكـلـمـه الـمـعـكـوسـه┇* \n${flipe}`)
 
         }
     )
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "دمج",
             desc: "Mixes two emojies.",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`*֎╎مـثـال┇ ${prefix}دمج 😅+🤔*`);
             let [emoji1, emoji2] = text.split `+`;
             let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1 )}_${encodeURIComponent(emoji2)}`);
             for (let res of anu.results) {
                 let encmedia = await Void.sendImageAsSticker(citel.chat, res.url, citel, {
                     packname: global.packname,
                     author: global.author,
                     categories: res.tags,
                 });
                 await fs.unlinkSync(encmedia);
             }
         }
     )
     //---------------------------------------------------------------------------
 
 cmd({
             pattern: "تشفير",
             alias: ["شيفره"],
             desc: "encode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`*֎╎تـم تـشـفـيـر الـنـص*`);
 
                 let textt = text || citel.quoted.text
                 let eb = await eBinary(textt);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "فك-تشفير",
             alias: ["فك-شيفره"],
             desc: "decode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`*֎╎تـم فـك تـشـفـيـر الـنـص*`);
                 let eb = await dBinary(text);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     
        
cmd({
  pattern: "البوت",
  desc: "activates and deactivates bot.\nuse buttons to toggle.",
  category: "misc",
  filename: __filename,
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return //citel.reply(tlang().owner)
switch (text.split(" ")[0]) {
 case 'فتح':{
         let checkgroup = await sck.findOne({ id: citel.chat })
         if (!checkgroup) {
             await new sck({ id: citel.chat, botenable: "true" }).save()
             return citel.reply(`*֎╎تـم فـتـح الـبـوت ${tlang().title}*`)
         } else {
             if (checkgroup.botenable == "true") return citel.reply("*֎╎تـم فـتـح الـبـوت بـالـفـعـل*")
             await sck.updateOne({ id: citel.chat }, { botenable: "true" })
             return citel.reply(`*֎╎تـم فـتـح الـبـوت ${tlang().title}*`)
         }
     }
  
 break
case 'قفل':{
            {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!checkgroup) {
                 await new sck({ id: citel.chat, botenable: "false" })
                     .save()
                 return citel.reply(`*֎╎تـم قـفـل الـبـوت ${tlang().title}*`)
             } else {
                 if (checkgroup.botenable == "false") return citel.reply("*֎╎تـم قـفـل الـبـوت بـالـفـعـل*")
                 await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                 return citel.reply(`*֎╎تـم قـفـل الـبـوت ${tlang().title}*`)
             }
         }
}
break
default:{
let checkgroup = await sck.findOne({ id: citel.chat })
let buttons = [{
          buttonId: `${prefix}البوت فتح`,
          buttonText: {
              displayText: "فتح",
          },
          type: 1,
      },
      {
          buttonId: `${prefix}البوت قفل`,
          buttonText: {
              displayText: "قفل",
          },
          type: 1,
      },
  ];
  await Void.sendButtonText(citel.chat, buttons, `*֎╎حـالـه الـبـوت┇* ${checkgroup.botenable}`, Void.user.name, citel);
}
}
})   
         
     //---------------------------------------------------------------------------
 cmd({
             pattern: "antil",
             filename: __filename,
         },
         async(Void, citel, text) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
             const groupAdmins = await getAdmin(Void, citel)
             const botNumber = await Void.decodeJid(Void.user.id)
             const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins) return citel.reply(tlang().admin)
             if (!isBotAdmins) return citel.reply(tlang().botadmin)
             let buttons = [{
                     buttonId: `${prefix}فتح الروابط`,
                     buttonText: {
                         displayText: "فتح",
                     },
                     type: 1,
                 },
                 {
                     buttonId: `${prefix}قفل الروابط`,
                     buttonText: {
                         displayText: "قفل",
                     },
                     type: 1,
                 },
             ];
             await Void.sendButtonText(citel.chat, buttons, `تشغيل او تعطيل مضاد الروابط`, Void.user.name, citel);
         }
     )
         
     //---------------------------------------------------------------------------
     
     
smd({
            pattern: "كشف",
            desc: "Makes wa me of quoted or mentioned user.",
            category: "user",
            react: "⚙️",
            filename: __filename
        },
        async(Void, citel, text) => {

   if (!citel.quoted) return citel.reply(`*_Please reply any User_*`);
    var bio = await Void.fetchStatus(citel.sender);
            var bioo = bio.status;
       var words = setAt.split(" ");
    if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
     
    let pfp;
    try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
    catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }

    
    let Elsa = `
┏━━⟪⟪ تست ⟫━⦿
┃✗ *•ᴘᴇʀsᴏɴ's ɪɴғᴏʀᴍᴀᴛɪᴏɴ•*
┃✗ *•ɴᴜᴍ•* ${citel.pushName}
┃✗ *•ʙɪᴏ•*  ${bioo}
┃✗   *•ᴋᴇᴇᴘ ᴄᴀʟᴍ ᴅᴜᴅᴇ•*
┗━━━━━━━━━━⦿
`
    let king = {            
    image: { url: pfp},
    caption: Elsa,
    footer: tlang().footer,
    headerType: 4,
    contextInfo: {
        externalAdReply: {
            title: `${Config.ownername}`,
            body: `ELSA-BOT`,
            thumbnail: log0,
            mediaType: 4,
            mediaUrl: '',
            sourceUrl: `ELSA`,}}}
  
return await Void.sendMessage(citel.chat, king,{quoted:citel});
}
)
 
     cmd({
        pattern: 'اختصار',
        alias :['قص' , 'تقصير'],
        category: "search",
        desc: "Provides screenshot of given url",
        use: '<text>',
        filename: __filename,
    },
    async(Void, citel, text) => {
let limit = 5;
try {
if (!text) return citel.reply("*֎╎ويـن  الـرابـط ؟*");
let urll = `https://s.vercel.app/api?url=${text.match(/\bhttps?:\/\/\S+/gi)[0]}&width=1280&height=720`
let media  = await getBuffer(urll)
return await Void.sendMessage(citel.chat ,{image : media } , {quoted:citel} )
}
catch (err) { return citel.reply("*֎╎تـم  اخـتـصـار  رابـطـك ┇*")}
    }
)


     //---------------------------------------------------------------------------
 cmd({ on: "body" }, async(Void, citel) => {
     if (Config.autoreaction === 'true' && citel.text.startsWith(prefix)) {
         const emojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','🧞‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
 })
