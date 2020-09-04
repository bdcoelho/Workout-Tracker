const express = require("express");
const router = express.Router();
const db = require("../models");

const path = require("path");

router.get("/exercise", (req, res) => {
  res.json({});
});

router.get("/exercise/:id", (req, res) => {
  res.json({});
});





module.exports= router;