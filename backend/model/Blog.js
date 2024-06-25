const mongoose = require('mongoose');

const Blog = mongoose.Schema({
     
    title:{
        type:String,
        required:[true,'Must provide some title'],
        trim:true,
    },
    author:{
        type:String,
        required:[true,'Must provide a name'],
        trim:true,
     },
     date:{
        type:Date,
        default:Date.now,
     },
     content:{
        type:String,
        required:[true,'There must be some Content'],
        trim:true
     }
})

module.exports = mongoose.model('Blog',Blog);