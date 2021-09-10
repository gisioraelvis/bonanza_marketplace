import express from "express";
import {
  getProducts,
  getProductById,
  createProductReview,
  getTopProducts,
} from "../controllers/productsController.js ";
import protect from "../middleWares/userAuth.js";

const router = express.Router();

router.route("/").get(getProducts);
router.get("/top", getTopProducts);
router.route("/:id").get(getProductById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
