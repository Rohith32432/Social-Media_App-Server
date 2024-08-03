const express=require('express')
const server=express()

server.get('/',(req,res)=>{
    res.send('frist page')
})
server.listen(3006,()=>{
    console.log('server listing');
    
})