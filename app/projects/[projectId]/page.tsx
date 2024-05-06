import React from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const ProjectPage: React.FC<{ params: { projectId: string } }> = ({
  params,
}: {
  params: { projectId: string };
}) => {
  const project = getProjectProps();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-dark-teal bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl pb-10">overview</h1>
        <h3 className="text-4xl pb-10">{project.name}</h3>
        <div className="flex flex-row flex-wrap gap-40 p-10 items-center justify-center min-h-[calc(100vh-400px)]">
          <div className="text-center">
            <h1 className="text-9xl text-sage-green">
              {project.latest_accuracy_score}%
            </h1>
            <p className="text-3xl text-white">accuracy</p>
            <p className="text-xl text-white">most recent score</p>
            <p className="text-xl text-white">for factual correctness</p>
          </div>
          <div className="text-center">
            <h1 className="text-9xl text-sage-green">
              ${(project.latest_cost_cents / 100).toFixed(2)}
            </h1>
            <p className="text-3xl text-white">cost</p>
            <p className="text-xl text-white">estimated cost</p>
            <p className="text-xl text-white">of most recent test suite</p>
          </div>
          <div className="text-center">
            <h1 className="text-9xl text-sage-green">
              {project.latest_tone_score}%
            </h1>
            <p className="text-3xl text-white">tone</p>
            <p className="text-xl text-white">most recent score</p>
            <p className="text-xl text-white">for communication tone</p>
          </div>
          <div className="text-center">
            <h1 className="text-9xl text-sage-green">
              {Math.floor(project.latest_latency_seconds / 60)}m{""}
              {(project.latest_latency_seconds % 60).toFixed(0)}s
            </h1>
            <p className="text-3xl text-white">latency</p>
            <p className="text-xl text-white">most recent time</p>
            <p className="text-xl text-white">to complete test suite</p>
          </div>
        </div>
        <Link
          className="text-center"
          href={`/projects/${project.id}/experiments`}
        >
          <div className="text-2xl text-gold border border-gold py-4 px-8 rounded cursor-pointer transition duration-200 hover:bg-gold hover:text-dark-teal">
            view experiments
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;

export function getProjectProps() {
  // TODO: Add call to retrieve details from the backend
  const project = {
    name: "Code Companion",
    image: "/project-imgs/code.png",
    details: ["Llama 3", "Fine-Tuned for Java"],
    id: "code-companion",
    latest_cost_cents: 300,
    latest_accuracy_score: 89,
    latest_tone_score: 34,
    latest_latency_seconds: 369.3,
  };

  return project;
}
