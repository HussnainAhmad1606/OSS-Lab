"use client";
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    const res = await fetch('/api/projects/get-projects')
    const { projects } = await res.json()
    setProjects(projects);
    setIsLoading(false);  
  }

  useEffect(() => {
    getProjects();
  }, [])
  
    return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className='text-4xl font-bold my-10'>Explore Some Projects</h1>
      {
        isLoading ?(
          <span className="loading loading-ring loading-lg"></span>
          ):null
      }
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          projects.map((project, index) => {
            return <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDescription} skills={project.skills} difficulty={project.difficulty} gitHubUrl={project.gitHubUrl} projectId={project._id} />
          })
        }
      </div>
    </div>
  )
}
