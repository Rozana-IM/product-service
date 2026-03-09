const express = require("express");
const cors = require("cors");
const db = require("./db");

const productRoutes = require("./routes/product.routes");

const app = express();
const PORT = process.env.PORT || 6000;

app.use(express.json());

app.use(cors({
  origin: "https://rozana-projects.online",
  methods: ["GET"],
  credentials: true
}));

db.connect();

/* ROUTES */
app.use("/", productRoutes);

/* HEALTH CHECK */
app.get("/health", (req, res) => {
  res.send("Product Service is healthy");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Product Service running on port ${PORT}`);
});
