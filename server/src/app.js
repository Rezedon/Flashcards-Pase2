const express = require('express');
const morgan = require('morgan');
const indexRoutes = require('./routes/indexRoutes');
// const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.use("/api/auth", authRoutes);

app.use('/', indexRoutes);


module.exports = app;
