const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

//Middleware
app.use(express.json());

//Route
app.use("/department/notice", userRouter);

//export app
module.exports = app;
