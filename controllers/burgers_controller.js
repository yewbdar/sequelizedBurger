var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();
router.get("/", function (req, res) {
    burger.selectAll(function (err, data) {
        res.render("index", { burger: data })

    });
    router.get("/burgers", function (req, res) {
        burger.selectAll(function (err, data) {

            res.json(data);
        });
    });
    router.post("/burgers", function (req, res) {
        burger.insertOne(req.body.burgers)
        console.log(req.body.burgers);
        res.redirect('/');
    });

    router.put("/burgers/:id", function (req, res) {
        burger.updateOne(req.params.id)
    });

});
module.exports = router;