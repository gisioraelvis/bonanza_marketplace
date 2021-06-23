import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  const user = await User.find({});
  res.send(user);
};
