const express = require('express');
const Seller = require('../models/seller');
const router  = express.Router();
const upload  = require('../middleware/upload_seller');
const request = require('request');

router.get("/seller", (req, res) => {
    Seller.findAll().then(seller => {
        res.json(seller);
    });
});

router.get("/seller/:seller_id", (req, res) => {
    Seller.findOne({
        where: {
            seller_id: req.params.seller_id
        }
    }).then(seller => {
        if (!seller) {
            return res.json({"msg": "seller not found"});
        }
        res.json({data: seller});
    });
});

router.post("/seller", upload.single('seller_img'), (req, res) => {
    const crypto = require('crypto');
    let hash = crypto.createHash('md5').update(req.body.seller_password).digest("hex");
    const x = {
        seller_name: req.body.seller_name,
        seller_password: hash,
        seller_passwordnomd5: req.body.seller_password,
        seller_img: req.file === undefined ? "" : req.file.filename,
        canteen_id: req.body.canteen_id,
    };
    Seller.create(x).then(seller => {
        res.json({
            "data": seller
        });
    });
});

router.get("/seller/getByCanteen/:canteen_id", (req, res) => {
    Seller.findAll({
        where: {
            canteen_id: req.params.canteen_id
        }
    }).then(seller => {
        if (!seller[0]) {
            return res.json({"msg": "seller not found"});
        }
        res.json(seller);
    });
});

router.delete("/seller/:seller_id", (req, res) => {
    request(req.protocol+"://"+req.headers.host+"/seller/"+req.params.seller_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        if (body.data == undefined) {
            res.json({"msg": "seller not found"});
        } else {
            let fs = require('fs');
            let path = require('path');
            let appDir = path.dirname(require.main.filename);
            fs.unlink(appDir + "\\public\\assets\\images\\seller\\" + body.data.seller_img, function(err) {
                Seller.destroy({
                    where: {
                        seller_id: req.params.seller_id
                    }
                }).then(seller => {
                    res.json({
                        "msg": "deleted"
                    })
                });
            });
        }
    });
});

router.put("/seller/:seller_id", upload.single('seller_img'), (req, res) => {
    // res.send(x);
    request(req.protocol+"://"+req.headers.host+"/seller/"+req.params.seller_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); } 
        if (body.data == undefined) {
            res.json({"msg": "seller not found"});
        } else {
            // console.log(req.body);
            const crypto = require('crypto');
            let hash = crypto.createHash('md5').update(req.body.seller_password).digest("hex");
            const x = {
                seller_name: req.body.seller_name,
                seller_password: hash,
                seller_passwordnomd5: req.body.seller_password,
                seller_img: req.file === undefined ? "" : req.file.filename,
                canteen_id: req.body.canteen_id,
            };
            let fs = require('fs');
            let path = require('path');
            let appDir = path.dirname(require.main.filename);
            fs.unlink(appDir + "\\public\\assets\\images\\seller\\" + body.data.seller_img, function(err) {
                Seller.update(x, {
                    where : {
                        seller_id: req.params.seller_id
                    },
                    returning: true,
                    plain: true
                }).then(seller => {
                    res.json({"id": req.params.seller_id});
                });
            });
        }
    });
});

module.exports = router;