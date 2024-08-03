const express=require('express')
const server=express()
const env=require('dotenv')
const cors=require('cors')
const router = require('./router/UserRoutes')

//middleware
server.use(express.json())
server.use(cors())
server.use(express.static('public'))

server.use('/api/users',router)

server.get('/',(req,res)=>{
    res.send('frist page')
})
server.listen(3006,()=>{
    console.log('server listing');
    
})