let router = require("express").Router()
let Job = require("../models/Jobs")

router.get("/:id?", (req, res, next) => {
    if(!req.params.id){
        Job.find({})
            .then(jobs => {
                res.send(jobs)
            })
    }
    else {
        Job.findById(req.params.id)
            .then(job => {
                res.send(job)
            })
    }
})
router.post("/", (req, res, next) => {
    Job.create(req.body)
        .then(newJob => {
            res.send(newJob)
        })
})
router.put("/:id", (req, res, next) => {
    Job.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(updatedJob => {
            res.send(updatedJob)
        })
})
router.delete("/:id", (req, res, next) => {
    Job.findByIdAndDelete(req.params.id)
        .then(res.send(console.log("Job posting removed")))
})

module.exports = router