import connectDB from "@/middlewares/connectDB";
import Project from "@/models/Project";

const handler = async (request, response) => {
  try {
    const name = request.body.name;
    const skills = request.body.skills;
    const difficulty = request.body.difficulty;
    const isAdvanced = request.body.isAdvanced;
    const strictMode = request.body.strictMode;


    let projects;
    if (isAdvanced) {
      if (strictMode) {
        projects = await Project.find({
          $and: [
            { projectName: { $regex: name, $options: "i" } },
            { skills: { $in: skills } }, // Projects with at least one skill in the specified array
            { difficulty: difficulty },
          ],
        });
      } else {
        projects = await Project.find({
          $or: [
            { projectName: { $regex: name, $options: "i" } },
            { skills: { $all: skills } }, // Projects with all skills in the specified array
            { difficulty: difficulty },
          ],
        });
      }
    } else {
      if (strictMode) {
        projects = await Project.find({
          $and: [{ projectName: { $regex: name, $options: "i" } }],
        });
      } else {
        projects = await Project.find({
          $or: [{ projectName: { $regex: name, $options: "i" } }],
        });
      }
    }

    return response.status(200).json({ projects: projects });
  } catch (error) {
    //  console.log(error)
  }
};

export default connectDB(handler);
