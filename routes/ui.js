const express = require("express");
const uiRouter = express.Router();
const Ui = require('../models/ui');


uiRouter.get("/ui", async function (req, res) {
    var ui = await Ui.find();
    res.json(ui);
});



uiRouter.post("/ui", async function (req, res) {
    await Ui.deleteOne({ id: req.body.id });
    const newUi = new Ui({

        isready: req.body.isready,

    });
    await newUi.save();
    const response = { message: " ui created" }
    res.json(response);
});


module.exports = uiRouter;