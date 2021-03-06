const express = require("express");
const router = express.Router();
const db = require("../models");

const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});


router.get("/exercise/:id", (req, res) => {
  res.json({});
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});




module.exports= router;