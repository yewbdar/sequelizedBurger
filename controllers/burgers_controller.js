
var express = require("express");
var db = require("../models");
// var customer=require("../models/customer")
//    db.burger.sequelize.sync();
//  db.customer.sequelize.sync();
var router = express.Router();

router.get("/", function (req, res) {
    db.burger.findAll({}).then((result) => {
        res.render("index", { burger: result })
    }).catch((err) => {
        if (err) throw err
    });
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
    console.log(req.body.burgers);
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
    console.log(req.body.burgers);
})
router.put("/burgers/:id/:customerName", function (req, res) {
    
    db.customer.findAll({}, { where: { name: req.params.customerName } }).
        then((result) => {
           
            if (result.length > 0) {

                db.burger.update({ devoured : true , customerId : result[0].id },
                    { where: { id : req.params.id } }).then((result) =>{
                            console.log(result)
                    }).catch((err)=>{
                        if (err) throw err
                    })
        }
        else{
            console.log("Customer not found !");
        }
            res.json(result);
            
        }).catch((err) => {
            if (err) throw err
        });
});
module.exports = router;