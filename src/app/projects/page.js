"use client";
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNewLoading, setIsNewLoading] = useState(true);

  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(0);
  const [allPosts, setAllPosts] = useState([]);
  const [isMore, setIsMore] = useState(true)
  const [page, setPage] = useState(1)



  const fetchProjects = async() => {
    setIsNewLoading(true)
    // console.log("Fetching more....")
   

    await fetch(`/api/projects/get-projects-infinite`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({page: page})
    })
    .then(res => res.json())
    .then(data => {
      
      // console.log(`Expression: ${allPosts.length+data.posts.length} - ${totalPosts}`)
      setTotalPosts(data.allPostsLength)
      let len = (data.posts).length;
      setCurrentPosts(currentPosts+len)

    const updatedPosts = data.posts.sort((a, b) => a.score - b.score);
    setAllPosts((prevPosts) => [...prevPosts, ...updatedPosts])

    if (allPosts.length+data.posts.length == totalPosts) {
      setIsMore(false)
    }
    else {
      setIsMore(true)
    }
    setPage(page + 1);

    setIsLoading(false)
    setIsNewLoading(false)
    })

    

  }

  const getProjects = async () => {
    const res = await fetch('/api/projects/get-projects')
    const { projects } = await res.json()
    setProjects(projects);
    setIsLoading(false);  
  }

  useEffect(() => {
    fetchProjects();
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
          allPosts.map((project, index) => {
            return <ProjectCard key={project.projectName+index} projectName={project.projectName} projectDesc={project.projectDescription} skills={project.skills} difficulty={project.difficulty} gitHubUrl={project.gitHubUrl} projectId={project._id} />
          })
        }
      </div>

      {
      isNewLoading?(
<center><span className="my-10 text-center loading loading-dots loading-lg"></span></center>
      ):null
    }

      {
  isLoading==false&&allPosts.length!==totalPosts?(
    <div className='flex justify-center items-center'>
      <button className='my-10 btn redBtn btn-primary' onClick={fetchProjects}>Load More...</button>
      </div>
  ):null
}



 {
  isLoading==false&&allPosts.length==totalPosts?(
    <h1 className='my-10 text-center font-bold'>You have seen all projects 👏</h1>
      ):null
 }
    </div>
  )
}
