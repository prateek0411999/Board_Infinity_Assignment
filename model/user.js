const mongoose= require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({

    task_name: String,
    task_description: String,
    creator: String,
    duration : String,
    createdAt: Date,
    
})
module.exports=mongoose.model('user',userSchema,'users')