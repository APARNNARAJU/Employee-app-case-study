const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const empdata = [
  { "id": 1, "EmployeeName": "Aparnna", "EmployeeDesignation": "Software Engineer", "EmployeeLocation": "Alappuzha", "Salary": 45000 },
  { "id": 2, "EmployeeName": "Sree", "EmployeeDesignation": "Data Analyst", "EmployeeLocation": "Pathanamthitta", "Salary": 50000 },
  { "id": 3, "EmployeeName": "Louis", "EmployeeDesignation": "UI/UX Designer", "EmployeeLocation": "Kollam", "Salary": 47000 },
  { "id": 4, "EmployeeName": "Meera", "EmployeeDesignation": "HR Executive", "EmployeeLocation": "Ernakulam", "Salary": 42000 },
  { "id": 5, "EmployeeName": "Vishnu", "EmployeeDesignation": "DevOps Engineer", "EmployeeLocation": "Kozhikode", "Salary": 60000 },
  { "id": 6, "EmployeeName": "Anjali", "EmployeeDesignation": "Project Manager", "EmployeeLocation": "Trivandrum", "Salary": 75000 },
  { "id": 7, "EmployeeName": "Rahul", "EmployeeDesignation": "QA Tester", "EmployeeLocation": "Kannur", "Salary": 40000 },
  { "id": 8, "EmployeeName": "Neha", "EmployeeDesignation": "Cloud Engineer", "EmployeeLocation": "Thrissur", "Salary": 65000 },
  { "id": 9, "EmployeeName": "Arjun", "EmployeeDesignation": "Backend Developer", "EmployeeLocation": "Palakkad", "Salary": 55000 },
  { "id": 10, "EmployeeName": "Kavya", "EmployeeDesignation": "Frontend Developer", "EmployeeLocation": "Kottayam", "Salary": 48000 },
  { "id": 11, "EmployeeName": "Divya", "EmployeeDesignation": "Business Analyst", "EmployeeLocation": "Malappuram", "Salary": 52000 },
  { "id": 12, "EmployeeName": "Manoj", "EmployeeDesignation": "System Administrator", "EmployeeLocation": "Kasargod", "Salary": 46000 }

];
function approutes(nav){
    router.get('/',(req,res)=>{
    res.send(empdata);
})
router.get('/home',(req,res)=>{
    res.render('home',{
        empdata,
        title:'Home Page',
        nav
    })
})
router.get('/form',(req,res)=>{
    res.render('addempform',{
        nav
    })
})

router.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    empdata.splice(id, 1);  
    res.redirect('/api/home');
});
router.get('/updateform/:id',(req,res)=>{
    res.render('updateemp',{
        nav,
        id:req.params.id,
        empdata
    })
})
router.post('/add',(req,res)=>{
    empdata.push(req.body);
    res.redirect('/api/home')
 
router.post('/edit/:ind',(req,res)=>{
    const index=req.params.ind;
    empdata.splice(index,1,req.body);
    res.redirect('/api/home');
})})
return router
}
module.exports=approutes
