const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./sendEmail');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.post('/email', async (req, res) => {
  const response = await sendEmail(req.body.name, req.body.fromEmail, req.body.msg);
  if (response.accepted.length) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});