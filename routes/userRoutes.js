const express = require('express');
const router=express.Router();
const user = require('../controllers/userController');   //validation diya h  ,,,,controller se emport hua h
const validation = require ('../validation/users/user_validation')

router.post('/registerUser',validation.registerUserValidation,user.userSignup);
//router.post("/register",validation.registerUserValidation,user.userSignup)

module.exports=router;