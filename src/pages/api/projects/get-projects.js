
import Project from "@/models/Project";
import connectDB from "@/middlewares/connectDB";


const handler = async (request, response) => {
 

    let projects = await Project.find({ isPublished: true})

    return response.status(200).json({projects: projects})
      
   
}


export default connectDB(handler); 