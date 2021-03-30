import { Schema, model } from 'mongoose'


const langs = new Schema({
    guildId: String,
    lang: String
})


export default model('Langs', langs);