const mongoose = require('mongoose');


const accountSchema = mongoose.Schema(
    {

        name:{
            type:String,
            require:true
        },
        email: {
            type:String,
            required: true
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


module.exports = mongoose.model('Account', accountSchema);
