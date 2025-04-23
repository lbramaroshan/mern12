const express = require("express");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/Fetchuser");
const Product = require("../model/Product");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

router.get("/getproduct", fetchUser, async (req, res) => {
  try {
    const searchQuery = req.query.searchQuery
      ? {
          title: {
            $regex: req.query.searchQuery,
            $options: "i",
          },
        }
      : {};
    const products = await Product.find({ ...searchQuery });
    res.json(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

//get product

router.get("/getprofileproduct", fetchUser, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id });
    res.json(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

//crate product
router.post(
  "/addproduct",
  fetchUser,
  body("title")
    .isLength({ min: 3 })
    .withMessage("Product name must be min length three"),
  body("description")
    .isLength({ min: 5 })
    .withMessage("Product description must be min length five"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("instock").isNumeric().withMessage("Price must be a number"),

  async (req, res) => {
    console.log("this is req body", req.body);
    try {
      const { title, description, price, instock } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let image = req.files.map((el) => {
        return el.filename;
      });
      console.log(image);

      const product = new Product({
        title,
        description,
        price,
        instock,
        image,
        user: req.user.id,
      });
      const saveProduct = await product.save();
      res.json(saveProduct);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  }
);

//update product
router.put("/updateproduct/:id", fetchUser, async (req, res) => {
  const { title, description, price, instock } = req.body; //destructuring
  console.log("this is my req.body", req.body);

  try {
    const newProduct = {};
    if (title) newProduct.title = title;
    if (description) newProduct.description = description;
    if (price) newProduct.price = price;
    if (instock) newProduct.instock = instock;

    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    if (!product.user || product.user.toString() !== req.user.id) {
      return res
        .status(401)
        .json({ msg: "Not authorized to update this product" });
    }
    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: newProduct },
      { new: true }
    );

    res.json(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

//delete product
router.delete("/deleteproduct/:id", fetchUser, async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    if (!product.user || product.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    product = await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "product deleted" });
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

module.exports = router;
