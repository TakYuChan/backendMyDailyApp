const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

// 1) Client routes
router.route("/signup").post(authController.signUp);
router.route("/login").post(authController.login);

// 2) Other routes
router.route("/").get(userController.getAllUsers);

module.exports = router;
