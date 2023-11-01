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
 * @author : @jayjay-ops <https://github.com/jayjay-ops>
 * @modified by : @SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

 const { sck,sck1,cmd, getBuffer, tlang, prefix } = require('../lib')
 const Config = require('../config')
 const eco = require('discord-mongoose-economy')
 const ty = eco.connect(mongodb);
 /*
  cmd({
         pattern: "economy",
         desc: "daily gold.",
         category: "economy",
     },
     */
     //---------------------------------------------------------------------------
 cmd({
         pattern: "راتبي",
         desc: "daily gold.",
         category: "economy",
         filename: __filename,
         react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
         if (!citel.isGroup) return citel.reply(tlang().group);
	const secktor = "secktor"
	const daily  = await eco.daily(citel.sender, secktor, 2000); //give 500 for daily, can be changed
	 if (daily.cd) { //cdL is already formatted cooldown Left
        return await  citel.reply(`*🧧طـلبـت راتـبـك قـبـل ارجـع بـعـد ${daily.cdL}🫡*`)
	 } else {
	 citel.reply(`*راتـبـك نـزل ${daily.amount} 🪙 لا عـاد تـصـيـح*`);   
	 }
 }
 )

 cmd({
         pattern: "resetwallet",
         desc: "reset wallet of quoted user.",
         category: "economy",
         filename: __filename,
         react: "💷"
     },
     async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
	 if(!isCreator) return citel.reply(tlang().owner)
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
	if(!users) return citel.reply('Please give me user.')
        const balance  = await eco.balance(users, "secktor")
        await eco.deduct(users, "secktor", balance.wallet);
        return await citel.reply(`*⛩️ الـمـسـتـخـدم┇ @${users.split('@')[0]}* \n *🧧 @${users.split('@')[0]} فـقـدت كـل امـوالـك🪙*\n*الان بـتـعـيـش فـقـيـر🤡*`,{mentions:[users]})
 }
 )
    //---------------------------------------------------------------------------
 cmd({
    pattern: "capacity",
    desc: "update capacity.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("* 🏧 Economy* is not active in current group.");
    if (!citel.isGroup) return citel.reply(tlang().group);
    if (!text) return citel.reply(`💷 *Bank-capacity* 💳\n\n1 | *1000 sp* = 🪙100\n\n2 | *100000 sp* = 🪙1000\n\n3 | *10000000 sp* = 🪙10000000\n\nExample- ${prefix}capacity 1 OR ${prefix}bankupgrade 1000`)
    let user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    const secktor = "secktor"
	let value = text.trim();
	let k = parseInt(value)
    const balance  = await eco.balance(user, secktor)
    switch (value) {
        case '1000':
        case '1':
        if (k > balance.wallet ) return citel.reply(`*_You need to pay 🪙100 to increase bank capacity ~ 1000 sp_*`);
          const deduct1 = await eco.deduct(user, secktor, 100);
          const add1 = eco.giveCapacity(user, secktor, 1000);
return await citel.reply(`*1000 🪙diamond storage has been added in ${citel.pushName} bank*`)
              break
        case '100000':
        case '2':
        if (k < balance.wallet) return citel.reply(`*You need to pay 🪙1000 to increase bank capacity ~ 100000 sp*`);
          const deduct2 = await eco.deduct(user, secktor, 1000);
          const add2 = eco.giveCapacity(user, secktor, 100000);
return await citel.reply(`*100000 🪙diamond storage has been added in ${citel.pushName} bank*`)

              break
        case '10000000':
        case '3':
        if (k < balance.wallet) return citel.reply(`You need to pay 🪙10000 to increase bank capacity ~ 1000 sp`);
           const deduct3 = await eco.deduct(user, secktor, 10000);
           const add3 = eco.giveCapacity(user, secktor, 10000000);
return await citel.reply(`*10000000 🪙diamond storage has been added in ${citel.pushName}\'s bank*`)


             break
default:
 await citel.reply('*What are you trying to do📉*.')

 }
}
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "ايداع",
        desc: "deposit gold.",
        category: "economy",
        filename: __filename,
        react: "💎"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
      //  let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
        if (!text) return citel.reply("*ادخـل الـمـبـلغ الـذي تـريـد ايـداعـه💰*");
        let d = parseInt(text)
        const deposit = await eco.deposit(citel.sender, "secktor", d);
        const balance = await eco.balance(citel.sender, "secktor")
        if(deposit.noten) return citel.reply('You can\'t deposit what you don\'t have💰.'); //if user states more than whats in his wallet
return await citel.reply(`*⛩️ الـمـرسـل┇ ${citel.pushName}*\n*🍀تـم ايـداع💰 ${deposit.amount} بـنـجـاح الـي الـبـنـك الـخـاص بـك📈*`)
    }
)
     cmd({
        pattern: "التوب",
        desc: "check leaderboard.",
        category: "economy",
        filename: __filename,
        react: "🤑"
    },
    async(Void, citel, text,{ isCreator }) => {
	let h = await eco.lb('secktor',10);
	let str = `*اغـنـي ${h.length} مـستـخـدمـيـن لـديـهـم مال*\n`
	const { sck1 } = require('../lib');
	let arr = []
	 for(let i=0;i<h.length;i++){
            let username = await sck1.findOne({ id: h[i].userID })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = Void.getName(h[i].userID)
            }
str+= `*${i+1}*\n*⎔ ⋅ ──━ •﹝❄️﹞• ━── ⋅ ⎔*\n*֎╎الاسـم┇* _${tname}_\n*֎╎الـيـوزر┇* _@${h[i].userID.split('@')[0]}_\n*֎╎الـمـحـفـظـه┇* _${h[i].wallet}_\n*֎╎مـبـلغ الـبـنـك┇* _${h[i].bank}_\n*֎╎الـسـعـه الـمـصـرفـيـه┇* _${h[i].bankCapacity}_\n*⎔ ⋅ ──━ •﹝❄️﹞• ━── ⋅ ⎔*\n\n`  	 
	 arr.push(h[i].userID)
	 }
	     citel.reply(str,{mentions:arr})
	     
     })

cmd({
    pattern: "تحويل",
    desc: "transfer gold.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("*🏧الاقـتـصـاد لا يـــعـــمل*");
    let value = text.trim().split(" ");
    if (value[0] === "") return citel.reply(`*مـثـال┇ ${prefix}.تحويل 100 @يوزر*`);
    let user = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
    if(!user) return citel.reply('*֎╎مـنـشـن عـلـي شـخـص*');
    const secktor = "secktor"
        const user1 = citel.sender
        const user2 = user
        const word = value[0];
		const code = value[1];
        let d = parseInt(word)
		if (!d) return citel.reply("*֎╎انـت تـسـتـخـدم الامـر بـشـكـل خـاطـئ👀*");
        const balance = await eco.balance(user1, secktor);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        if(a == true) return citel.reply("*֎╎لـيـس لـديـك امـوال كـافـيـه لـتـحـويـلـهـا👎*");

        const deduct = await eco.deduct(user1, secktor, value[0]);
        const give = await eco.give(user2, secktor, value[0]);

return await citel.reply( `*֎╎📠تـم الـتـحـويـل بـنـجـاح ${value[0]} 💰*`)

}
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "محفظتي",
        alias :["المحفظه","المحفظة","محفظه"],
        desc: "shows wallet.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
         const secktor = "secktor"
         const balance = await eco.balance(citel.sender, secktor); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
return await citel.reply(`*👛 ${citel.pushName}'֎╎مـحـفـظـتـك┇*\n\n_🪙${balance.wallet}_`)
    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "اعطي",
        alias :["اعطاء"],
        desc: "Add money in wallet.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        if(!isCreator) return

         const secktor = "secktor"
         let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
         if(!users) return citel.reply('*֎╎مـنـشـن عـلـي شـخـص*')
         await eco.give(users, secktor, parseInt(text.split(' ')[0]));
        return await Void.sendMessage(citel.chat,{text: `*֎╎تـم اضـافـه📈 ${parseInt(text.split(' ')[0])} الـي مـحـفـظـه👛* @${users.split('@')[0]}`,mentions:[users]},{quoted:citel})

    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "بنك",
        alias :["البنك"],
        desc: "shows bank amount.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
        const balance = await eco.balance(citel.sender, "secktor"); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
return await citel.reply(`*֎╎بـنـك💰┇* ${citel.pushName}\n\n_🪙${balance.bank}/${balance.bankCapacity}_`)
    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "هجوم",
        desc: "rob bank amount.",
        category: "economy",
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
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
        let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
	if(!users) return citel.reply('*֎╎مـنـشـن عـلـي شـخـص*')
        const user1 = citel.sender
        const user2 = users
	const secktor = "secktor"
	    const k = 1000
        const balance1  = await eco.balance(user1, secktor)
	const balance2  = await eco.balance(user2, secktor)
	const typ = ['ran','rob','caught'];
    const random = typ[Math.floor(Math.random() * typ.length)];
    if (k > balance1.wallet) return citel.reply(`*֎╎لـيـس لـديـك مـا يـكـفـي مـن الـمـال لـدفـعـه إذا تـم الـقـبـض عـلـيـك☹️*`);
    if (k > balance2.wallet) return citel.reply(`*֎╎ضـحيـتـك فـقـيـره جـدا🤷🏽‍♂️ ارجـو تـركـهـا☹️*`);
    let tpy = random    
    switch (random) {
       
        case 'ran':
              await citel.reply(`*֎╎هـربـت ضـحـيـتـك كـن مـتـخـفـيـا فـي الـمـره الـقـادمـه🫰*`)
              ////citel.react('🥹')

              break
        case 'rob':
	  const deduff = Math.floor(Math.random() * 1000)	    
          await eco.deduct(user2, secktor, deduff);
          await eco.give(citel.sender, secktor, deduff);
          await citel.reply(`*֎╎عـمـلـيـه الـسـرقـه الـلـتي تـم اجـراؤهـا🗡️*\n*انـتـهـت بـأضـافـه مـبـلـغ ${deduff} الـي مـحـفـظـتـك👛*`)
          ////citel.react('💀')
              break
        case 'caught':
           const rmoney = Math.floor(Math.random() * 1000)
           await eco.deduct(user1, secktor, rmoney);
           await citel.reply(`*֎╎اسـف👮لـقـد دفـعـت ${rmoney} 🪙 مـن مـحـفـظـتـك🥹*`)
           ////citel.react('😦')
             break
default:
 await citel.reply('*֎╎مـاذا تـحـاول ان تـفـعـل👀*')
 //citel.react('🤔')

 }

    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "سحب",
        desc: "withdraw money from bank account.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
        const user = citel.sender
		if (!text) return citel.reply("*֎╎قـدم الـمـبلـغ💰الـذي تـريـد سـحـبـه مـن الـمـحـفـظـه💳*");
		const query = text.trim();
        const secktor = "secktor"
        const withdraw = await eco.withdraw(user, secktor, query);
        if(withdraw.noten) return citel.reply('*֎╎🏧الامـوال فـي الـبـنـك لا تـكـفـي للـسـحـب🫤*'); //if user states more than whats in his wallet
        const add = eco.give(user, secktor, query);
          citel.reply(`*֎╎تـنـبـيـه🏧┇* \n *֎╎تـم سـحـب_${withdraw.amount}_ عـمـلـه🪙 مـن مـحـفـظـتـك💰*`)
    }
)

     //---------------------------------------------------------------------------
     cmd({
        pattern: "رهان",
        desc: "gamble money.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
        const user = citel.sender
	//	if(citel.chat!=="120363043857093839@g.us") return citel.reply('This is not a economy group.')
        var texts = text.split(" ");
     var opp = texts[1];// your value
     var value = texts[0].toLowerCase();
     var gg = parseInt(value)
 ///.mentionedJid[0] ? m.mentionedJid[0] : m.sender
     const secktor = "secktor"
     const balance = await eco.balance(user, secktor);
     const g = (balance.wallet) > parseInt(value)
     const k = 50
     const a = (k) > parseInt(value)
     const twice = gg*2
          var hjkl;
     if(opp==='يسار')
     {
         hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/leftr.webp?raw=true'
     } 
    else if(opp==='يمين') 
    {
        hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/rightr.webp?raw=true'
    } else if(opp==='فوق') 
    {
        hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/upr.webp?raw=true'
    } else if (opp==='تحت'){
        hjkl = 'https://github.com/SecktorBot/Brandimages/blob/main/Nezuko/downr.webp?raw=true'
    } else{
        citel.reply(`Please provide direction(left,right,up,down).\nEg:- ${prefix}gamble 200 left`)
    }
   let media = await getBuffer(hjkl)
   citel.reply(media,{packname:'Secktor',author:'Economy'},"sticker")
     const f = ["فوق", "يمين", "يسار", "تحت", "فوق", "يسار", "تحت", "يمين", "فوق", "تحت", "يمين", "يسار"]
     const r = f[Math.floor(Math.random () * f.length)]
     if (!text) return citel.reply(
				`*֎╎مـثـال┇ ${prefix}رهان 100 الاتـجـاه(يسار,يمين,فوق,تحت)`
			);

            if (!value) return citel.reply("*֎╎حـدد الـمـبـلـغ الـذي تـريـد الـمـقـامـره عـلـيـه*");
            if (!opp) return citel.reply("*֎╎حـدد الاتـجـاه الـذي تـريـد الـرهـان عـلـيـه*");
            if (!gg) return citel.reply("*֎╎انـت تـسـتـخـدم الامـر بـشـكـل خـاطـئ👀*")
            if (g == false) return citel.reply(`*֎╎لـيـس لـديـك مـا يـكـفـي مـن الـمـال🪙لـلـرهـان عـلـيـه*`);
        if (a == true) return citel.reply(`*֎╎اسـف ${citel.pushName}, يـمـكـنـك الـرهـان فـقـط بـأكـثـر مـن 50🪙*`);
        if ( r == opp){
           let give = await eco.give(user , secktor, twice);
    //citel.react('⭐️')
return await citel.reply( `*֎╎لـقـد فـزت📈 بـ ${twice}🪙*`)
        }
        else{
           let deduct = await eco.deduct(user, secktor, texts[0]);
    //citel.react('🤮')
    return await citel.reply(`*֎╎لـقـد خـسـرت📉 ${texts[0]}🪙*`)
         }
    }
)




     //---------------------------------------------------------------------------
     cmd({
        pattern: "slot2",
        desc: "withdraw money from bank account.",
        category: "economy",
        filename: __filename,
        react: "💷"
    },
    async(Void, citel, text,{ isCreator }) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.economy || "false";
        if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
        var today = new Date();
        if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
            if (text == 'help') return citel.reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 🪙100 in your wallet\n\n*3:* If you don't have money in wallet then 👛withdraw from your bank🏦\n\n*4:* If you don't have 🤑 money in your 🏦bank too then use economy features to 📈gain money`)
            if (text == 'money') return citel.reply(`*1:* Small Win --> +🪙20\n\n*2:* Small Lose --> -🪙20\n\n*3:* Big Win --> +🪙100\n\n*4:* Big Lose --> -🪙50\n\n*5:* 🎉 JackPot --> +🪙1000`)
            const fruit1= ["🥥", "🍎", "🍇"]
            const fruit2 = ["🍎", "🍇", "🥥"]
            const fruit3 = ["🍇", "🥥", "🍎"]
            const fruit4 = "🍇"
            const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
            const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
            const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']
            const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']
            const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 🪙1000*']
            const user = citel.sender
            const secktor = "secktor"
            const k = 100
            const balance1  = await eco.balance(user, secktor)
            if (k > balance1.wallet) return citel.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
            const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
            const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
            const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
            //const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
            const mess1 = lose[Math.floor(Math.random() * lose.length)];
            const mess2 = won[Math.floor(Math.random() * won.length)];
            const mess3 = near[Math.floor(Math.random() * near.length)];
            const mess4 = jack[Math.floor(Math.random() * jack.length)];
            const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
            if(text.split(' ')[0]){
let value = text.split(' ')[0]
const balance = await eco.balance(citel.sender, secktor)
console.log(balance.wallet)
if(value<=balance.wallet){
    const deduff = Math.floor(Math.random() * value)
    if ((f1 !== f2) && f2 !== f3){
        const deduct1 = await eco.deduct(user, secktor, deduff);
        return citel.reply(`${mess1}\n\n*Big Lose -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && f2 == f3){
        const give1 = await eco.give(user, secktor, deduff/2);
        return citel.reply(`${mess2}\n*_Little Jackpot -->* _🪙${deduff/2}_`)
     }
     else if ((f1 == f2) && f2 !== f3){
        const give2 = await eco.give(user, secktor, deduff);
        return citel.reply(`${mess3}\n*Small Win -->* _🪙${deduff}_`)
     }
     else if ((f1 !== f2) && f1 == f3){
        const deduct2 = await eco.deduct(user, secktor, deduff);
        return citel.reply(`${mess5}\n\n*Small Lose -->* _🪙${deduff}_`)
     }
     else if ((f1 !== f2) && f2 == f3){
        const give4 = eco.give(user, secktor, deduff);
        return citel.reply(`${mess3}\n\n*Small Win -->* _🪙${deduff}_`)
     }
     else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
        const give5 = eco.give(user, secktor, deduff*20);
        return citel.reply(`${mess4}\n\n_🎊 JackPot --> _🪙${deduff*20}_`)
     }
     else {
        return citel.reply(`Do you understand what you are doing?`)
     }

} else{
    return citel.reply('You don\'t have enough 💰amount in your👛 wallet.\n- Please don\'t provide 🤑amount.')
}
            }
            if ((f1 !== f2) && f2 !== f3){
               const deduct1 = await eco.deduct(user, secktor, 50);
                      citel.reply(`${mess1}\n\n*Big Lose -->* _🪙50_`)
            }
            else if ((f1 == f2) && f2 == f3){
               const give1 = await eco.give(user, secktor, 100);
                     citel.reply(`${mess2}\n*_Little Jackpot -->* _🪙100_`)
            }
            else if ((f1 == f2) && f2 !== f3){
               const give2 = await eco.give(user, secktor, 20);
                     citel.reply(`${mess3}\n*Small Win -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f1 == f3){
               const deduct2 = await eco.deduct(user, secktor, 20);
                     citel.reply(`${mess5}\n\n*Small Lose -->* _🪙20_`)
            }
            else if ((f1 !== f2) && f2 == f3){
               const give4 = eco.give(user, secktor, 20);
                     citel.reply(`${mess3}\n\n*Small Win -->* _🪙20_`)
            }
            else if ((f1 == f2) && (f2 == f3) && (f3 == f4)){
               const give5 = eco.give(user, secktor, 1000);
                    citel.reply(`${mess4}\n\n_🎊 JackPot --> _🪙1000_`)
            }
            else {
                    citel.reply(`Do you understand what you are doing?`)
            }
         }
         else{
                citel.reply(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
         }
    }
)

cmd({
    pattern: "slot",
    desc: "slot game.",
    category: "economy",
    filename: __filename,
    react: "💷"
},
async(Void, citel, text,{ isCreator }) => {
    let zerogroup = (await sck.findOne({
        id: citel.chat,
    })) || (await new sck({
            id: citel.chat,
        })
        .save());
    let mongoschemas = zerogroup.economy || "false";
    if (mongoschemas == "false") return citel.reply("*🚦البنك لا يـــعـــمل*");
    const kg = 100
            const balance1  = await eco.balance(citel.sender, "secktor")
            if (kg > balance1.wallet) return citel.reply(`You are going to be spinning on your wallet, you need at least 🪙100`);
    var r_ban = new Array ();
    r_ban[0] =    "1 : 2 : 3"
    r_ban[1] = "1 : 2 : 3"
    r_ban[2] = "1 : 2 : 3"
    r_ban[3] = "4 : 3 : 3"
    r_ban[4] = "1 : 1 : 1"
    r_ban[5] = "5 : 2 : 5"
    r_ban[6] = "3 : 5 : 3"
    r_ban[7] = "1 : 3 : 6"
    r_ban[8] = "6 : 2 : 7"
    r_ban[9] = "1 : 6 : 3"
    r_ban[10]= "6 : 3 : 2"
    r_ban[11]= "5 : 5 : 6"
    r_ban[12]= "1 : 5 : 3"
    r_ban[13]= "4 : 1 : 7"
    r_ban[14]= "4 : 3 : 2"
    r_ban[15]= "4 : 3 : 2"
    r_ban[16]= "7 : 4 : 6"
    r_ban[17]= "6 : 5 : 1"
    r_ban[18]= "5 : 7 : 2"


    var p = Math.floor(19*Math.random())
    var q = Math.floor(19*Math.random())
    var r = Math.floor(19*Math.random())
    var i = (r_ban[p]);
    var j = (r_ban[q]);
    var k = (r_ban[r]);
    console.log(i+'\n'+j+'\n'+k)
    let t = i.split(':');
    let tt = j.split(':');
    let ttt = k.split(':');
    var lol;
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[0]===tt[0] && tt[0]===ttt[0]) lol = true
    if(t[1]===tt[1] && tt[1]===ttt[1]) lol = true
    if(t[2]===tt[2] && tt[2] ===ttt[2]) lol = true
    if(t[0]===tt[1] && tt[1]===ttt[2]) lol = true
    if(t[2]===tt[1] && tt[1]===ttt[0]) lol = true
    if(t[0]===t[1] && t[0]===t[2]) lol = true
    if(tt[0]===tt[1] && tt[0]===tt[2]) lol = true
    if(ttt[0]===ttt[1] && ttt[0]===ttt[2]) lol = true
    if(t[0]===ttt[1] && t[0]===ttt[2]) lol = true
    if(lol){
        const deduff = Math.floor(Math.random() * 5000)
        const give2 = await eco.give(citel.sender, "secktor", deduff*2);
        let st = `🎰 Slot Machine Result\n     ${i}\n\n     ${j}\n\n     ${k}\n\nWow Jackpot🎊.`
        let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `  `)
    return await citel.reply(str+`You got ${deduff*10} in your wallet.`)
    } else {
    const deduff = Math.floor(Math.random() * 300)
    const deduct1 = await eco.deduct(citel.sender, "secktor", deduff);
    let st = `\n🎰 Slot Machine Result\n     ${i}\n\n      ${j}\n\n      ${k}\n\nNot Jacpot📉 but lost `
            let str = st.replace(/1/g, `🔴`).replace(/2/g, `🔵`).replace(/3/g, `🟣`).replace(/4/g, `🟢`).replace(/5/g, `🟡`).replace(/6/g, `⚪️`).replace(/7/g, `⚫️`).replace(/:/g, `    `)
return await citel.reply(str+` ${deduff}.`)
}
}
) 
