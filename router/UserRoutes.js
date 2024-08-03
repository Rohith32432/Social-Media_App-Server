const express=require('express')
const { addUsers, allusers, updateUser, ValidateUser } = require('../controllers/userController')
const router=express.Router()

router.get('/',allusers)
router.post('/',addUsers)
router.get('/update',updateUser)
router.get('/login',ValidateUser)

module.exports=router