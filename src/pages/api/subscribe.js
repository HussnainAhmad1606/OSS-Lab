import Newsletter from "@/models/Newsletter";
import connectDB from "@/middlewares/connectDB";

const handler = async (req, res) => {
  const {
    email,
  
   
  } = req.body;
  if (req.method == "POST") {
    let project = new Newsletter({
     
      email: email,
      
    });
    await project.save();
    res
      .status(200)
      .json({ type: "success", message: "Newsletter Subscribed." });
  } else {
    res.status(400).json({ type: "error", message: "ERROR. Please try again." });
  }
};

export default connectDB(handler);
