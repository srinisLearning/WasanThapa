const express = require("express");
const app = express();
const port = process.env.PORT || 6066;
const router = express.Router();

app.get("/", (req, res) => {
  console.log("Server is Running");
  res.send("Wasan Server Running");
});

const authRoutes = require("./routes");
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
