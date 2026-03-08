const db = require("../db");

// Get all products
const getProducts = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};


// Get product by ID
const getProductById = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM products WHERE id = $1",
      [req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


// Get products by category
const getCategoryProducts = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM products WHERE category = $1",
      [req.params.category]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = {
  getProducts,
  getProductById,
  getCategoryProducts,
};
