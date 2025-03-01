require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
