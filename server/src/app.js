const express = require('express');
const morgan = require('morgan');
const indexRoutes = require('./routes/indexRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/api/entries/', entriesRouter);
// app.use('/api/auth', authRouter);

app.use('/', indexRoutes);


module.exports = app;
