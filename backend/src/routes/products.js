import express from "express";
const router = express.Router();

import { getAllProducts, addProduct } from "../controllers/productController.js";

router.get("/", getAllProducts);
router.post("/", addProduct);

export default router;


