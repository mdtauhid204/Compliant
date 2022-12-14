const mongoose=require('mongoose');

const UserSchema= new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"student"
    }
})

module.exports= mongoose.model('user',UserSchema);

