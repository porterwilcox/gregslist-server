let router = require("express").Router()
let House = require("../models/House")

router.get("/:id?", (req, res, next) => {
    if (!req.params.id) {
        House.find({})
            .then(houses => {
                res.send(houses)
            })
    }
    else{
    House.findById(req.params.id)
        .then(house => {
            res.send(house)
        })
    }
})
router.post("/", (req, res, next) => {
    House.create(req.body)
        .then(house => {
            res.send(house)
        })
        .catch(err => {
            res.status(400).send(err)
        })
})
router.put("/:id", (req, res, next) => {
    House.findByIdAndUpdate(req.params.id, req.body, { new: true})
        .then(updatedHouse => {
            res.send(updatedHouse)
        })
})
router.delete("/:id", (req, res, next) => {
    House.findByIdAndDelete(req.params.id)
        .then(res.send(console.log("You bought your House!")))
})

module.exports = router