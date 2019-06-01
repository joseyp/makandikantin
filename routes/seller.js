const express = require('express');
const Seller = require('../models/seller');
const router  = express.Router();
// const upload  = require('../middleware/upload');

router.get("/seller", (req, res) => {
    Seller.findAll().then(seller => {
        res.json(seller);
    });
});

router.get("/seller/getByCanteen/:canteen_id", (req, res) => {
    Seller.findAll({
        where: {
            canteen_id: req.params.canteen_id
        }
    }).then(seller => {
        if (!seller) {
            return res.json({"st": 0,"msg": "seller not found"});
        }
        res.json(seller);
    });
});

module.exports = router;