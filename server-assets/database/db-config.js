let mongoose = require("mongoose")
let connectionStr = "mongodb://pGregsList:Soc34cer@ds229312.mlab.com:29312/porters-gregslist"
let connection = mongoose.connection

mongoose.connect(connectionStr, {
    useNewUrlParser: true
})

connection.on("error", err => {
    console.log("database error:", err)
})

connection.once("open", () => {
    console.log("connected to database")
})