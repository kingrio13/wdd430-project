const express = require('express');
const router = express.Router();
const Prof = require('../models/professional');
const Appoint = require('../models/appoint');


//test if database connected
router.get('/', (req, res, next) => {
   Prof.find()
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



  

  router.post('/set-appointment', (req, res, next) => {

            //since we're not using cookie yet, ill hard code account for now. go back later and fix this
          
            console.log('prof', req.body.profId)

            const appoint = new Appoint({
                 appTime: req.body.newTime,
                 appDate: req.body.newDate,
                 professional: req.body.profId, 
                 account:'61a87ea040540abe2446b9eb'
              });
            
              appoint.save()
                .then(createdAccount => {
                  res.status(201).json({
                    message: 'Appointment Added successfully',
                    account: createdAccount
                  });
                })
                .catch(error => {
                   res.status(500).json({
                      message: 'An error occurred',
                      error: error
                    });
                });
      

   
});

module.exports = router;