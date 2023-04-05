const express = require("express");
const Hr = require("../model/hr.model");

const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const hr = await Hr.find();
    res.status(200).json(hr);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const hr = await Hr.find({ _id: id });
    res.status(200).json(hr);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/save", async (req, res) => {
  try {
    const {
      empId,
      nic,
      civilStatus,
      phoneNumber,
      address,
      dob,
      gender,
      fName,
      lName,
      userRole,
      joinDate,
    } = req.body;
    const hr = await Hr.create({
      empId,
      nic,
      civilStatus,
      phoneNumber,
      address,
      dob,
      gender,
      fName,
      lName,
      userRole,
      joinDate,
    });

    
    res.status(201).json(hr);
  } catch (e) {
    res.status(400).send(e.message);
  }
});


//88888888888888888888888888888888888888888888888888888888888888

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const {
      empId,
      nic,
      civilStatus,
      phoneNumber,
      address,
      dob,
      gender,
      fName,
      lName,
      userRole,
      joinDate,
    } = req.body;
    const hr = await Hr.findByIdAndUpdate(
      {
        _id: id
    }, {
        $set: {
          empId,
          nic,
          civilStatus,
          phoneNumber,
          address,
          dob,
          gender,
          fName,
          lName,
          userRole,
          joinDate,
        }
    }, {
        new: true
    });
    res.status(201).json(hr);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const hr = await Hr.deleteMany({ _id: id });
    res.status(200).json(hr);
  } catch (e) {
    res.status(400).send(e.message);
  }
});



module.exports = router;
