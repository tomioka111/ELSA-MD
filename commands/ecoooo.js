const { sck,sck1,cmd, getBuffer, tlang,sleep,getAdmin, prefix } = require('../lib')
const Config = require('../config')
const eco = require('discord-mongoose-economy')
const ty = eco.connect(mongodb);
    //---------------------------------------------------------------------------

cmd({
        pattern: "صفر",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {
       let zerogroup = (await sck.findOne({
           id: citel.chat,
       })) || (await new sck({
               id: citel.chat,
           })
           .save());
       let mongoschemas = zerogroup.economy || "false";
       if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـبـنـك فـالـمـجـمـوعـة");
    if(!isCreator) return citel.reply(tlang().owner)
       let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
   if(!users) return citel.reply('֎╎مـنـشـن احـد بـعـد الأمـر @')
       const balance  = await eco.balance(users, "secktor")
       await eco.deduct(users, "secktor", balance.wallet);
       return await citel.reply(`֎╎تـم تـصـفـيـر المال الـخـاص ب : @${users.split('@')[0]} `,{mentions:[users]})
}
)
   //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    cmd({
       pattern: "المال",
       filename: __filename,
   },
   async(Void, citel, text,{ isCreator }) => {
    const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);
   let h = await eco.lb('secktor',300);
   let str = ``
   const { sck1 } = require('../lib');
   let arr = []
    for(let i=0;i<h.length;i++){
           let username = await sck1.findOne({ id: h[i].userID })
           var tname;
           if (username && username !== undefined) {
               tname = username.name
           } else {
               tname = Void.getName(h[i].userID)
           }
str+= `ـ *${i+1}* \n╮─────────────ـ\n│ *⧉ - المال:*  ${h[i].wallet}\n│ـ\n│ *⧉ - الرقم:* wa.me/${h[i].userID.split('@')[0]}\n╯─────────────ـ\n\n`
    arr.push(h[i].userID)
    }
        citel.reply(str,{mentions:arr})
        
    })


    //---------------------------------------------------------------------------
    cmd({
        pattern: "اموالي",
        filename: __filename,
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("֎╎لـم يـتـم تـشـغـيـل الـبـنـك فـالـمـجـمـوعـة");
         const secktor = "secktor"
         const balance = await eco.balance(citel.sender, secktor); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
         return await citel.reply(`⌬━─━｢🐉｣━─━⌬
↫ ⟦ بنك رايزل  ⟧
             
❀ ╎رصـيـدك 💰 ⟦ ${balance.wallet} ريال ⟧
⌬━─━｢🐉｣━─━⌬`)
     
     }
     )
     

    //---------------------------------------------------------------------------
   cmd({
        pattern: "تحويل",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => {

         const secktor = "secktor"
         const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);
         let users = citel.mentionedJid ? citel.mentionedJid : citel.msg.contextInfo.participant || false;
         if(!users) return citel.reply('֎╎مـنـشـن مـيـن تـبـغـى تحول لـه/م')
         users.forEach(async (user) => {
           await eco.give(user, secktor, parseInt(text.split(' ')[0]));
         });
        return await Void.sendMessage(citel.chat,{text: ` ֎╎تـم حولت له ${parseInt(text.split(' ')[0])} ل ${users.length} `,mentions:users},{quoted:citel})
    }
)


    //---------------------------------------------------------------------------
    cmd({
       pattern: "زرف",
       filename: __filename,
       react: "👍"
   },
   async(Void, citel, text,{ isCreator }) => {
    const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
        if (!isAdmins) return citel.reply(tlang().admin);

        const secktor = "secktor"
        let users = citel.mentionedJid ? citel.mentionedJid : citel.msg.contextInfo.participant || false;
if(!users) return citel.reply('منشن مين تبغى تزرف منه/م')
for (const user of users) {
 await eco.deduct(user, secktor, parseInt(text.split(' ')[0]));
}

       return await Void.sendMessage(citel.chat,{text: `تم اخذت ${parseInt(text.split(' ')[0])} من @${users.split('@')[0]}`,mentions:[users]},{quoted:citel})

   }
)

    //---------------------------------------------------------------------------
