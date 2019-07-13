const express = require('express');
const Customer = require('../models/customer');
const router  = express.Router();
const request = require('request');

router.get("/customer", (req, res) => {
    Customer.findAll().then(customer => {
        res.json({data: customer});
    });
});

router.get("/customer/:customer_id", (req, res) => {
    Customer.findOne({
        where: {
            customer_id: req.params.customer_id
        }
    }).then(customer => {
        if (!customer) {
            return res.json({"msg": "customer not found"});
        }
        res.json({data: customer});
    });
});

router.post("/customer", (req, res) => {
    // res.send(req.body);
    const crypto = require('crypto')
    let hash = crypto.createHash('md5').update(req.body.customer_password).digest("hex")
    const x = {
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_password: hash,
        customer_passwordnomd5: req.body.customer_password,
    };
    Customer.create(x).then(customer => {
        res.json({
            "data": customer
        });
    });
});

router.put("/customer/:customer_id", (req, res) => {
    const crypto = require('crypto')
    let hash = crypto.createHash('md5').update(req.body.customer_password).digest("hex");
    const x = {
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_password: hash,
        customer_passwordnomd5: req.body.customer_password,
    };
    // res.send(x);
    request(req.protocol+"://"+req.headers.host+"/customer/"+req.params.customer_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); } 
        if (body.data == undefined) {
            res.json({"msg": "customer not found"});
        } else {
            Customer.update(x, {
                where : {
                    customer_id: req.params.customer_id
                },
                returning: true,
                plain: true
            }).then(customer => {
                res.json({"id": req.params.customer_id});
            });
        }
    });
});

router.delete("/customer/:customer_id", (req, res) => {
    request(req.protocol+"://"+req.headers.host+"/customer/"+req.params.customer_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        if (body.data == undefined) {
            res.json({"msg": "customer not found"});
        } else {
            Customer.destroy({
                where: {
                    customer_id: req.params.customer_id
                }
            }).then(customer => {
                res.json({
                    "msg": "deleted"
                })
            });
        }
    });
});

module.exports = router;