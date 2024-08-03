const user = require('../models/Users')

async function addUsers(req, res) {
    const { name, des, pwd, pic } = req.body;

    try {
        const newUser = await user.create({
            name: name,
            description: des,
            password: pwd,
            pic: pic
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}
function updateUser(req, res) {
    res.send('update User Route')
}
async function ValidateUser(req, res) {
    const { name, pwd } = req.body;
    try {
        const nuser = await user.findOne({ name: name, password: pwd })
        console.log(nuser);
        if (nuser)
            res.status(201).json(nuser);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function profile(req, res) {
    const id = req.body.id;
    console.log(id);
    const x = await user.findOne({ _id: id })
    res.json(x)
}
async function viewall(req,res){
    res.json(await user.find())
}
module.exports = { addUsers, updateUser, ValidateUser, profile ,viewall}