const express = require("express");
const PatternMaking = require("../model/patternMaking.model");

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const patternMaking = await PatternMaking.find();
    res.status(200).json(patternMaking);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const patternMaking = await PatternMaking.find({ designName: id });
    res.status(200).json(patternMaking);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/save", async (req, res) => {
  try {
    const {
      designCode,
      designName,
      material,
      materialCost,
      color,
      price,
      genderType,
      designDate,
      size,
    } = req.body;
    const patternMaking = await PatternMaking.create({
      designCode,
      designName,
      material,
      materialCost,
      color,
      price,
      genderType,
      designDate,
      size,
    });
    res.status(201).json(patternMaking);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
