const express = require('express');

const router = express.Router();
const Appointments = require('../models/appoint');

//test if database connected
router.get('/', (req, res, next) => {
    Appointments.find({account:'61a87ea040540abe2446b9eb'}).populate('professional')
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


   router.delete("/:id", (req, res, next) => {
    Appointments.findOne({ id: req.params.id })
      .then(Appointments => {
        Appointments.deleteOne({ id: req.params.id })
          .then(result => {
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
      })
      .catch(error => {
        res.status(500).json({
          message: 'Appointments not found.',
          error: { Appointments: 'Appointments not found'}
        });
      });
  });


  router.put('/:id',(req,res,next)=>{

   
    // console.log('newdate',req.body.newDate); 
    // console.log('newtime',req.body.newTime); 


    Appointments.findOne({ id: req.params.id })
    .then(updateone=>{

              updateone.appTime = req.body.newTime;
              updateone.appDate = req.body.newDate;
              updateone.professional='';
              updateone.account=updateone.account;

    Appointments.updateOne({ id: req.params.id }, updateone)
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



  // router.put('/:id',(req,res,next)=>{

   
  //   console.log('newdate',req.body.newDate); 
  //   console.log('newtime',req.body.newTime); 


  //   Appointments.findOne({ id: req.params.id })
  //   .then(updateone=>{
  //             updateone.appTime = req.body.newTime;
  //             updateone.appDate = req.body.newDate;

  //             return updateone.save();
  //   }).catch(err => {
  //     const error = new Error(err);
  //     error.httpStatusCode = 500;
  //     return next(error);
  //   });

  // })



module.exports = router;