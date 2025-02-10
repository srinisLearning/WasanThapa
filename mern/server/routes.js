const express = require("express");
const router = express.Router();

const authController = require("./controllers/authController");

const authRoutes = express.Router();
authRoutes.get("/", authController.home);
authRoutes.get("/register", authController.register);
authRoutes.get("/login", authController.login);

module.exports = authRoutes;
