import express from "express";
import { getUsers, userAuth } from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(getUsers);
router.route("/login").post(userAuth);

export default router;
