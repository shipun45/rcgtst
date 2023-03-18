const express = require("express");
const chatRouter = express.Router();
const Chat = require('../models/chat');


// for admin only
chatRouter.get("/chats/list", async function(req,res){
    var chats = await Chat.find();    
    res.json(chats);     
});


// chatRouter.post("/chats/list", async function(req,res){
//     var chats = await Chat.find();    
//     res.json(chats);     
// });


//for user only
chatRouter.post("/chats/list", async function(req,res){
    var chats = await Chat.find({ email: req.body.email});    
    res.json(chats);     
});



chatRouter.post("/chats/add", async function(req,res){
    
    const newChat = new Chat({
     
        email: req.body.email ,
        message: req.body.message ,
        adminMessage: req.body.adminMessage ,
       


    });   
  await  newChat.save();
  const response = { message: "New chat created"}
    res.json(response);     
});

module.exports = chatRouter;