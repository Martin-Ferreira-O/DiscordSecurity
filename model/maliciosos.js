import mongoose from 'mongoose';

const malicioso = new mongoose.Schema({
    usuarios: Array
});
export default mongoose.model('Malicioso', malicioso)