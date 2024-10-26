const express = require('express')
const router = new express.Router()
const userController = require('../controllers/userController')


//register : post request to  http://localhost:3000/register 
router.post('/register',userController.registerController)

//login : post request to  http://localhost:3000/login 
router.post('/login',userController.loginController)

//my-profile : get request to http://localhost:3000/my-profile 
router.get('/my-profile ',userController.loginController)



module.exports=router