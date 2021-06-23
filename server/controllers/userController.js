import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateJWT from "../utils/generateJWT.js";
/**
 * @desc    GET all users
 * @route   GET /api/users
 * @access  Public
 */

export const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  res.json({ user });
});

/**
 * @desc    Login - auth user & get token
 * @route   GET /api/user/login
 * @access  Public
 */

export const userAuth = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.send({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateJWT(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid password or email");
  }
});
