
var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {
    
    db.burger.findAll({
        include: [db.customer.name]
    }).then(burger => {

        db.customer.findAll({}).then((customer) => {
            res.render("index", { customerObj: customer, burgerObj: burger });
            
        })
    }).catch((err) => {
        if (err) throw err
    });
    
});
router.get("/burgers/customer", function (req, res) {
    db.burger.findAll({
        include: [db.customer]
    }).then(burger => {
        res.json(burger)
    })
});
router.get("/burgers", function (req, res) {
    db.burger.findAll({}).then((result) => {
        res.json(result);
    }).catch((err) => {
        if (err) throw err
    });
});
router.post("/burgers", function (req, res) {
    db.burger.create({ burger_name: req.body.burgers })
        .then((data) => {
            res.redirect('/');
            res.json(data);
        }).catch((err) => {
            throw err;
        })
    
});
router.get("/customers", function (rea, res) {
    db.customer.findAll({}).then((result) => {
        res.json(result);
    }).catch((err) => {
        if (err) throw err
    });
})
router.post("/customers", function (req, res) {
    db.customer.create({ name: req.body.customers })
        .then((data) => {
            res.redirect('/');
            res.json(data);
        }).catch((err) => {
            throw err;
        })
    
})
router.put("/burgers/:burgerId/:customersId", function (req, res) {

console.log(req.params.customersId)

    db.burger.update({ devoured: true, customerId: req.params.customersId },
        { where: { id: req.params.burgerId } }).then((result) => {
            console.log(result)
        }).catch((err) => {
            if (err) throw err
        });

    });
module.exports = router;