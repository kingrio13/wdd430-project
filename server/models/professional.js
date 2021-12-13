const mongoose = require('mongoose');


const profSchema = mongoose.Schema(
    {

        name:{
            type:String,
            require:true
        },
        email: {
            type:String,
            required: true
        },
        address:{
            type:String,
            required: true
        },
        phone:{
            type:Number,
            required: true
        },
        password:{
            type:Number,
            required: true
        },
        userlevel:{
        type:Number,
        required: true
    }



    })


module.exports = mongoose.model('Professional', profSchema);
