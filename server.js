const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/middlerHandler");

const dotenv = require("dotenv").config();

const app = express();
connectDb();

const port = process.env.PORT || 4001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running  ${port}`);
});
