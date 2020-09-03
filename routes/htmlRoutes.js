const express = require("express");
const router = express.Router();
const db = require("../models");

const path = require("path");

router.get("/", (req, res) => {
  res.json({});
});

module.exports= router;