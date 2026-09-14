const express=require("express");
const employeesroutes=require("./routes/employeeRoutes.js");
const app=express()

//middleware
app.use(express.json()); //data parse coming as json

app.use("/employees",employeesroutes);

app.listen(3000,()=>console.log("server is running on port 3000"));