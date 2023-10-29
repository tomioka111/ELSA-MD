/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : BLADE-MD
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/SuhailTechInfo
   * @description : BLADE-MD ,A Multi-functional whatsapp user bot.
   * @version 1.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
 
 const {tlang, getAdmin, prefix, Config, sck,sck1, fetchJson,getBuffer, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");
  //---------------------------------------------------------------------------
 cmd({
    pattern: "الترحيب",
    alias:["setwelcome"],
    desc: "sets welcome message in specific group.",
    category: "misc",
 filename: __filename
},
async(Void, citel, text,{ isCreator }) => {

        let grp =citel.chat;
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)	
        const isAdmins = groupAdmins.includes(citel.sender) 
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
 
      let Group = await sck.findOne({ id: citel.chat });
      if (!text)  {  return await citel.reply ("*֎╎رسـالـه الـتـرحـيـب┇* "+Group.welcome)  }
      await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
      let metadata = await Void.groupMetadata(citel.chat);
      var ppuser;
      let num = citel.sender;
  
      var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
      try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
      return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: welcome_messages,} )


       /*if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('Welcome added for this group.\n *Wellcome Message :* '+text )
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('Welcome updated successfully.\n *New Wellcome Message Is :* '+text)
                
            }      */
  
}
)
 //---------------------------------------------------------------------------
cmd({
    pattern: "المغادره",
    alias: ["المغادرة","setbye"],
    desc: "sets goodbye message in specific group.",
    category: "misc",
 filename: __filename
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)	
    const isAdmins = groupAdmins.includes(citel.sender) 
    if (!isAdmins && !isCreator) return citel.reply(tlang().admin);

    let Group = await sck.findOne({ id: citel.chat })
    if (!text)  {  return await citel.reply ("**֎╎رسـالـه الـمــغادره┇* "+Group.goodbye)  }
    await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' }) 
 
    let metadata = await Void.groupMetadata(citel.chat);
    var ppuser;
    let num = citel.sender;
    var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
    try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }

        return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: goodbye_messages, })

         /*   if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('Goodbye added for this group.\n *New Googbye Message Is :* '+text)
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('Goodbye updated successfully.\n *New GoodBye Message Is :* '+text)    
            }      
           */
})

     //---------------------------------------------------------------------------
     cmd({
        pattern: "blocklist",
        alias:["المحظورين",'البلوكات'],
        desc: "get list of all Blocked Numbers",
        category: "user",
        filename: __filename,
        use: '<text>',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(`*֎╎لا يـوجـد اي ارقـام مـحـظـوره*`);
            let txt = `\n*〖قـائـمـه الـمـحـظـوريـن〗*\n\n*֎╎عـدد الـمـحـظـوريـن┇* ${data.length}\n\n┓─━═║✠║◦¦❄️¦◦║✠║═━─┏\n`;
            for (let i = 0; i < data.length; i++) {      txt += `֎╎ ${i + 1}┇ wa.me/${data[i].split("@")[0]}\n`;    }
            txt += "┛─━═║✠║◦¦❄️¦◦║✠║═━─┗";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.reply('*֎╎*֎╎خـطـأ اثـنـاء الـحـصـول عـلـى ارقـام مـحـظـوره*' + err);
          }
    }
    )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "location",
             desc: "Adds *readmore* in given text.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {
          if (!text) return await citel.reply(`Give Coordinates To Send Location\n *Example:* ${prefix}location 24.121231,55.1121221`);
         let cord1 = parseFloat(text.split(',')[0]) || ''
         let cord2 = parseFloat(text.split(',')[1]) || ''
         if(!cord1 || isNaN(cord1) ||  !cord2 || isNaN(cord2)) return await  citel.reply("```Cordinates Not In Formate, Try Again```") 

let txt  = "*----------LOCATION------------*"
   txt +="``` \n Sending Location Of Given Data: ";
   txt +="\n Latitude     :  "+cord1;
   txt +="\n Longitude  :  "+cord2 +"```\n"+Config.caption;

await citel.reply (txt);


      return await Void.sendMessage(citel.chat, { location: { degreesLatitude : cord1, degreesLongitude : cord2 } } ,{quoted : citel} )
 }
     )
     //---------------------------------------------------------------------------
 

/*

cmd({
             pattern: "exec",
             desc: "Evaluates quoted code with given language.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
  if (!citel.quoted) return citel.reply("*Reply to A Code Of Statements to Execute*")
             try {
                 const code = {
                     script: citel.quoted.text,
                     language: text[1],
                     versionIndex: "0",
                     stdin: text.slice(2).join(" "),
                     clientId: '694805244d4f825fc02a9d6260a54a99',
                     clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
                 };
                 request({
                     url: "https://api.jdoodle.com/v1/execute",
                     method: "POST",
                     json: code
                 }, function(_error, _response, body) {  citel.reply("> " + text[1] + "\n\n" + "```" + body.output + "```");  });
             } catch (error) {return await citel.reply("*Error In Your Code :* "+error);  }
         }
     )
     */

     //---------------------------------------------------------------------------

 cmd({
        pattern: "getpp",
        alias:["صورته"],
        desc: "Get Profile Pic For Given User",
        category: "user",
        filename: __filename
    },
    async(Void, citel, text) => {

        if (!citel.quoted) return citel.reply (`*֎╎مـنـشـن عـلـي شـخـص او رد عـلـي رسـالـتـه*`)
        let pfp;
        try  { pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
        catch (e) {  return citel.reply("*֎╎لا يـوجـد لـديـه صـوره بـروفـايـل*") } 
        return await Void.sendMessage(citel.chat, {image: { url: pfp },caption: '  *---صـوره بـروفـايـلـه---*\nبـواسـطـه┇'+Config.author, },{quoted:citel}); 


         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "readmore",
             alias:["rmore",'readmor'],
             desc: "Adds *readmore* in given text.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
            if(!text) {text = `*Uhh Dear, Give Text, Eg:- _.readmor text1 readmore text2_*`; }
            else { text += " " }
            text.includes("readmore")?await citel.reply(text.replace(/readmore/, (String.fromCharCode(8206)).repeat(4001))) : await citel.reply(text.replace(" ", (String.fromCharCode(8206)).repeat(4001)))
         }
     )
  //---------------------------------------------------------------------------
cmd({
            pattern: "whois",
            alias:["كشف"],
            desc: "Get replied person info",
            category: "user",
            use: '<reply to any person>',
            filename: __filename
        },
async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`*֎╎مـنـشـن عـلـي شـخـص او رد عـلـي رسـالـتـه*`);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
            catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
            
            let username = await sck1.findOne({ id: citel.quoted.sender });
            var tname = username.name;

            
         return await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
*↫ مـعـلـومـاتـك♥.!*
*⌁︙اسمڪ🪪↫ ${tname}*
*⌁︙رقمڪ👤↫ ${num}*
*⌁︙البـايـــو⚡↫ ${bioo}*
`,
            },{quoted:citel});

        }
    )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "vcard",
             alias:["كونكت"],
             desc: "Create Contact by given name.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*Please Reply to User With Name*`);
if ( !text ) return citel.reply( `Please Give Me User Name, \n *Example : ${prefix}vcard alex tv* `)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})
     //---------------------------------------------------------------------------


 cmd({
             pattern: "calc",
             desc: "Calculate two value.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
            
            if (!text) return await citel.reply("Please enter a mathematical operation.");
            text = text.replace(/\s+/g, '');
            if (!/^(\d+([-+%*/]\d+)+)$/.test(text)) return await  citel.reply("Please enter a valid mathematical operation.");
            const evaluate = (exp) => {  return new Function('return ' + exp)(); };
            try {
                const result = evaluate(text);
                if (text.includes('/') && text.split('/').some((num) => num === '0')) return await citel.send("*Cannot divide by zero.*");
                if (text.split(/[-+%*/]/).length <= 2) {
                    const [num1, operator, num2] = text.match(/\d+|[-+%*/]/g);
                    return citel.send(`${num1} ${operator} ${num2} = ${result}`);
                } else {  return await citel.send(`Result: ${result}`); }
            } catch (error) {  }










/*

let func  =  text.split(";")[0];
let num1  =  +text.split(";")[1];
let num2  =  +text.split(";")[2];

var c1 = num1.toString();
var c2 = num2.toString();
if(c1=="NaN" || c2 ==  "NaN") return citel.reply("*Numbers Are Not In Formate, Try Again*") 
if (!text)
{
let txt="*--------------- CALCULATOR ----------------*\n";
 txt +=" \nChoose An Operator From List  ";
 txt +="\nFor Addittion    :  add ";
 txt +="\nFor Subtraction :  sub";
 txt +="\nFor  Multiply     :  mul";
 txt +="\nFor division       :  div";
 txt += `\n\n  Likewise :  ${prefix}calc add;10;50`;   
  return citel.reply(txt)
}
else if (func == "add" )  {  let result = num1+num2;
return citel.reply (`${num1} + ${ num2}  = ${result}` );
}
else if (func == "sub" ) { let result = num1-num2;
return citel.reply (`${num1} - ${ num2}  = ${result}` );
}
else if (func == "mul" ) { let result = num1*num2;
return citel.reply (`${num1} * ${ num2}  = ${result}` );
}
else if (func == "div" ) { let result = num1/num2;
return citel.reply (`${num1} / ${ num2}  = ${result}` );
}
else
 {
return citel.reply(`Give me Query Like :  ${prefix}calc add;10;50 `);
}
 */
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
             desc: "Makes wa me of quoted or mentioned user.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {
             if(!citel.quoted && !citel.mentionedJid) return await citel.reply(`*֎╎مـنـشـن عـلـي شـخـص او رد عـلـي رسـالـتـه*`);
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            return await  citel.reply(`https://wa.me/${users}`);
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "mee",
             alias: ["رابطي"],
             desc: "Makes wa me for user.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {  let user = citel.sender.split('@')[0]  ; return await citel.reply( `https://wa.me/${user}` ); })
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
             pattern: "emix",
             alias: ["دمج"],
             desc: "Mixes two emojies.",
             category: "sticker",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`*֎╎مـثـال┇ ${prefix}دمج 😅+🤔*`);
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
             let emoji1 = text.split("+")[0] ;
             let emoji2 = text.split("+")[1];

  const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`);
  const data = await response.json();
  if(data.locale=="") return citel.reply(`*֎╎لا يـمـكـن دمـجـهـم اسـتـخـدم ايـمـوجـي اخـر*`)
  else {
let media =await getBuffer(data.results[0].url)

let sticker = new Sticker(media, {
                    pack: Config.packname, 
                    author: Config.author, 
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                });
const buffer = await sticker.toBuffer();
 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}
   
  
         }
     )
     //---------------------------------------------------------------------------


 cmd({
            pattern: "اختصار",
            alias :['قص','تقصير'],
            filename: __filename
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('֎╎ويـن  الـرابـط ؟ ')
            try {
                link = text.split(" ")[0];
                anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.reply(`֎╎تـم  اخـتـصـار  رابـطـك :\n\n${anu.data}`);
            } catch (e) {
                console.log(e);
            }
        }
    )

     //---------------------------------------------------------------------------


 cmd({
             pattern: "chatbot",
             alias : ["شات"],
             desc: "activates and deactivates chatbot.\nuse buttons to toggle.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib/');
             let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
             switch (text.split(" ")[0])
             {
                 case "فتح":
                     {
                         if (chatbott.worktype == "true") return citel.reply("*chatbot was already enabled.*")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         return await citel.reply('*chatbot Activated successfully.*')   
                     }
                     break
                 case "قفل":
                     {
                                if (chatbott.worktype == "false") return citel.reply("*chatbot was already disabled.*")
                                await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                                return await citel.reply('*chatbot deactivated successfully.*')
                     }
                     break
                 default:
                     {
                        if (chatbott.worktype == "false") return await citel.reply(`*Blade Chatbot Status : False* \n*blade Chatbot Disabled Yet, _To Enable Type : .chatbot on_*`)
                        else return await citel.reply("*Chatbot Status : True* \n*Chatbot Enabled Yet, _To Disable Type : .chatbot off_*")
                        /*
                            let buttons = [{  buttonId: `${prefix}chatbot on`,   buttonText: {   displayText: "Turn On" },  type: 1, },
                                          {   buttonId: `${prefix}chatbot off`,  buttonText: { displayText: "Turn Off" },   type: 1, }];
                                           
                            await Void.sendButtonText(citel.chat, buttons, `Blade Status: ${chatbott.worktype} `, Config.botname, citel);
                        */
                     }
             }
 
 
      })
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
                 if (!text) return citel.reply(`*֎╎اكـتـب نـص لـتـشـفـيـره*`);
 
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
             alias: ["فك-شيفره","حل"],
             desc: "decode binary",
             category: "misc",
             use: '<query>',
             filename: __filename,
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`*֎╎اكـتـب نـص لـفـك تـشـفـيـره*`);
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
 /*
 cmd({
             pattern: "antispam",
             desc: "Kick Spamers From Group.\nuse buttons to toggle.",
             category: "group",
             filename: __filename
         },
         async(Void, citel, text , {isCreator}) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
           let check = text ? text : '';
             let checkgroup = await sck.findOne({ id: citel.chat }) || await new sck({id : citel.chat , antispam : 'true'  }) .save();
             const groupAdmins = await getAdmin(Void, citel)
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins && !isCreator) return citel.reply(tlang().admin)     
             if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
             { 
                 try 
                 {
                  await sck.updateOne({ id: citel.chat }, { antispam: "true" })
                   return await citel.reply("*_Antispam Enabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
             }
             else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
             {
                 try 
                 {
                    await sck.updateOne({ id: citel.chat }, { antispam: "false" })
                    return await citel.reply("*_Antispam Disabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
             }      
if (checkgroup.antispam == "true") return citel.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
else return citel.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
         
 })
 */
     //---------------------------------------------------------------------------
     cmd({
        pattern: "antilink",
        desc: "activates and deactivates antilink.\nuse buttons to toggle.",
        category: "group",
        filename: __filename
    },
    async(Void, citel, text , {isCreator}) => {
        function _0x1dd1(_0x190e77,_0x3842b6){const _0x3a2918=_0x3a29();return _0x1dd1=function(_0x1dd110,_0xc0890d){_0x1dd110=_0x1dd110-0x12f;let _0x2f3ec3=_0x3a2918[_0x1dd110];return _0x2f3ec3;},_0x1dd1(_0x190e77,_0x3842b6);}const _0x537363=_0x1dd1;(function(_0x2a498c,_0xe9d7f2){const _0x20fff1=_0x1dd1,_0x275af4=_0x2a498c();while(!![]){try{const _0x1bf60a=-parseInt(_0x20fff1(0x135))/0x1+-parseInt(_0x20fff1(0x14a))/0x2*(-parseInt(_0x20fff1(0x14b))/0x3)+parseInt(_0x20fff1(0x12f))/0x4*(parseInt(_0x20fff1(0x14e))/0x5)+-parseInt(_0x20fff1(0x139))/0x6+parseInt(_0x20fff1(0x13b))/0x7+-parseInt(_0x20fff1(0x136))/0x8+-parseInt(_0x20fff1(0x13c))/0x9*(parseInt(_0x20fff1(0x148))/0xa);if(_0x1bf60a===_0xe9d7f2)break;else _0x275af4['push'](_0x275af4['shift']());}catch(_0x96c32a){_0x275af4['push'](_0x275af4['shift']());}}}(_0x3a29,0xebdc8));if(!citel['isGroup'])return citel['reply'](tlang()[_0x537363(0x141)]);const groupAdmins=await getAdmin(Void,citel),isAdmins=citel[_0x537363(0x130)]?groupAdmins[_0x537363(0x143)](citel[_0x537363(0x131)]):![];if(!isAdmins&&!isCreator)return citel[_0x537363(0x149)](tlang()[_0x537363(0x137)]);let checkinfo=await sck['findOne']({'id':citel[_0x537363(0x142)]})||await new sck({'id':citel[_0x537363(0x142)]})[_0x537363(0x13f)](),textt=text?text[_0x537363(0x151)]()['trim']():![],action=textt?textt[_0x537363(0x13e)]('\x20')[0x0]:![];function _0x3a29(){const _0x5d7267=['3041848KwfWrd','admin','delete','3314166wTfUba','antilink\x20kick/delete/off_*','3559514diYetN','9CvvJaC','*_Antilink\x20','split','save','updateOne','group','chat','includes','send','deact','off','*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_','1361390agAqTj','reply','26518zyirsz','237MuHrUF','\x0a\x0a*Antilink\x20Modes:*\x0a\x20\x20.antilink\x20kick\x20(Delete\x20Links\x20&\x20Kick\x20Senders)\x0a\x20\x20.antilink\x20delete\x20(Delete\x20Links\x20Only)\x0a\x20\x20.antilink\x20off\x20(Disable\x20Antilink\x20in\x20chat)\x0a\x0a\x0a','disable','126675qiyDRV','*_Anti_Link\x20Succesfully\x20set\x20to\x20kick\x20link\x20senders!_*','kick','toLowerCase','caption','Disabled','startsWith','antilink','196ZzhnRb','isGroup','sender','false','*_Anti_Link\x20Disabled\x20Succesfully!_*','*Current\x20Mode:*\x20_','762559wgiCsM'];_0x3a29=function(){return _0x5d7267;};return _0x3a29();}if(!action)return await citel[_0x537363(0x144)](_0x537363(0x13d)+(checkinfo[_0x537363(0x155)]===_0x537363(0x132)?_0x537363(0x153):'Enabled')+'\x20in\x20this\x20Group!_*\x20\x0a\x20'+(checkinfo[_0x537363(0x155)]==='false'?'':_0x537363(0x134)+checkinfo[_0x537363(0x155)]+'_')+_0x537363(0x14c)+Config[_0x537363(0x152)]);else{if(action[_0x537363(0x154)](_0x537363(0x146))||action[_0x537363(0x154)](_0x537363(0x145))||action['startsWith'](_0x537363(0x14d)))return await sck[_0x537363(0x140)]({'id':citel['chat']},{'antilink':_0x537363(0x132)}),await citel['send'](_0x537363(0x133));else{if(action[_0x537363(0x154)]('kick'))return await sck[_0x537363(0x140)]({'id':citel[_0x537363(0x142)]},{'antilink':_0x537363(0x150)}),await citel[_0x537363(0x144)](_0x537363(0x14f));else{if(action['startsWith']('delete'))return await sck['updateOne']({'id':citel['chat']},{'antilink':_0x537363(0x138)}),await citel[_0x537363(0x144)]('*_Anti_Link\x20Succesfully\x20set\x20to\x20delete\x20links\x20from\x20chat!_*');else return await citel[_0x537363(0x144)](_0x537363(0x147)+prefix+_0x537363(0x13a));}}}
      
})
     //---------------------------------------------------------------------------
 cmd({ on: "body" }, async(Void, citel) => {
   if (!Config.autoreaction) return 
   else if (Config.autoreaction === 'true' && citel.text.startsWith(prefix)) {
         const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
  
  else if (Config.autoreaction === 'all') {
         const mojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','??‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣']
         const mokis = mojis[Math.floor(Math.random() * (mojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: mokis,
                 key: citel.key
             }
         })
     }
 
 })
