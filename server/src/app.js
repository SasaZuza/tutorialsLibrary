// Importing stuff we need
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Creating express server
const app = express();
app.use(morgan('combined'));
// Allows use and parse any JSON requests
app.use(bodyParser.json());
// Cors is used that any client can hit hosted server
app.use(cors());

// Sending simple data to test server
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  });
});

// Creating port
app.listen(process.env.PORT || 8081);
