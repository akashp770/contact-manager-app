const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Server running  ${port}`);
});
