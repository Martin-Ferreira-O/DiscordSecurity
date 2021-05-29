import mongoose from "mongoose";
export default async function() {
    await mongoose.connect(process.env.URLMONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("✔ Conectado correctamente a la base de datos");
    return true;
}