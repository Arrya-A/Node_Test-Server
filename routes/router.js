const express = require('express')
const router = new express.Router()
const userController = require('../controllers/userController')


//register : post request to  http://localhost:3000/register 
router.post('/register',userController.registerController)

//login : post request to  http://localhost:3000/login 
router.post('/login',userController.loginController)

//allUsers : get request to http://localhost:3000/allUsers
router.get('/all-users',userController.allUsersController)


// myProfile : GET request to http://localhost:3000/my-profile
router.get('/my-profile', jwtMiddleware, userController.myProfileController);

module.exports=router