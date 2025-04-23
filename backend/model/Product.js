const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  instock: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
