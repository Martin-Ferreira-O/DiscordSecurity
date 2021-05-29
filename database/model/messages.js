import mongoose from 'mongoose';

const messages = new mongoose.Schema({
    guild: String,
    channel: String,
    messages: Array
});

export default mongoose.model('messages', messages);