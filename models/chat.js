const mongoose = require('mongoose');
const chatSchema = mongoose.Schema({
   

    email:{
        type: String,
    },
    message:{
        type: String,
    },
    adminMessage:{
        type: String,
    },
    dateAdded:{
        type: Date,
        default:Date.now,
    },

    update:{
        type:Boolean,
        default: false,
    },
});
module.exports = mongoose.model("Chat", chatSchema);
