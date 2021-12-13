const mongoose = require('mongoose');


const appointSchema = mongoose.Schema(
    {
        appTime:{
            type:String,
            required: true
        },
        appDate: {
            type:String,
            required: true
        },
        professional: [{
            type: mongoose.Schema.Types.ObjectId,
           
            ref: 'Professional'
          }],
       account:{
            type: mongoose.Schema.Types.ObjectId,
           
            ref: 'Account'
          }
    })


module.exports = mongoose.model('Appoint', appointSchema);
