const express=require('express');
const router=express.Router();
const fs=require('fs');
const path=require('path');


//GET(read) All the employee
router.get('/employee',(request,response)=>{
   fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=>{
       if(error) throw error;
       let employee=JSON.parse(data);
       response.json(employee);

   });

});

//GET(read) a single employee
router.get('/employee/:id',(request,response)=>{
      let empId=Number.parseInt(request.params.id);

    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=>{
        if(error) throw error;
        let employees=JSON.parse(data);
        let selectedEmployee=employees.find(function (employee){
           return employee.id === empId;
        });
        response.json(selectedEmployee);

    });
});

//POST CREATE  a new employee
router.post('/employee',(request,response)=>{
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=>{
        if(error) throw error;
        let employees=JSON.parse(data);
        let maxId=Math.max(...employees.map(employee=> employee.id));
        let  newEmployee={
          id:maxId+1,
          first_name:request.body.first_name,
          last_name:request.body.last_name,
          email:request.body.email,
            gender:request.body.gender,
            ip_address:request.body.ip_address
        };
        employees.push(newEmployee);
        fs.writeFile(path.join(__dirname,'..','database','employees.json'),JSON.stringify(employees),'utf-8',(error)=>{
            if(error)throw error;
            response.json(newEmployee);
        });

    });

});

//PUT update an existing employee
router.put('/employee/:id',(request,response)=>{
    let empId=Number.parseInt(request.params.id);
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=> {
        if (error) throw error;
        let employees= JSON.parse(data);
        let selectedEmployee = employees.find(employee => employee.id === empId);
        let updatedEmployee = {
            id: empId,
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            email: request.body.email,
            gender: request.body.gender,
            ip_address: request.body.ip_address

        };
        employees.splice(employees.indexOf(selectedEmployee), 1, updatedEmployee);
        fs.writeFile(path.join(__dirname, '..', 'database', 'employees.json'), JSON.stringify(employees), 'utf-8', (error) => {
            if (error) throw error;
            response.json(updatedEmployee);
        });
    });
});

//DELETE: delete an employee
router.delete('/employee/:id',(request,response)=>{
    let empId=Number.parseInt(request.params.id);
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',( error,data)=>{
        if(error) throw error;
        let employee=JSON.parse(data);
        //remove the selected employee from the array
       let selectedEmp=employee.find(employee=>employee.id===empId)
        employee.splice(employee.indexOf(selectedEmp),1);
        fs.writeFile(path.join(__dirname, '..', 'database', 'employees.json'), JSON.stringify(employee), 'utf-8', (error) => {
            if (error) throw error;
            response.json(`employee is removed from${empId}`);
        });
    });


});

module.exports=router;