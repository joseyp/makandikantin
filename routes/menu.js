const express = require('express');
const Menu = require('../models/menu');
const router  = express.Router();
const upload  = require('../middleware/upload_menu');
const request = require('request');

router.get("/menu", (req, res) => {
    Menu.findAll().then(menu => {
        res.json(menu);
    });
});

router.get("/menu/:menu_id", (req, res) => {
    Menu.findOne({
        where: { menu_id : req.params.menu_id }
    }).then(menu => {
        if (!menu) {
            return res.json({"msg": "menu not found"});
        }
        res.json({data: menu});
    });
});

router.get("/menu/getBySeller/:seller_id", (req, res) => {
    Menu.findAll({
        where: {
            seller_id: req.params.seller_id
        }
    }).then(menu => {
        if (!menu[0]) {
            return res.json({"msg": "menu not found"});
        }
        res.json(menu);
    });
});

router.post("/menu", upload.single('menu_img'), (req, res) => {
    const x = {
        menu_name: req.body.menu_name,
        menu_price: req.body.menu_price,
        menu_img: req.file === undefined ? "" : req.file.filename,
        seller_id: req.body.seller_id,
    };
    Menu.create(x).then(menu => {
        res.json({
            "data": menu
        });
    });
});

router.delete("/menu/:menu_id", (req, res) => {
    request(req.protocol+"://"+req.headers.host+"/menu/"+req.params.menu_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        if (body.data == undefined) {
            res.json({"msg": "menu not found"});
        } else {
            let fs = require('fs');
            let path = require('path');
            let appDir = path.dirname(require.main.filename);
            fs.unlink(appDir + "\\public\\assets\\images\\menu\\" + body.data.menu_img, function(err) {
                Menu.destroy({
                    where: {
                        menu_id: req.params.menu_id
                    }
                }).then(menu => {
                    res.json({
                        "msg": "deleted"
                    })
                });
            });
        }
    });
});

router.put("/menu/:menu_id", upload.single('menu_img'), (req, res) => {
    // res.send(x);
    request(req.protocol+"://"+req.headers.host+"/menu/"+req.params.menu_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); } 
        if (body.data == undefined) {
            res.json({"msg": "menu not found"});
        } else {
            const x = {
                menu_name: req.body.menu_name,
                menu_price: req.body.menu_price,
                menu_img: req.file === undefined ? "" : req.file.filename,
                seller_id: req.body.seller_id,
            };
            let fs = require('fs');
            let path = require('path');
            let appDir = path.dirname(require.main.filename);
            fs.unlink(appDir + "\\public\\assets\\images\\menu\\" + body.data.menu_img, function(err) {
                Menu.update(x, {
                    where : {
                        menu_id: req.params.menu_id
                    },
                    returning: true,
                    plain: true
                }).then(menu => {
                    res.json({"id": req.params.menu_id});
                });
            });
        }
    });
});

module.exports = router