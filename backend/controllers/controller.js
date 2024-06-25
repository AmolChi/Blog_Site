const Blog = require('../model/Blog.js')

const createBlog = async(req,res)=>{
    try {
        const blog = await Blog.create(req.body);
        res.status(200).json({blog});
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getAllBlog = async(req,res)=>{
    try {
        const allBlogs = await Blog.find({});
        res.status(200).json(allBlogs);
    } catch (error) {
        res.status(500).json({msg:err})
    }
}

const getBlog = async(req,res)=>{
    const {id:blogId} = req.params;
    const blog = await Blog.findOne({_id:blogId});
    if(!blog){
        return res.status(404).json({msg:'Task Not Found'});
    }
    res.status(200).json({blog});
}

module.exports =  { createBlog, getAllBlog, getBlog } 