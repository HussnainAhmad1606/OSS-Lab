import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import "@/css/single-project.css"
function ProjectCard({projectName, projectDesc, projectId, skills, difficulty}) {

  const [diff, setDiff] = useState("");

  useEffect(() => {
   checkDifficulty();
  }, [])


  const checkDifficulty = () => {
    if (difficulty == "Beginners") {
      setDiff("accent");
    }
    else if (difficulty == "Intermediate") {
      setDiff("primary");
    }
    else {
      setDiff("error");
    }
  }
  
  return (
    <div className="m-10 card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/800px-ChessSet.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="my-2 card-title">{projectName} <div className={`badge badge-lg badge-${diff}`}>{difficulty}</div></h2>
    <div className='projectSkills'>
    {
        skills.map((skill, index) => {
            return <div className="badge badge-outline">{skill}</div>
        })
    }
{/* <div className="badge badge-primary badge-outline">CSS</div>
<div className="badge badge-secondary badge-outline">JavaScript</div>
<div className="badge badge-accent badge-outline">MySQL</div>
<div className="badge badge-accent badge-outline">MySQL</div> */}
    </div>

    <p>{projectDesc}</p>
    <div className="card-actions justify-end">
      <Link href={`/projects/${projectId}`} className="btn btn-primary">View Project</Link>
    </div>
  </div>
</div>
  )
}

export default ProjectCard