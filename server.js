const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config({
  path: '.env'
});

// init express app
const app = express();

// parse requests of content type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// routes
app.get('/ping', (req, res)=>{
  res.status(200).send("pong");
});
require('./routes/users.js')(app);

// Allow cross origin requests in dev
if (process.env.NODE_ENV === 'development') {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Log the error
  console.error(err);

  // Send an error response
  res.status(err.status || 500);
  res.send({ error: 'Server Error' });
});

// listen for requests
app.listen(8000, ()=>{
  console.log("Server started at port 8000");
});


module.exports = app;