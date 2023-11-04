require('../models/Post')

const mongoose = require('mongoose')
const posts = mongoose.model('posts')

const fetchAllPost =async (req,res,next)=>{
    
    const post = await posts.find({});
    res.locals.posts = post;
    next();
};
module.exports = {fetchAllPost};