function addUsers(req,res){
    res.send('adding users Route')
}
function updateUser(req,res){
    res.send('update User Route')
}
function ValidateUser(req,res){
    res.send('Login User Route')
}
function allusers(req,res){
    res.send('all users')
}
module.exports={addUsers,updateUser,ValidateUser,allusers}