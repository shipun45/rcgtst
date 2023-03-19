const mongoose = require('mongoose');
const uiSchema = mongoose.Schema({
   
    id:{
        type: Number,
        default: 99,
    },
    isready:{
        type: String,
        default: "no",
    },
 
});
module.exports = mongoose.model("Is ready", uiSchema);
