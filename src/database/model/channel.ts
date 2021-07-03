import mongoose from 'mongoose';

const channel = new mongoose.Schema({
    guildId: String,
    channel: Array
});

export default mongoose.model('Channels', channel);