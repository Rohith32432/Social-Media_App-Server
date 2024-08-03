const express=require('express')
const { addUsers, updateUser, ValidateUser, profile, viewall } = require('../controllers/userController')
const router=express.Router()

router.get('/profile',profile)
router.post('/',addUsers)
router.get('/update',updateUser)
router.get('/login',ValidateUser)
router.get('/all',viewall)
module.exports=router