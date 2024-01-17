"use client";
import ProjectCard from '@/components/ProjectCard'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import "@/css/search.css"
export default function Home() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("Beginners");
  const [skills, setSkills] = useState("");
  const [isAdvanced, setIsAdvanced] = useState(true);
  const [strictMode, setStrictMode] = useState(false);
  const searchQuery = () => {
    const data = {
        name: name,
        difficulty: difficulty,
        skills: skills,
        isAdvanced: isAdvanced,
        strictMode: strictMode
    }
    fetch("/api/search/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then(res => res.json()).then(data => {
        console.log(data);
    })
  }
 

  useEffect(() => {
  }, [])
  
    return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className='text-4xl font-bold my-10'>Search</h1>
      <label className="form-control w-full max-w-xs">
       
      <div className='flex justify-center items-center'>
      <input
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Search Here..."
          className="input input-bordered w-full max-w-xs"
        />
        <div onClick={()=> {
            setIsAdvanced(!isAdvanced)
        }}>
          {
              isAdvanced?(
                  <FaAngleUp className='icon ml-10 text-2xl'/>
                  
                  ):(
                      
                      <FaAngleDown className='icon ml-10 text-2xl'/>
                    )
          }
        </div>


      </div>
        <div style={{
            display: isAdvanced?'block':'none'
        }} className='my-5'>
        <input
          type="text"
          value={skills}
          onChange={e=>setSkills(e.target.value)}
          placeholder="Enter Skills..."
          className="input input-bordered w-full max-w-xs"
        />

<label className="mt-5 form-control w-full max-w-xs">
 
  <select onChange={(e)=>setDifficulty(e.target.value)} value={difficulty} className="select select-bordered">
    <option value={"Beginners"}>Beginners</option>
    <option value={"Intermediate"}>Intermediate</option>
    <option value={"Advanced"}>Advanced</option>
  
  </select>
 
</label>

        </div>
        <div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Strict Mode: </span> 
      <input type="checkbox" className="toggle toggle-primary"  value={strictMode} onChange={e=>{
        setStrictMode(!strictMode);
        console.log(strictMode);
      }} />
    </label>
  </div>
  <button onClick={searchQuery} className="btn btn-primary my-5">Search</button>
      </label>


    
    </div>
  )
}
