const employees=resuire("../data/employeeData.js"); 

const getsemployees = (req, res) => {
    res.json(employees)
}
const getemployeeById =(req,res)=>{
    const id=req.params.id;
    const employee=employees.find((employee)=>employee.empId===Number(id));
    if(!employee){
        res.status(404).json({success:false, message:"employee not found"});
    }
    res.json({success:true,employee});
    
}
const addemployee =(req,res)=>{
    const employee=req.body;
    employees.push({empId:employees.length+1,...employee});
    res.json({success:true,employee});  
}

const updateemployee =(req,res)=>{
    const id=req.params.id;
    const employee=req.body;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    result.name=employee.name;
    result.salary=employee.salary;
    result.department=employee.department;
    res.json({success:true,employee});
}

const deleteemployee =(req,res)=>{
    const id=req.params.id;
    const result=employees.find((employee)=>employee.empId===Number(id));
    if(!result){
        res.status(404).json({success:false, message:"employee not found"});
    }
    employees.splice(id-1,1);
    res.json({success:true,result});
}

module.exports={
    getsemployees,
    getemployeeById,
    addemployee,
    updateemployee,
    deleteemployee}
