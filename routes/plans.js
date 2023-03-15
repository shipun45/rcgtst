const express = require("express");
const planRouter = express.Router();
const auth = require("../middlewares/auth");
const PlansOrder = require("../models/plansorder");
const { Plans } = require("../models/plan");
const User = require("../models/user");

// order product
planRouter.post("/api/planorder", auth, async (req, res) => {
  try {
    const { id, price, number } = req.body;
    const transactionPlan = await Plans.findById(id);
    let user = await User.findById(req.user);

    if (user.transaction.length == 0) {
      user.transaction.push({ transactionPlan });
    }
    user = await user.save();

    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
module.exports = planRouter;
