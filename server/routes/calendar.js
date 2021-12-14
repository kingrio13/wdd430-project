const express = require('express');

const router = express.Router();
const Appointments = require('../models/appoint');

const checkAuth= require('../middleware/check-auth');


//test if database connected
router.get('/', checkAuth,(req, res, next) => {

  
  //console.log('reqdata',req);

    Appointments.find({account:req.userData.userId}).populate('professional')
       .then(accounts => {
         res.status(200).json({
             message: 'Contacts fetched successfully!',
             prof: accounts
           });
       })
       .catch(error => {
         res.status(500).json({
           message: 'An error occurred',
           error: error
         });
       });
   });




   router.delete("/:id",checkAuth, (req, res, next) => {
        Appointments.deleteOne({ _id: req.params.id })
          .then(result => {
            console.log('reqID', req.params.id);
            console.log('result deleted', result);
            res.status(204).json({
              message: "Appointments deleted successfully"
            });
          })
          .catch(error => {
             res.status(500).json({
             message: 'An error occurred',
             error: error
           });
          })
    });


  router.put('/:id',checkAuth,(req,res,next)=>{

   
    // console.log('newdate',req.body.newDate); 
    // console.log('newtime',req.body.newTime); 


    Appointments.findOne({ _id: req.params.id })
    .then(updateone=>{

              updateone.appTime = req.body.newTime;
              updateone.appDate = req.body.newDate;
              updateone.professional='';
              updateone.account=updateone.account;

    Appointments.updateOne({ _id: req.params.id }, updateone)
    .then(result => {
                console.log('result',result);
                res.status(204).json({
                  message: 'Contact updated successfully'
                })
              })
    }).catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });

  })


module.exports = router;