// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
require('dotenv').config()
const DB = process.env.MG_DB;
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const planRouter = require("./routes/plans");
const chatRouter = require("./routes/chatnotes");
const uiRouter = require("./routes/ui");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');



const server = app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});

const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log("Connection successfull", socket.id);
  socket.on('disconnect', () => {
    console.log("Connection discontinued", socket.id);
  });

  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('message-receive', data);
  });
});




mongoose.set('strictQuery', false);
// Connections
mongoose
  .connect(DB)
  .then(() => {

    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });


// middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);
app.use(planRouter);
app.use(chatRouter);
app.use(uiRouter);


