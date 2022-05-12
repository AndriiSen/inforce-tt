const express = require("express");
let router = express.Router();
const mongoose = require("mongoose");
const ProductModel = require("../models/Product");

mongoose.connect(
  "mongodb+srv://andrii_sen_admin:wierdpassword@cluster0.hwcfe.mongodb.net/react_crud_app?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

router.route("/").get(async (req, res) => {
  res.status(200).send(await getAll());
});
router.route("/").post(async (req, res) => {
  const { imageUrl, name, count, width, height, weight, comments } = req.body;
  const product = new ProductModel({
    id: Math.floor(Math.random() * 100),
    imageUrl: imageUrl,
    name: name,
    count: count,
    width: width,
    height: height,
    weight: weight,
    comments: comments,
  });
  try {
    await product.save();
    res.status(200);
    res.send(await getAll());
  } catch (e) {
    console.log(e);
  }
});

router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    res.send(await findOne({ id }));
  } catch (e) {
    console.log(e);
  }
});

router.route("/:id").put(async (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body;
  try {
    await findOneAndUpdate({ id }, updateInfo);
    res.status(200).send(await getAll());
  } catch (e) {
    console.log(e);
  }
});

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  try {
    await findOneAndDelete({ id });
    res.status(200).send(await getAll());
  } catch (e) {
    console.log(e);
  }
});

router.route("/:id/comments").post(async (req, res) => {
  const { id } = req.params;
  const { comment } = req.body;
  try {
    const { comments } = await findOne({ id });
    await findOneAndUpdate({ id }, { comments: [comment, ...comments] });
    res.status(200).send(await getAll());
  } catch (e) {
    console.log(e);
  }
});

function getAll() {
  return ProductModel.find({});
}

function findOne(filterQuery) {
  return ProductModel.findOne(filterQuery);
}

function findOneAndUpdate(filterQuery, updateInfo) {
  return ProductModel.findOneAndUpdate(filterQuery, updateInfo);
}

function findOneAndDelete(filterQuery) {
  return ProductModel.findOneAndDelete(filterQuery);
}

module.exports = router;
