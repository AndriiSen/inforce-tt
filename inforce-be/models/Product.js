const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array,
    required: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
