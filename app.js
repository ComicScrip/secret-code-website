const express = require('express');
const app = express();

app.use(express.static('static'));

app.post('/', (req, res) =>
  res.send(
    '<p style="font-size: 100px; margin-top: 200px; text-align: center;">Thanks 😏</p>'
  )
);

app.listen(80, () => console.log('server running on port 80'));
