"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from 'next/head';


export default function SingleProject({ projectID }) {
  const [project, setProject] = useState({ projectName: "" });
  const [isLoading, setIsLoading] = useState(true);
  const [slug, setSlug] = useState("");
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
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProject(data.project);
        setIsLoading(false);

      var parts = (data.project.gitHubUrl).split('/');
      var output = parts.slice(3).join('/');
      console.log(output)
      setSlug(output)
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
          backgroundImage:
          `url(https://opengraph.githubassets.com/6fa26478850d4904c9e8567353350c87f35c71f7232cce8eec1d44e3ba1ca9a3/${slug})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{project.projectName}</h1>
            <p className="mb-5">
             {project.projectDescription}
            </p>
            <a href={project.gitHubUrl} target="_blank" className="btn btn-primary">Open Repository</a>
          </div>
        </div>
      </div>
      {isLoading ? (
        <span className="loading loading-ring loading-lg"></span>
      ) : (
        <h1>Name: {project.projectName}</h1>
      )}
    </div>
  );
}
