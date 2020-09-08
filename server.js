const express= require('express');
const app= express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const cors =require('cors');
const cron = require('node-cron');
const User=require('./model/user');


app.use(bodyParser.json());
app.use(cors());

const db="mongodb+srv://prat:prat@cluster0.zlfyb.gcp.mongodb.net/Board_Infinity?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || db, { useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err){
        console.log('Error!'+ err)
    }else{
        console.log('----connected to mongoDB-------')
    }
});
app.post('/add',(req,res)=>{
    let userData=req.body
    let user=new User(userData)    
    user.save((error)=>{
        if(error){
            //console.log('---------error-----------')
            res.status(400).send('Exception occured')

        }else{
            res.status(200).send("true");
        }
    })
})
app.get('/list',(req,res)=>{
    console.log('getting all the data')
    User.find({},(err,data)=>{
        if(err)
        {
            console.log('--------'+err);
        }
        else
        {
            console.log('||||}}}}||||}}}|||}',e);
            res.status(200).json(data);
        }
    })
});
const PORT= process.env.PORT ||5000
app.listen(PORT, ()=>{
    console.log('server running on localhost');

})