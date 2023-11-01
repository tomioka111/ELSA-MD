
const axios = require('axios')
const { sck1, tiny, fancytext, listall,cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')

    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
    //---------------------------------------------------------------------------
cmd({
            pattern: "كتابة",
            filename: __filename
        },
        async(Void, citel, text) => {
            if (isNaN(text.split(" ")[0]) || !text) {
                let text = tiny(
                    "֎╎اكـتـب  رقـم  مـن  1 ل 52 و بـعـدهـا نـصـك\n\n- مـثـال : .كتابة 32 jeje"
                );
                return await citel.reply(text);
            }

            let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0])
            citel.reply(fancytextt)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "jggfxdte8t",
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

