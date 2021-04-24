import mongoose from "mongoose";

const registrador = new mongoose.Schema({
    guildId: String,
    time: Date,
    buyer: String,
    licence: String
})
export default mongoose.model('Registrador', registrador)