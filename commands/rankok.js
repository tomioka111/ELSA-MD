const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const moment = require("moment-timezone");
const fs = require('fs-extra')
const Levels = require("discord-xp");
const canvacord = require("canvacord");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
//---------------------------------------------------------------------------
cmd({
   pattern: "سوكونا",
},
async(Void, citel, text) => {
   let disc = citel.sender.substring(3, 7);
   var role = 'Sukuna'
   let textr = '';
   textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

   ֎╎عــدد رســائــل الأســاســي

   ① ـ ⊑  ⊒
   
   ֎╎عــدد رســائــل الإعــلانــات
   
   ① ـ ⊑  ⊒
   
   ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
   
   ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;

   try {
       ppuser = 'https://i.imgur.com/Cx3JKmO.jpg';
   } catch {
       ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
   }

       const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
       const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
       const imageLinks = [
           "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
           "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
         ];
         const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
         
const rank = new canvacord.Rank()
       .setAvatar(ppuser)
       .setLevel(10, false)
       .setLevelColor(randomHex, randomHex)
       .setCurrentXP(2)
       .setStatus("online")
       .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
       .setOverlay(randomHex, 100, false)
       .setRequiredXP(10)
       .setProgressBar(randomHexs, "COLOR")
       .setBackground("IMAGE", randomImageLink)
       .setRank(0, role, false)
       .setUsername("Sukuna")
       .setDiscriminator(disc);
   rank.build()
       .then(async(data) => {
           Void.sendMessage(citel.chat, {
               image: data,
               caption: textr,
           }, {
               quoted: citel,
           });
       });
   }
)


cmd({
    pattern: "اني",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Annie'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/NAjivGP.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(5)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Annie")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )


 cmd({
    pattern: "كيرا",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Kira'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/XI6IaHa.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(0)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Kira")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )


 cmd({
    pattern: "كلوديا",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Claudia'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/Eut4yF5.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(6)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Claudia")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )


 cmd({
    pattern: "فيفي",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Fefe'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/MHgViwo.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(5)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Fefe")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )


 cmd({
    pattern: "نينا",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Nina'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/hmQoUBI.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(5)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Nina")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )


 cmd({
    pattern: "هيلا",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Hila'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/7bovLRL.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(6)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Hila")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )


 cmd({
    pattern: "اليسا",
 },
 async(Void, citel, text) => {
    let disc = citel.sender.substring(3, 7);
    var role = 'Elissa'
    let textr = '';
    textr += `⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹

    ֎╎عــدد رســائــل الأســاســي
 
    ① ـ ⊑  ⊒
    
    ֎╎عــدد رســائــل الإعــلانــات
    
    ① ـ ⊑  ⊒
    
    ֎╎إتــمــام الــمــهــام عــلــى الــتــوالــي
    
    ① ـ ⊑  ⊒

◈ المستويات هي عبارة عن مهام يجب عليكِ إتمامها كلها لكي نرقيكِ كمشرفة أساسية.

⊹⊱≼━━━⌬〔💠〕⌬━━━≽⊰⊹`;
 
    try {
        ppuser = 'https://i.imgur.com/H1Lzrav.jpg';
    } catch {
        ppuser = 'https://i.imgur.io/Qxh96zE_d.webp?maxwidth=640&shape=thumb&fidelity=medium';
    }
 
        const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
        const imageLinks = [
            "https://i.imgur.io/meA2g0G_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/OAh9JA0_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/MxPFtQK_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/qDTuusA_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/50Z9vyY_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Js5330u_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/sY03jdM_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/duaXpHu_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
            "https://i.imgur.io/Eo6cIRI_d.webp?maxwidth=640&shape=thumb&fidelity=medium",
          ];
          const randomImageLink = imageLinks[Math.floor(Math.random() * imageLinks.length)];
          
 const rank = new canvacord.Rank()
        .setAvatar(ppuser)
        .setLevel(10, false)
        .setLevelColor(randomHex, randomHex)
        .setCurrentXP(5)
        .setStatus("online")
        .setBackground("IMAGE", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ2FaU2C-dSC-6OlY14wM_7hWajwD3x41cA&usqp=CAU")
        .setOverlay(randomHex, 100, false)
        .setRequiredXP(10)
        .setProgressBar(randomHexs, "COLOR")
        .setBackground("IMAGE", randomImageLink)
        .setRank(0, role, false)
        .setUsername("Elissa")
        .setDiscriminator(disc);
    rank.build()
        .then(async(data) => {
            Void.sendMessage(citel.chat, {
                image: data,
                caption: textr,
            }, {
                quoted: citel,
            });
        });
    }
 )
