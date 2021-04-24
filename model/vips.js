import mongoose from "mongoose";

const vip = new mongoose.Schema({
    guildId: String,
    time: Date,
    buyer: String,
    licence: String
})
export default mongoose.model('Vips', vip)