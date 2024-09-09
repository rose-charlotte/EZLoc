const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/signIn", userController.signInUser);

module.exports = router;
