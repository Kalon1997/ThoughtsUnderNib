const Poem = require('../models/Poem.js')
const User = require('../models/User.js')

exports.createPoem = async (req, res) => {
    try{

       const {title, body, clipart, tags } = req.body; 
       const thepoem = {
       title : title, 
       body : body,
       clipart : clipart,
       tags: (tags.split(',').join(' ').split(';').join(' ').split('#').join(' ')).split(' '),
       createdById : req.user._id,
       createdByUsername : req.user.username,
       createdAt : new Date().toISOString(),
       likes: [],
       comments: []
      }
       poemforyou = await Poem.create(thepoem);
       res.status(200).json({success:true,
        poemforyou});
    } catch (err) {
        res.status(502).json({ message: 'unknown error' });
    }
}


exports.getPoems = async (req, res) => { 
    try {
        const PAGE_SIZE = 3;
        const totalPoems = await Poem.countDocuments();
        const page = parseInt(req.query.page || "0");

        const poems = await Poem.find()
            .limit(PAGE_SIZE)
            .skip(PAGE_SIZE*page);    
        res.status(200).json({success: true,
            totalPages: Math.ceil(totalPoems / PAGE_SIZE),
            poems});
    } catch (err) {
        res.status(500).json({ message:'unknown error' });
    }
}


exports.getMyPoems = async (req, res) => { 
    try {
       const mypoemlist = await Poem.find({createdById : req.user._id});
        res.status(200).json({success: true,
            mypoemlist});
    } catch (err) {
        res.status(500).json({ message:'unknown error' });
    }
}

exports.deletePoem = async (req, res) => {
    try {
        const poemToBeDeleted = await Poem.findById(req.params.id);
        if(!poemToBeDeleted){
            return res.status(405).json({
                success: false,
                message: "Post not found"
            })  
        }
        if(poemToBeDeleted.createdById.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "User Authorized"
            })
        }
        await poemToBeDeleted.remove();
        res.status(200).json({
            success: true,
            poemToBeDeleted,
            message: "Poem deleted",
          });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
          });
    }
}

exports.editPoem = async (req, res) => {
    try {
        const poemToBeEdited = await Poem.findById(req.params.id);
       
        if(!poemToBeEdited){
            return res.status(404).json({
                success: false,
                message: "Poem not found!"
            })
        }
        if(poemToBeEdited.createdById.toString() !== req.user._id.toString())
        {
            return res.status(401).json({
                success: false,
                message: "BACK OFF, can't edit others' poems"
            })
        }
        
        poemToBeEdited.title = req.body.title;
        await poemToBeEdited.save();
        return res.status(200).json({
            success: true,
            poemToBeEdited
        })
    } catch (err) {
        return res.status(500).json({
            message: "error unknown",
            success: false,
            err
        })
    }
}

exports.searchPoemByTags = async (req, res) => {
    try {
        var {word} = req.body;
        var arr = (word.split(',').join(' ').split(';').join(' ').split('#').join(' ')).split(' ')
        var allTagSearchedPoems = await Poem.find({
            'tags': { $in: arr} 
        })
        return res.status(200).json({
            allTagSearchedPoems,
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: false
        })
    }
}

exports.likeDislikePoem = async (req, res) => {
 try {
    const poemToBeLikedDisliked = await Poem.findById(req.params.id);
    if(!poemToBeLikedDisliked){
        return res.status(404).json({
            success: false,
            message: "Poem not found!"
        })
    }
    const myId = req.user._id.toString();
    var likeStatus = false;
    if(poemToBeLikedDisliked.likes.includes(myId)){
        poemToBeLikedDisliked.likes.splice(poemToBeLikedDisliked.likes.indexOf(myId),1)
        likeStatus=false;
        await poemToBeLikedDisliked.save();
        return res.status(200).json({
            poemToBeLikedDisliked,
            message: "Disliked",
            likeStatus,
        })
    }
    else
    {
        poemToBeLikedDisliked.likes.push(myId);
        likeStatus=true;
        await poemToBeLikedDisliked.save();
        return res.status(200).json({
            poemToBeLikedDisliked,
            message: "Liked just now",
            likeStatus
        })
    }
 } catch (error) {
    return res.status(500).json({
        message: "Wrong"
    })
 }
}

exports.addCommentInPoem = async (req, res) => {
   const newComment = req.body;
    try {
        const commentAddedPoem = await Poem.findById(req.params.id);
       if(!commentAddedPoem){
           return res.status(404).json({
               success: false,
               message: "Poem not found!"
           })
       }
       commentAddedPoem.comments.push(newComment.comment.toString());
       await commentAddedPoem.save();
       return res.status(200).json({
               commentAddedPoem,
               message: "comment added",
           })

      
    } catch (error) {
       return res.status(500).json({
           message: "Wrong"
       })
    }
   }