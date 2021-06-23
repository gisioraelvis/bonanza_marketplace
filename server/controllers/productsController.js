import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

/**
 * @desc    Fetch all products
 * @route   GET /
 * @access  Public
 */

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @desc    Fetch product by ID
 * @route   GET /:id
 * @access  Public
 */

export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});
