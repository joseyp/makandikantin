const express = require('express');
const Canteen = require('../models/canteen');
const router  = express.Router();
const upload  = require('../middleware/upload');
const request = require('request');

router.get("/canteen", (req, res) => {
    Canteen.findAll().then(canteen => {
        res.json({data: canteen});
    });
});

router.get("/canteen/:canteen_id", (req, res) => {
    Canteen.findOne({
        where: {
            canteen_id: req.params.canteen_id
        }
    }).then(canteen => {
        if (!canteen) {
            return res.json({"s": 0,"msg": "canteen not found"});
        }
        res.json({data: canteen});
    });
});

router.post("/canteen", upload.single('canteen_img'), (req, res) => {
    // res.send(req.body);
    Canteen.create({
        canteen_name: req.body.canteen_name,
        canteen_img: req.file === undefined ? "" : req.file.filename
    }).then(canteen => {
        res.json({
            "data": canteen
        });
    });
});

router.put("/canteen/:canteen_id", upload.single('canteen_img'), (req, res) => {
    const x = {
        canteen_name: req.body.canteen_name,
        canteen_img: req.file === undefined ? "" : req.file.filename
    };
    // res.send(x);
    request(req.protocol+"://"+req.headers.host+"/canteen/"+req.params.canteen_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        if (body.data == undefined) {
            res.json({"msg": "canteen not found"});
        } else {
            let fs = require('fs');
            let path = require('path');
            let appDir = path.dirname(require.main.filename);
            fs.unlink(appDir + "\\public\\assets\\images\\canteen\\" + body.data.canteen_img, function(err) {
                Canteen.update(x, {
                    where : {
                        canteen_id: req.params.canteen_id
                    }
                }).then(canteen => {
                    res.json({
                        "data": canteen
                    });
                });
            });
        }
    });
});

router.delete("/canteen/:canteen_id", (req, res) => {
    request(req.protocol+"://"+req.headers.host+"/canteen/"+req.params.canteen_id, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        if (body.data == undefined) {
            res.json({"msg": "canteen not found"});
        } else {
            let fs = require('fs');
            let path = require('path');
            let appDir = path.dirname(require.main.filename);
            fs.unlink(appDir + "\\public\\assets\\images\\canteen\\" + body.data.canteen_img, function(err) {
                Canteen.destroy({
                    where: {
                        canteen_id: req.params.canteen_id
                    }
                }).then(canteen => {
                    res.json({
                        "msg": "deleted"
                    })
                });
            });
        }
    });
});

module.exports = router;