const express=require("express");
const router=express.Router();
const {getsemployees,
    getemployeeById,
    addemployee,
    updateemployee,
    deleteemployee}=require
("../controller/employeeController.js")

///Read Operation
router.get("/",getemployees)
///employee get by their id
router.get("/:id",getemployeeById)

//Create
router.post("/",addemployee)

//update
router.put("/:id",updateemployee)

//delete
router.delete("/:id",deleteemployee)

module.exports=router;