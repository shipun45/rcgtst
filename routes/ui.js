const express = require("express");
const uiRouter = express.Router();
const Ui = require('../models/ui');

///Change it to true to show recharge option remotely from server
uiRouter.get("/ui", async function (req, res) {
    var ui = await Ui.find();
    res.status(200).json({"status": true, "data": true,"isReady": "no"});
});



uiRouter.post("/ui", async function (req, res) {
    await Ui.deleteOne({ id: req.body.id });
    const newUi = new Ui({

        isready: req.body.isready,

    });
    await newUi.save();
    const response = {  message: " ui created" }
    res.status(200).json({"status": true,"data": true});
});


module.exports = uiRouter;