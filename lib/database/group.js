const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
welcome:{ type: String, default: "@صوره *Hi,* @منشن \n*Welcome in* @اسم \n*Member count* : @اعضاء th" },
goodbye:{ type: String, default: "@صوره *Another one bits dust.*\nUser: @منشن" },
botenable: { type: String, default: "true" },
antilink: { type: String, default: "true" },
economy: { type: String, default: "false" },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }
