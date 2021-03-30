const mongoose = require("mongoose");

mongoose.connect(process.env.URLMONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database conectada")
});


/*

mongoose.connect("mongodb+srv://root:Jzng5wqvi3yVkyjU@cluster0.rqhiv.mongodb.net/database?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
console.log("✔ Conectado a MongoDB")
})

*/