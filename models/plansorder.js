const mongoose = require("mongoose");
const { planSchema } = require("./plan");

const transactionSchema = mongoose.Schema({
  plan: [
    {
        transaction : planSchema,
     
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  userId: {
    required: true,
    type: String,
  },
  orderedAt: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

const PlansOrder = mongoose.model("Transaction", transactionSchema);
module.exports = PlansOrder;
