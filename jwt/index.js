require('dotenv').config();
require('module-alias/register');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5090;

// Import routes
const indexUser = require('./routers/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* db.defaults({ posts: [], user: {} })
  .write(); */


app.use('/api/user', indexUser);

// Listen
app.listen(port, function(){
    console.log("Server listening port: ", +port);
})