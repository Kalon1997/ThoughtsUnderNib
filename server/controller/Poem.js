const Poem = require('../models/Poem.js')
const User = require('../models/User.js')

exports.createPoem = async (req, res) => {
    try{

       const {title, body, clipart } = req.body; 
       const thepoem = {
       title : title, 
       body : body,
       clipart : clipart,
       createdById : req.user._id,
       createdByUsername : req.user.username,
       createdAt : new Date().toISOString(),
      }
       poemforyou = await Poem.create(thepoem);
       res.status(200).json(poemforyou);
    } catch (err) {
        res.status(502).json({ err });
    }
}
exports.getPoems = async (req, res) => { 
    try {
        const poems = await Poem.find();
        res.status(200).json({success: true,
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
                message: "BACK OFF, can't edit other's poems"
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
            success: false,
            err
        })
    }
}

