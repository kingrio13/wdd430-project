const express = require('express');
const router = express.Router();
const Account = require('../models/account');


//test if database connected
// router.get('/', (req, res, next) => {
//     Account.find()
//       .then(accounts => {
//         res.status(200).json({
//             message: 'Contacts fetched successfully!',
//             accounts: accounts
//           });
//       })
//       .catch(error => {
//         res.status(500).json({
//           message: 'An error occurred',
//           error: error
//         });
//       });
//   });

router.post('/check', (req, res, next)=>{

        console.log('hey');
        //console.log(user);

});


router.post('/', (req, res, next) => {
            Account.findOne({email:req.body.userEmail, password:req.body.userPassword})
            .then(user=>{
                if(!user){
                    res.status(200).json({
                    message: 'Please check your Username and Password'
                    });
                }else{

                 


                    res.status(200).json({
                        message: 'whoooa',
                        accounts:user
                        });
                        
                }
                
            })
            
            
           
  });


  router.post('/register', (req, res, next) => {
    console.log('node',req.body.userEmail);
    console.log('node',req.body.userPassword);

    //check if email address is taken

    Account.findOne({email:req.body.userEmail})
    .then(user=>{
        if(!user){
        
            let myuserlevel=1;
            const account = new Account({
                 name: req.body.userName,
                 email: req.body.userEmail,
                 address: req.body.userAddress, 
                 phone: req.body.userPhone,
                 password: req.body.userPassword, 
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


            // res.status(200).json({
            // message: 'Please check your Username and Password'
            // });


        }else{
            res.status(200).json({
                message: 'whoooa, username already exist men',
                accounts:user
                });
        }
        
    })

   
});
  



module.exports = router;