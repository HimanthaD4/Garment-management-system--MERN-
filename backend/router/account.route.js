const express = require("express");
const Account = require("../model/account.model");

const router = express.Router();

// router.get('/get', (req, res) => {
//     get(req, res);
// });

// router.get('/get/:id', (req, res) => {
//     getbyId(req, res);
// });

// router.post('/save', (req, res) => {
//     save(req, res);
// });

// async function get(req, res) {
//     try {
//         const products = await products.find();
//         res.status(200).json(products);
//       } catch (e) {
//         res.status(400).send(e.message);
//       }
// }

router.get("/get", async (req, res) => {
  try {
    const account = await Account.find();
    res.status(200).json(account);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Account.find({ empId: id });
    res.status(200).json(account);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post("/save", async (req, res) => {
  try {
    const { accountId, empId, gender, salary, salaryType, laborCost } =
      req.body;
    const account = await Account.create({
      accountId,
      empId,
      gender,
      salary,
      salaryType,
      laborCost,
    });
    res.status(201).json(account);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
