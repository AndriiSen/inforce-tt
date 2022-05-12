const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./routes/products");

app.use(express.json());
app.use(cors());

app.use("/product", products);

app.listen(process.env.PORT || 8080, () => {
  console.log("Server running");
});
