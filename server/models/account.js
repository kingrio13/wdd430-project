const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const accountSchema = mongoose.Schema(
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
        password:{
            type:String,
            required: true
        },
        phone:{
            type:Number,
            required: true
        },
        userlevel:{
            type:Number,
            required: true
        }




    })

    accountSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Account', accountSchema);
