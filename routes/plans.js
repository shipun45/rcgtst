const express = require("express");
const planRouter = express.Router();
const auth = require("../middlewares/auth");
const PlansOrder = require("../models/plansorder");
const { Plans } = require("../models/plan");
const User = require("../models/user");

planRouter.get("/api/plan/",  async (req, res) => {
  try {
    const plans = await Plans.find({ category: req.query.category });
    res.json(plans);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// order product
planRouter.post("/api/planorder", auth, async (req, res) => {
  try {
    const { transactionPlan, price, mobilenumber } = req.body;
    // const transactionPlans = await Plans.findById(id);
    let user = await User.findById(req.user);

  
      user.transaction.push( req.body)
      // user.transaction.push({ transactionPlan, mobilenumber });
    
    user = await user.save();

    res.json(req.body);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = planRouter;
