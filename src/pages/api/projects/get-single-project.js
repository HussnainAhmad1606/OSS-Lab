import connectDB from "@/middlewares/connectDB";
import Project from "@/models/Project";
const { ObjectId } = require('mongodb');

const handler = async (request, response) => {
    const projectId = request.body.projectId;
    var id = new ObjectId(projectId);

    let project = await Project.findOne({ _id: id })

    return response.status(200).json({project: project})
      
   
}


export default connectDB(handler); 