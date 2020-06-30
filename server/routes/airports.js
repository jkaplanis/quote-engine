const express = require("express");
const airportsController = require("../controllers/airports");

const router = express.Router();

// Get all airports for template
router.get("/", airportsController.getAllAirports);

module.exports = router;
