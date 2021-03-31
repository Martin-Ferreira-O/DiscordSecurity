import mongoose from "mongoose";
export default async function() {
    await mongoose.connect(process.env.URLMONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to the database");
    return true;
}