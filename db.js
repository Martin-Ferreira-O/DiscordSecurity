const mongoose = require("mongoose");

mongoose.connect(process.env.URLMONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database conectada")
});