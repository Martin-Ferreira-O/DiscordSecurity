import mongoose from 'mongoose';

const channel = new mongoose.Schema({
    guildId: String,
    channel: String
})


export default mongoose.model('Channels', channel);