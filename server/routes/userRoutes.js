import express from "express";
import {
  getUsers,
  authUser,
  getUserProfile,
  signupNewUser,
} from "../controllers/userController.js";
import protect from "../middleWares/userAuth.js";
const router = express.Router();

router.route("/").get(getUsers);
router.route("/signup").post(signupNewUser);
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
