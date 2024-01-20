import Link from "next/link";
import React, { useEffect, useState } from "react";
import "@/css/single-project.css";
import { GrOrganization } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";

function ProjectCard({
  projectName,
  projectDesc,
  skills,
  difficulty,
  gitHubUrl,
  organization,
  avatar,
  user,
  userUrl
}) {
  const [diff, setDiff] = useState("not");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    checkDifficulty();
  }, []);

  const checkDifficulty = () => {
    var parts = gitHubUrl.split("/");
    var output = parts.slice(3).join("/");
    setSlug(output);
    if (difficulty == "Beginners") {
      setDiff("accent");
    } else if (difficulty == "Intermediate") {
      setDiff("primary");
      return;
    }
    setDiff("secondary");

  };

  return (
    <div className="m-10 card w-80 bg-base-100 shadow-xl">
   <div className="my-5 flex justify-center items-center">
   <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={avatar} />
        </div>
      </div>
   </div>
      <div className="card-body">
        <h2 className="text-4xl text-center font-bold">{projectName}</h2>
        
        <p>{projectDesc}</p>
        <div className={`badge badge-lg badge-${difficulty=="Beginners"?"accent":difficulty=="Intermediate"?"primary":"error"}`}>{difficulty}</div>
        <h2 className="my-2 card-title">
        <div
            className={`badge badge-lg badge-${
              difficulty == "Beginners"
                ? "accent"
                : difficulty == "Intermediate"
                ? "primary"
                : "error"
            }`}
          >
            {user == "User"? <FaRegUser/>:<GrOrganization/>}
          </div> 
          <a href={`https://github.com/${organization}`}>@{organization}{" "}</a>
          
        </h2>
        {}
        <div className="projectSkills">
          {skills.map((skill, index) => {
            return (
              <div key={"skill" + index} className="badge badge-outline">
                {skill}
              </div>
            );
          })}
          {/* <div className="badge badge-primary badge-outline">CSS</div>
<div className="badge badge-secondary badge-outline">JavaScript</div>
<div className="badge badge-accent badge-outline">MySQL</div>
<div className="badge badge-accent badge-outline">MySQL</div> */}
        </div>

        <div className="card-actions justify-end">
          {/* <Link href={`/projects/${projectId}`} className="btn btn-primary">View Project</Link> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
