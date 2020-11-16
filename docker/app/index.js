const app = require('express')();
const redis = require("redis");
const mongoose = require('mongoose');

app.get('/', (req, res) => res.send("It works ds!!"));
app.get('/status', (req, res) => res.sendStatus(500));

app.get('/redis', (req, res) => {
  const client = redis.createClient();

  client.on('connect', function () {
    return res.send({status: "Redis Connected"});
  });

  client.on("error", function(error) {
    res.send({status: error});
  });
});

const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbName = process.env.DB_NAME || 'local';
const mongoUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;

const connect = function () {
  return mongoose.connect(
    mongoUrl, {
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }, (err) => {

    if (err) {
      console.error('Failed to connect to mongo');
    }
  })
}

app.get('/mongo', (req, res) => {
  let response = connect();
  res.send({status: response});
});

app.listen(3000, () => console.log("Server is running"));