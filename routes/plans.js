const express = require("express");
const planRouter = express.Router();
const auth = require("../middlewares/auth");
const PlansOrder = require("../models/plansorder");
const { Plans } = require("../models/plan");
const User = require("../models/user");

// order product
planRouter.post("/api/planorder", auth, async (req, res) => {
    try {
    //   const { _id, price, number } = req.body;
    const  data = req.body;
      let plans = [];
  
  
      let user = await User.findById(req.user);
      user.transaction = [];
      user = await user.save();
  
   
    //   plans = await data.save();
      res.json(user);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  module.exports = planRouter;
