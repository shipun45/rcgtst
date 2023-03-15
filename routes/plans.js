const express = require("express");
const planRouter = express.Router();
const auth = require("../middlewares/auth");
const PlansOrder = require("../models/plansorder");
const { Plans } = require("../models/plan");
const User = require("../models/user");

// order product
planRouter.post("/api/planorder", auth, async (req, res) => {
    try {
      const { _id, price, number } = req.body;
    const  data = req.body;
      let plans = [];
  
    //   for (let i = 0; i < cart.length; i++) {
    //     let product = await Product.findById(cart[i].product._id);
    //     if (product.quantity >= cart[i].quantity) {
    //       product.quantity -= cart[i].quantity;
    //       products.push({ product, quantity: cart[i].quantity });
    //       await product.save();
    //     } else {
    //       return res
    //         .status(400)
    //         .json({ msg: `${product.name} is out of stock!` });
    //     }
    //   }
  
      let user = await User.findById(req.user);
      user.transaction = [];
      user = await user.save();
  
    //   let order = new Order({
    //     plans,
    //     price,
    //     number,
    //     userId: req.user,
    //     orderedAt: new Date().getTime(),
    //   });
      plans = await data.save();
      res.json(plans);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  module.exports = planRouter;
