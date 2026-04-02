const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

const { verifyToken, isAdmin } = require("../middleware/auth");

router.post("/", verifyToken, isAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/health", (req,res)=>res.send("OK"));

router.get("/", productController.getProducts);
router.get("/category/:category", productController.getCategoryProducts);
router.get("/:id", productController.getProductById);
module.exports = router;
