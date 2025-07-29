const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
require("./databaseConnectionConfig/mongoDB");
app.use(express.json());
app.use(cors());
dotenv.config();

app.use("/path", require("./routes/pathRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
