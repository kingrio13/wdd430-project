const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Professionals = require('../models/professional');

const Account = require('../models/account');
const checkAuth = require('../middleware/check-auth');




router.post("/",  (req, res, next) => {
    let fetchedUser;
    Account.findOne({ email: req.body.userEmail })
      .then(user => {
        if (!user) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.userPassword, user.password);
      })
      .then(result => {
        if (!result) {
          return res.status(401).json({
            message: "Auth failed"
          });
        }


        //console.log(fetchedUser);

        const token = jwt.sign(
          { name: fetchedUser.name, userId: fetchedUser._id },
          "appointment_secret",
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          usertoken:fetchedUser._id,
          usertokenName:fetchedUser.name
        });



      })
      .catch(err => {
        return res.status(401).json({
          message: "Auth failed"
        });
      });
  });
  





  router.post('/register', (req, res, next) => {
    // console.log('node',req.body.userEmail);
    // console.log('node',req.body.userPassword);


        bcrypt.hash(req.body.userPassword, 10).then(hash=>{
            let myuserlevel=1;
            console.log('hash', hash);
            const account = new Account({
                 name: req.body.userName,
                 email: req.body.userEmail,
                 address: req.body.userAddress, 
                 phone: req.body.userPhone,
                 password: hash,
                 userlevel: myuserlevel
              });
            
              account.save()
                .then(createdAccount => {
                  res.status(201).json({
                    message: 'User added successfully',
                    account: createdAccount
                  });
                })
                .catch(error => {
                   res.status(500).json({
                      message: 'An error occurred',
                      error: error
                    });
                });
        })
 

   
});



router.post('/professionals', (req, res, next) => {

         
          const prof = new Professionals ({
               name: req.body.profName,
               email: req.body.profEmail,
               phone: req.body.profPhone,
               profession:req.body.profProfession
            });
          
            prof.save()
              .then(createdAccount => {
                res.status(201).json({
                  message: 'User added successfully',
                  account: createdAccount
                });
              })
              .catch(error => {
                 res.status(500).json({
                    message: 'An error occurred',
                    error: error
                  });
              });
      })


 

  



module.exports = router;