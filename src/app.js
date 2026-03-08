const express = require("express");
const cors = require("cors");
const db = require("./db");

const productRoutes = require("./routes/product.routes");

const app = express();

const PORT = process.env.PORT || 6000;


// ================= Middleware =================

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://rozana-projects.online",
    methods: ["GET"],
    credentials: true,
  })
);


// ================= DB =================

db.connect();


// ================= Routes =================

app.use("/", productRoutes);


// ================= Health =================

app.get("/health", (req, res) => {
  res.status(200).send("Product Service is healthy");
});


// ================= Start =================

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Product Service running on port ${PORT}`);
});
