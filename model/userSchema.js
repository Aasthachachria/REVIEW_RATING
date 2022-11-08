const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    email: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    },
    number: {
        type:String,
        require:true
    },
    city: {
        type:String,
        require:true
    },
    state: {
        type:String,
        require:true
    },
    profilepic: String,
    isActive :{
        type:Boolean,
        require:true
    },
    role: {
        type:String,
        default:true
    },
})
//timestamps createAt or updateAt dono khud se kr dena  
userSchema.set('timestamps',true)
module.exports= mongoose.model('user',userSchema);