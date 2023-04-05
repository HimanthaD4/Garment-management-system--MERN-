const express = require("express");
const IndustrialEngineering = require("../model/industrialEngineering.model");

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const industrialEngineering = await IndustrialEngineering.find();
    res.status(200).json(industrialEngineering);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const industrialEngineering = await IndustrialEngineering.find({
      poductMethod: id,
    });
    res.status(200).json(industrialEngineering);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/save", async (req, res) => {
  try {
    const { _id, poductMethod, researchStatus, description, cost } = req.body;
    const industrialEngineering = await IndustrialEngineering.create({
      _id,
      poductMethod,
      researchStatus,
      description,
      cost,
    });
    res.status(201).json(industrialEngineering);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
