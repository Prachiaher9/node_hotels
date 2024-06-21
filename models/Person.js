const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
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


personSchema.pre('save',async function(next){
   const person = this;
   // Hash the password only if it has been modified (or is new)
   if(!person.isModified('password')) return next();
   try {
      // hash password generation
      const salt = await bcrypt.genSalt(10);
      //hash password
      const hashedPassword = await bcrypt.hash(person.password,salt)
      person.password = hashedPassword;
      next();
   } catch (err) {
      return next(err);
   }
})

personSchema.methods.comparePassword = async function(candidatePassword){
   try {
      const isMatch = await bcrypt.compare(candidatePassword,this.password)
      return isMatch;  
   } catch (err) {
      throw err;
   }
} 

// create a Person modle
const Person = mongoose.model("Person",personSchema);
module.exports= Person;