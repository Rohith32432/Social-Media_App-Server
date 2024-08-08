const  mongoose  = require('mongoose')


const suschema= new mongoose.Schema({
    name:String,
    email:String,
    picture:String
})
const Suser=mongoose.model('Suser',suschema)

module.exports= Suser