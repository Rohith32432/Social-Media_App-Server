const express=require('express')
const { feed, editPost, comment, followup, newpost, getimage } = require('../controllers/activtyController')
const multer=require('multer')
const Activityrouter=express.Router()
const upload=multer({dest:'posts/'})

Activityrouter.get('/',feed)
Activityrouter.post('/editpost',editPost)
Activityrouter.post('/comment',comment)
Activityrouter.post('/followup',followup)
Activityrouter.post('/newpost', upload.single('avatar'),newpost)
Activityrouter.get('/img',getimage)
module.exports=Activityrouter