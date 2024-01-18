"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from "next/head";
import RepoCard from "@/components/RepoCard";
import { FaStar } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import {toast} from "react-toastify";
export default function SingleProject({ projectID }) {
  const [project, setProject] = useState({ projectName: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState("");
  const [repoData, setRepoData] = useState({});
  const [contributors, setContributors] = useState(0);


  const getProjectData = async (output) => {
    const data = await fetch(`https://api.github.com/repos/${output}`);
    const res = await data.json();
    if (!res.ok) {
      
     
        if (res.message.includes("API rate limit exceeded")) {
          toast.error('API Limit Exceed 🙂. You need to wait for sometime before checking out any project.', {
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
       else{
        toast.error('ERROR occured while fetching the data', {
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
    }


    setRepoData(res);
    console.log(res);
  };
  const getProject = () => {
    const data = {
      projectId: projectID,
    };
    fetch("/api/projects/get-single-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
      
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setProject(data.project);
        setIsLoading(false);

        var parts = data.project.gitHubUrl.split("/");
        var output = parts.slice(3).join("/");
        console.log(output);
        setSlug(output);
        getProjectData(output);
      });
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(https://opengraph.githubassets.com/6fa26478850d4904c9e8567353350c87f35c71f7232cce8eec1d44e3ba1ca9a3/${slug})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{project.projectName}</h1>
            <p className="mb-5">{project.projectDescription}</p>
            <a
              href={project.gitHubUrl}
              target="_blank"
              className="btn btn-primary"
            >
              Open Repository
            </a>
          </div>
        </div>
      </div>
      {isLoading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <div className="flex">
          <div className="grid grid-cols-2">
            <div className="m-10 card w-96 bg-base-100 shadow-xl">
              <div className="flex justify-center items-center card-body">
                <p className="text-7xl font-bold">{repoData.watchers_count}</p>
                <h2 className="text-2xl my-2 card-title">
                  <FaStar /> Stars
                </h2>
              </div>
            </div>

            <div className="m-10 card w-96 bg-base-100 shadow-xl">
              <div className="flex justify-center items-center card-body">
                <p className="text-7xl font-bold">{repoData.open_issues}</p>
                <h2 className="text-2xl my-2 card-title">
                  <VscIssues /> Issues
                </h2>
              </div>
            </div>


            <div className="m-10 card w-96 bg-base-100 shadow-xl">
              <div className="flex justify-center items-center card-body">
                <p className="text-7xl font-bold">{repoData.forks}</p>
                <h2 className="text-2xl my-2 card-title">
                  <BiGitRepoForked /> Forks
                </h2>
              </div>
            </div>
          </div>
          <div>
            <RepoCard
              projectName={project.projectName}
              projectDesc={project.projectDescription}
              skills={project.skills}
              difficulty={project.difficulty}
              gitHubUrl={project.gitHubUrl}
              projectId={project._id}
              organization={repoData?.owner?.login}
              avatar={repoData?.owner?.avatar_url}
              user={repoData?.owner?.type}
              userUrl={repoData?.html_url}
            />
          </div>
        </div>
      )}
    </div>
  );
}
