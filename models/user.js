const mongoose = require("mongoose");
const { productSchema } = require("./product");
const { planSchema } = require("./plan");

const userSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
    trim: true,
  },
  email: {
    required: true,
    type: String,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(0|91)?[6-9][0-9]{9}$/;
        return value.match(re);
      },
      message: "Please enter a valid phone number",
    },
  },
  password: {
    required: true,
    type: String,
  },
  address: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "user",
  },
  transaction: [
    {

      totalPrice: String,
      status: String,
      category: String,
      data: String,
      mobilenumber: Number,
    },
  ],
  cart: [
    {
      product: productSchema,
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
