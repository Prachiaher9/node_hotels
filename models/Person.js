const mongoose  = require('mongoose');

const personSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     }, 
     age:{
       type:Number
     } ,
     work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
     },
     mobile:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     address:{
        type:String,
     },
     salary:{
        type:String,
        required:true,
     },
     username:{
      type:String,
      required:true,
     },
     password:{
      type:String,
      required:true,
     }

})

// create a Person modle
const Person = mongoose.model("Person",personSchema);
module.exports= Person;