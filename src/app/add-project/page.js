"use client"
import { useState } from "react";
import Image from "next/image";
import "@/css/add-project.css";
import {toast} from "react-toastify";
export default function addProject() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [isOwner, setIsOwner] = useState(true);


  const addProject = () => {
    if (!name || !email || !projectName || !projectDesc || !gitHubUrl || (isOwner==null)){
      toast.error('Please fill all details', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
        return;
    }


    const data = {
      username: name,
      email: email,
      projectName: projectName,
      projectDescription: projectDesc,
      gitHubUrl: gitHubUrl,
      isOwner: isOwner
    }
    fetch("/api/projects/add-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(res => res.json()).then(data => {
      if (data.type == "success") {
        toast.success(data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setName("");
        setEmail("");
        setProjectName("");
        setProjectDesc("");
        setGitHubUrl("");
        setIsOwner(true);
      } else {
        toast.error(data.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
      }
    }).catch(err => {
      console.log(err);
      toast.error(data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });;
    })
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-10">Add new Project</h1>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Your Name: </span>
        </div>
        <input
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Name..."
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Your Email: </span>
        </div>
        <input
          value={email}
          onChange={e=>setEmail(e.target.value)}
          type="text"
          placeholder="Email..."
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Project Name: </span>
        </div>
        <input
          value={projectName}
          onChange={e=>setProjectName(e.target.value)}
          type="text"
          placeholder="Project Name..."
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Project Description: </span>
        </div>
        <textarea
        value={projectDesc}
        onChange={e=>setProjectDesc(e.target.value)}
        style={{
            width: "320px",
          }}
          className="textarea textarea-bordered h-24"
          placeholder="Project Description"
        ></textarea>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">GitHub/GitLab Repository URL: </span>
        </div>
        <input
        value={gitHubUrl}
        onChange={e=>setGitHubUrl(e.target.value)}
          type="text"
          placeholder="URL"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Are you the owner/maintainer of the project?</span>
  </div>
  <select value={isOwner} onChange={e=>setIsOwner(e.target.value)} className="select select-bordered">

    <option value={true}>Yes</option>
    <option value={false}>No</option>
    
  </select>

  <button onClick={addProject} className="btn btn-primary my-10">Submit Project</button>
 
</label>


    </div>
  );
}
