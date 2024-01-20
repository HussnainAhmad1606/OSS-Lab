import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import "@/css/single-project.css"
function ProjectCard({projectName, projectDesc, projectId, skills, difficulty, gitHubUrl}) {

  const [diff, setDiff] = useState("not");
  const [slug, setSlug] = useState("");
  

  useEffect(() => {
   checkDifficulty();
  }, [])


  const checkDifficulty = () => {
var parts = gitHubUrl.split('/');
var output = parts.slice(3).join('/');
setSlug(output)
    if (difficulty == "Beginners") {
      setDiff("accent");
    }
    else if (difficulty == "Intermediate") {
      setDiff("primary");
      
    }
    else {
      setDiff("secondary");
    }
   console.log(diff)
  }
  
  return (
    <div className="m-10 card w-96 bg-base-100 shadow-xl">
  <figure><img src={`https://opengraph.githubassets.com/6fa26478850d4904c9e8567353350c87f35c71f7232cce8eec1d44e3ba1ca9a3/${slug}`} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="my-2 card-title">{projectName} <div className={`badge badge-lg badge-${diff}`}>{difficulty}</div></h2>
    <p>{projectDesc}</p>
{}
    <div className='projectSkills'>
    {
        skills.map((skill, index) => {
            return <div key={projectId+index} className="badge badge-outline">{skill}</div>
        })
    }
{/* <div className="badge badge-primary badge-outline">CSS</div>
<div className="badge badge-secondary badge-outline">JavaScript</div>
<div className="badge badge-accent badge-outline">MySQL</div>
<div className="badge badge-accent badge-outline">MySQL</div> */}
    </div>

    <div className="card-actions justify-end">
      <Link href={`/projects/${projectId}`} className="btn btn-primary">View Project</Link>
    </div>
  </div>
</div>
  )
}

export default ProjectCard