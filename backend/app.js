const http = require('http');
const mongoose = require('mongoose');
const Verifier = require("./Model/verifier");

mongoose
  .connect(
    "mongodb+srv://alextsai:ji394xk4xk4@cluster0-vypaz.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("were connected");
  const verifier = new Verifier.model({ email: "kk@gmail.com", phone:"123456677"})
  verifier.save().then( v => {
    console.log(v);
  })
});

const hostname = '127.0.0.1';
const port = 3005;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});