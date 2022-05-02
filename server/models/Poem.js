const Mongoose = require('mongoose')
// const poemSchema = new Mongoose.Schema({
//     title: String,
//     createdAt: {
//                 type: Date,
//                 default: new Date(),
//             }
// });
const poemSchema = new Mongoose.Schema({
    title:{
        type:String,
        
    },
    body:{
        type:String,
        // required:true
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
        // required:true
    },
    createdByUsername:{
        type:String,
        // required:true
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