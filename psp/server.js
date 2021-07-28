/* eslint-disable no-console */
/* eslint-disable max-len */
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MemoryStore = require('memorystore')(session);
const cors = require('cors');
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for “Content-Type: application/x-www-form-urlencoded”,
app.use(cookieParser());
app.use(
  session({
    secret: 'plateforme_secret',
    store: new MemoryStore(),
    expires: new Date(Date.now() + 30 * 86400 * 1000),
    saveUninitialized: true,
    resave: false,
    maxAge: null,
    cookie: {},
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // http://localhost:3000
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(cors());
app.use('/', routes);

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: 'Route not found',
  });
  next();
});

app.on('close', () => {});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Starting : http://localhost:${port}`);
});

module.exports = app;
