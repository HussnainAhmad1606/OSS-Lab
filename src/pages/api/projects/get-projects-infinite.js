
import Project from "@/models/Project";
import connectDB from "@/middlewares/connectDB";



const handler = async (request, response) => {
    const page = parseInt(request.body.page || 1);
    const limit = 5;

    const skip = (page - 1) * limit;

    let posts = await Project.find({ isPublished: true }).skip(skip).limit(limit)
    let allPosts = await Project.find({ isPublished: true })
    let postsLength = allPosts.length;

    return response.status(200).json({allPostsLength: postsLength,posts: posts})
    
   
}


export default connectDB(handler); 