import mongoose from 'mongoose'


const langs = new mongoose.Schema({
    guildId: String,
    lang: String
})


export default mongoose.model('Langs', langs);