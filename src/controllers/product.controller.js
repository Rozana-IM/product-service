const { pool } = require("../db");

/* ================= GET ALL PRODUCTS ================= */
const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("GET PRODUCTS ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

/* ================= GET PRODUCT BY ID ================= */
const getProductById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM products WHERE id = ?",
      [req.params.id]
    );

    res.json(rows[0]);
  } catch (err) {
    console.error("GET PRODUCT BY ID ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

/* ================= GET CATEGORY PRODUCTS ================= */
const getCategoryProducts = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM products WHERE category = ?",
      [req.params.category]
    );

    res.json(rows);
  } catch (err) {
    console.error("GET CATEGORY PRODUCTS ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
};

/* ================= ADD PRODUCT (ADMIN) ================= */
const createProduct = async (req, res) => {
  try {

    const { name, price, image_url, category } = req.body;

    await pool.query(
      "INSERT INTO products (name, price, image_url, category) VALUES (?,?,?,?)",
      [name, price, image_url, category]
    );

    res.json({ success: true });

  } catch (err) {
    console.error("CREATE PRODUCT ERROR:", err);
    res.status(500).json({ error: "Failed to add product" });
  }
};

/* ================= EXPORT ================= */
module.exports = {
  getProducts,
  getProductById,
  getCategoryProducts,
  createProduct
};
