const express = require("express");
const empRouter = new express.Router();
// const userdb = require("../models/userSchema");
// const authenticate = require("../middleware/authenticate");
const employee = require("../models/employeeSchema");

empRouter.post("/add-emp", async (req, res) => {
  // console.log("done");
  try {
    let { name, techskills, experience, communication, company } = req.body;
    if (!name || !techskills || !experience || !communication || !company) {
      return res.json({ Error: "all fields are required" });
    }
    const data = { name, techskills, experience, communication, company };
    const addEmp = await employee.create(data);

    res.status(201).json({ status: 201, addEmp });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});

empRouter.get("/view-emp", async (req, res) => {
  try {
    const empData = await employee.find();
    console.log(empData);
    res.json({ status: "200", response: empData });
  } catch (err) {
    next(err);
  }
});

module.exports = empRouter;
