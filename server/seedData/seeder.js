import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "../configs/db.js";

import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";

import users from "./users.js";
import products from "./products.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const sampleUsers = await User.insertMany(users);

    let admin = sampleUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: admin };
    });

    await Product.insertMany(sampleProducts);

    let numOfUsers = users.length;
    let numOfProducts = products.length;

    console.log(
      `Success importing: ${numOfUsers} users and ${numOfProducts} products`
        .inverse.green
    );
    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error.message}`.inverse.red);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(`Collections destroyed`.inverse.red);
    process.exit();
  } catch (error) {
    console.error(`Error destroying data: ${error.message}`.inverse.red);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
