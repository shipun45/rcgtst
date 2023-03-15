const mongoose = require("mongoose");


const planSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  discount: {
    type: String,
    required: true,
    trim: true,
  },
  offer: {
    type: Number,
    required: true,
   
  },
  validity: {
    type: String,
    required: true,
    trim: true,
  },
  benifits: {
    type: String,
    required: true,
    trim: true,
  },
 
  data: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  
});

const Plans = mongoose.model("Plans", planSchema);
module.exports = { Plans, planSchema };
