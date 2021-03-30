import { Schema, model } from "mongoose";

const registrador = new Schema({
    guildId: String,
    channel: String,
    users: Array,
    extrem: Boolean,
    autoban: Boolean
})
export default model('Registrador', registrador)