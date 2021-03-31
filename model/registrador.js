import mongoose from "mongoose";

const registrador = new mongoose.Schema({
    guildId: String,
    channel: String,
    users: Array,
    extrem: Boolean,
    autoban: Boolean
})
export default mongoose.model('Registrador', registrador)