import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Link from "next/link";

interface Project {
  name: string;
  image: string;
  details: string[];
  id: string;
}

const Projects: React.FC<{}> = async () => {
  const projects = await getProjectsProps();
  return (
    <div className="min-h-screen bg-[url('/leaf-background.png')] bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl pb-10">projects</h1>
        <div className="grid grid-cols-3 gap-10 text-black">
          {projects.map((project, index) => (
            <Link
              key={index}
              className="h-4/5 bg-sage-green p-4 mt-20 rounded-2xl relative"
              href={`/projects/${project.id}`}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={project.image}
                  width={180}
                  height={180}
                  alt={project.name}
                  className="w-40 h-40 rounded-full object-cover"
                />
              </div>
              <div className="mt-20">
                <h3 className="text-3xl text-dark-brown font-bold mb-2">
                  {project.name}
                </h3>
                <ul className="p-4 list-disc">
                  {project.details.map((detail, index) => (
                    <li key={index} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getProjectsProps() {
  // TODO: Add call to retrieve details from the backend
  const projects = [
    {
      name: "Code Companion",
      image: "/project-imgs/code.png",
      details: ["Llama 3", "Fine-Tuned for Java"],
      id: "code-companion",
    },
    {
      name: "Gardening Assistant",
      image: "/project-imgs/code.png",
      details: ["Mistral", "Expert in Maryland gardening"],
      id: "gardening-assistant",
    },
    {
      name: "Blog Editor",
      image: "/project-imgs/code.png",
      details: ["Mistral", "Expert in writing technical blogs"],
      id: "blog-editor",
    },
  ];

  return projects;
}

export default Projects;
