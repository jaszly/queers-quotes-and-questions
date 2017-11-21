const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
