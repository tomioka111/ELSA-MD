const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "❃━═━═✦•〘❄️〙•✦═━═━❃
*♥︎•⇓﷽ رســـالة ترحـــيب⇓•♥︎*

*~ يـــا أهـــلا وســـهلا بك في نقابة  يــشــرفـــنـا بـــمـن هـو ممـــيز ، تقبلـــ/ـي تحـــياتـــنا وتقـــديرنـا ومرحـــبا بڪ ضمـــن عائلـــتنا المتــواضـــعــہ♥︎*
*~ نتـــمنى مشـــارڪـــتڪ °وتفـــاعـــلڪ وابداعـــڪ༺.*
❃━═━═✦•〘❄️〙•✦═━═━❃
*⊢❉ المـــنـشـن╎❯〖@منشن〗*
*⊢❉ نقـــابة╎❯〖@اسم〗*
❃━═━═✦•〘❄️〙•✦═━═━❃
*⊢❉ الـــوصف╎❯*
*@وصف*
@صوره" },
goodbye:{ type: String, default: "❃━═━═✦•〘❄️〙•✦═━═━❃
*♥︎•⇓﷽ رســـالة مـغـادره⇓•♥︎*

❃━═━═✦•〘❄️〙•✦═━═━❃
*⊢❉ المـــنـشـن╎❯〖@منشن〗*
*⊢❉ نقـــابة╎❯〖@اسم〗*

*~نـتـمني ان تـكـون اسـتـمـتعت مـعـنـا في نقابتنا المتــواضـــعــہ♥*
❃━═━═✦•〘❄️〙•✦═━═━❃
@صوره" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "true" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
