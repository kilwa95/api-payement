const express = require('express');
const routing = require('./routes');

const app = express();
module.exports = app;

app.use(express.json());
app.use(routing);

app.listen(process.env.PORT || 3000, () => console.log('Server listening'));
