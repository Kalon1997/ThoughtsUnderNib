const Mongoose = require('mongoose')
const poemSchema = new Mongoose.Schema({
    title:{
        type:String,
        
    },
    body:{
        type:String,

    },
    tags:{
        type: [String]
    },
    clipart:{
        type:String
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    createdById:{
        type:Mongoose.Schema.ObjectId,
        ref:"User",

    },
    createdByUsername:{
        type:String,

    },
    likes:{
        type: [String],
        default: []
    },
    comments:{
        type: [String],
        default: []
    }
})
module.exports = Mongoose.model("Poem", poemSchema);