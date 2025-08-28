const express= require('express');
const app=new express();
const ejs=require('ejs');
app.set('view engine','ejs');
const nav=[{
    name:'Home', link:'/api/home'
},{ name:'AddEmployee', link:'/api/form'}]
const empapproutes=require('./routes/empapproutes')(nav);
app.use('/api',empapproutes); 
app.set('views',__dirname+'/views')

app.use(express.static('public'))
app.listen(3000,()=>{
    console.log("Yaay..Server is running on port 6000");
});
