const {fetchJson,cmd, tlang,sleep } = require('../lib')

//---------------------------------------------------------------------------

cmd({

            pattern: "تهكير",

            category: "prank",

            desc: "hacking prank",

            use: ' ',

            filename: __filename,

        },

        async(Void,citel, text) => {

citel.reply("*جاري الاختراق*")

await sleep(1000)

citel.reply("*جاري تحميل الاختراق \n 0%*")

await sleep(1000)

citel.reply("*جاري تحميل الصور \n █ 10%*")

await sleep(1000)

citel.reply("*تم تحميل الصور \n █ █ 20%*")

await sleep(1000)

citel.reply("*جاري تحميل الفيديوهات \n █ █ █ 30%*")

await sleep(1000)

citel.reply("*تم تحميل الفيديوهات \n █ █ █ █ 40%*")

await sleep(1000)

citel.reply("*جاري تحميل الاصوات \n █ █ █ █ █ 50%*")

await sleep(1000)

citel.reply("*تم تحميل الاصوات \n █ █ █ █ █ █ 60%*")

await sleep(1000)

citel.reply("*جاري تحميل الملفات \n █ █ █ █ █ █ █ 70%*")

await sleep(1000)

citel.reply("*تم تحميل الملفات \n █ █ █ █ █ █ █ █ 80%*")

await sleep(1000)

citel.reply("*جاري تحميل محادثات الواتساب \n █ █ █ █ █ █ █ █ █ 90%*")

await sleep(1000)

citel.reply("*جاري تحميل محادثات الواتساب \n █ █ █ █ █ █ █ █ █ █ 100%*")

await sleep(1000)

citel.reply("*يتم تحميل الاختراق.. \n جاري رفع الاختراق علي السيرفر*")

await sleep(1000)

citel.reply("*تم الاتصال بجهاز الضحيه... \n يتم تحميل البيانات...*")

await sleep(1000)

citel.reply("*اختراق الضحيه 100% اكتمل \n جاري جمع جميع الادله...*")

await sleep(1000)

citel.reply("*اكتمل الاختراق*")

await sleep(1000)

citel.reply("*جاري حفظ بيانات الضحيه...*")

await sleep(1000)

citel.reply("*تم حفظ بيانات الضحيه بنجاح*")

await sleep(1000)

            return citel.reply('*🝳︙ تـم اخـتراق الضحـية 🆘 بواسطه : {الههكر الجمد} . بـدون تنـازل قم بدفع مبلغ والا سيقوم بنشر صورك*');

        }

    )
