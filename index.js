let express = require("express")
let bodyParser = require("body-parser")
let server = express()
let port = 3000
let cors = require("cors")

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))

require("./server-assets/database/db-config")

let houseRoutes = require("./server-assets/routes/house-routes")
let jobRoutes = require("./server-assets/routes/jobs-routes")
server.use("/api/house", houseRoutes)
server.use("/api/jobs", jobRoutes)

server.use("*", (req, res, next) => {
    res.send("No Matching Path")
})

server.listen(port, () => {
    console.log("Running on:", port)
})