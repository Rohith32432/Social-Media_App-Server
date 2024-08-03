const express=require('express')
const server=express()
const env=require('dotenv')
const cors=require('cors')
const router = require('./router/UserRoutes')
const path=require('path')
const Activityrouter = require('./router/ActivtyRouter')
const mongoose = require('mongoose');


//middleware
env.config()
server.use(express.json())
server.use(cors())
server.use(express.static('public'))
server.use('/image', express.static(path.join(__dirname,'posts')));

//DB
main().catch(err => console.log('DB Connection Error:', err));

async function main() {
  try {
    await mongoose.connect(process.env.url);
    console.log('DB Connected successfully');
  } catch (err) {
    console.error('DB Connection Error:', err);
  }
}


server.use('/api/users',router)
server.use('/api/posts',Activityrouter)

server.get('/',(req,res)=>{
    res.send('frist page')
})
server.listen(5000,()=>{
    console.log('server listing');
    
})