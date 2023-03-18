const mongoose = require('mongoose');
const uiSchema = mongoose.Schema({
   
    id:{
        type: Number,
        default: 99,
    },
    isready:{
        type: Number,
        default: 0,
    },
 
});
module.exports = mongoose.model("Is ready", uiSchema);
