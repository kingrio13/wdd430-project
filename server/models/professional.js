const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const profSchema = mongoose.Schema(
    {

        name:{
            type:String,
            require:true
        },
        email: {
            type:String,
            required: true,
            unique: true
        },
      
        phone:{
            type:Number,
            required: true
        },
        profession:{
            type:String,
            required: true
        }
   
    })

    profSchema.plugin(uniqueValidator);


module.exports = mongoose.model('Professional', profSchema);
