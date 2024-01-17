import Project from "@/models/Project";
import connectDB from "@/middlewares/connectDB";

const handler = async (req, res) => {
  const {
    username,
    email,
    projectName,
    projectDescription,
    gitHubUrl,
    isOwner
   
  } = req.body;
  if (req.method == "POST") {
    let project = new Project({
      adderName: username,
      adderEmail: email,
      projectName: projectName,
      projectDescription: projectDescription,
      gitHubUrl: gitHubUrl,
      coverImage: "",
      isOwner: isOwner,
      difficulty: "",
      skills: [],
      isPublished: false,
      isBlocked: false,
    });
    await project.save();
    res
      .status(200)
      .json({ type: "success", message: "Your request has been approved and project will be added after checking." });
  } else {
    res.status(400).json({ type: "error", message: "ERROR while adding your project. Please try again." });
  }
};

export default connectDB(handler);
