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
      <div className='grid grid-cols-3'>
        {
          isLoading ? <h1>Loading...</h1> : projects.map((project, index) => {
            return <ProjectCard key={index} projectName={project.projectName} projectDesc={project.projectDesc} skills={project.skills} difficulty={project.difficulty} projectId={project._id} />
          })
        }
      </div>
    </div>
  )
}
