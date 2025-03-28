const express = require('express');
const morgan = require('morgan');
// const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use("/api/auth", authRoutes);

module.exports = app;
