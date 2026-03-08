const db = require("../db");

exports.getAllProducts = (callback) => {
    db.query("SELECT * FROM products", callback);
};

exports.getProductsByCategory = (category, callback) => {
    db.query(
        "SELECT * FROM products WHERE category = ?",
        [category],
        callback
    );
};

exports.getProductById = (id, callback) => {
    db.query(
        "SELECT * FROM products WHERE id = ?",
        [id],
        callback
    );
};