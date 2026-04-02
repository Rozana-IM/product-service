const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
const { verifyToken, isAdmin } = require("../middleware/auth");

// ✅ ADMIN: Add product
router.post("/", verifyToken, isAdmin, productController.createProduct);

// ✅ PUBLIC: Get all products
router.get("/", productController.getProducts);

// ✅ PUBLIC: Category products
router.get("/category/:category", productController.getCategoryProducts);

// ✅ PUBLIC: Single product
router.get("/:id", productController.getProductById);

// ✅ HEALTH
router.get("/health", (req,res)=>res.send("OK"));

module.exports = router;
