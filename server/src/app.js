const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const userRoutes = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);

module.exports = { app };
