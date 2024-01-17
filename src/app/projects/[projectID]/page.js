import Image from "next/image";

import Head from 'next/head';
import SingleProject from "./code";
export async function generateMetadata(
  { params, searchParams },
  parent
) {
  // read route params
  const { projectID } = params;
 
try {
    // fetch data
    const data = {
      projectId: projectID
    }
    const product = await fetch("http://localhost:3000/api/projects/get-single-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await product.json()
   
    return {
      title: `${result.project.projectName} - OSS Lab` ,
      description:  `OSS Lab | ${ result.project.projectName}`
     
    }
  
}
catch (error){
  console.log(`error-> ${error}`)
}

  
}
 



export default function Home({ params }) {
  const { projectID } = params;

  return (
    <div>
    <SingleProject projectID={projectID}/>
    </div>
  );
}
