const post = require('../models/posts')
const user=require('../models/Users')
const fs=require('fs')
const path=require('path')

async function feed(req, res) {
    const { userid } = req.body;
    
        const nuser = await user.findById(userid).populate('following');
      
        const followedUserIds = nuser.following.map(followedUser => followedUser._id);
        

        const posts = await post.find({ userid: { $in: followedUserIds } }).populate('userid');
    // console.log(posts);
        res.send(posts);
    
}
// app.post('/feed/post',async(req,res)=>{
//     const { userid } = req.body;
//     const posts= await post.find({'userid':{$eq:userid}});
//     res.json(posts)

// })


async  function editPost(req,res){
    const { id,name,userid } = req.body;
    const instance=await post.findById(id)
    console.log(name);
    if(name.startsWith('likes')) {

        instance.likes+=parseInt(name.split(' ')[1])
        if(!instance.likedusers.includes(userid))
            instance.likedusers.push(userid)
        instance.save()
        console.log(instance);
        res.json('updated')
    }
    else{
        // const likedusers=await post.find({_id:{$in:instance.likedusers}}).populate('likedusers')
        const likedusers=await instance.populate('likedusers')
        
        
        res.json(likedusers)
    }
  }

async function comment(req,res){
    const { postid,userid ,x} = req.body;
    const inst=await post.findById(postid)
    // console.log(inst);
    inst.comment.cmt=x
    const users=inst.comment.users
        users.push(userid)
    inst.save()
    const user=await inst.comment.populate('users')
    console.log(user);
    res.json(inst)
  }
 
async function followup (req, res) {
    const { id, uid } = req.body;

    try {
        const suser = await user.findById(id);
        
        if (!suser) {
            return res.status(404).send({ error: 'User not found' });
        }

        const index = suser.following.indexOf(uid);
        if (index !== -1) {
            suser.following.splice(index, 1);
            await suser.save();
        }
        else{
            suser.following.push(uid)
            suser.save()
        }

        res.send(suser);
    } catch (err) {
        res.status(500).send({ error: 'An error occurred' });
    }
}

async function newpost(req,res){
        const { title, des ,id} = req.body;
        fs.rename(`posts/${req.file.filename}`,`posts/${req.file.originalname}`,(err)=>{
            if(err) throw err
           })
        try {
            const newUser = await post.create({
                name:title,
                description:des,
                userid:id,
                Postpic:req.file.originalname
            });
    
            res.status(201).json(newUser);
            
        } catch (error) {
            res.status(500).send(error);
        }
}
async function getimage(req,res){
    res.redirect('/image/pic.jpg')
}

module.exports={feed,editPost,comment,followup,newpost,getimage}