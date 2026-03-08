exports.getProducts = (req, res) => {

    let query = "SELECT * FROM products WHERE 1=1";
    let values = [];

    if (req.query.category) {
        query += " AND category = ?";
        values.push(req.query.category);
    }

    if (req.query.minPrice) {
        query += " AND price >= ?";
        values.push(req.query.minPrice);
    }

    if (req.query.maxPrice) {
        query += " AND price <= ?";
        values.push(req.query.maxPrice);
    }

    if (req.query.search) {
        query += " AND name LIKE ?";
        values.push(`%${req.query.search}%`);
    }

    db.query(query, values, (err, results) => {

        if(err) return res.status(500).json(err);

        res.json(results);

    });
};