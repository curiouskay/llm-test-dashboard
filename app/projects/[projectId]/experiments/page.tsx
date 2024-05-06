import React from "react";
import Navbar from "../../../components/Navbar";

const Experiments: React.FC<{
  params: { projectId: string };
}> = ({ params }: { params: { projectId: string } }) => {
  const experiments = getExperimentsProps();
  const project = getProjectProps();

  if (!experiments) {
    return <div>Experiments not found</div>;
  }

  return (
    <div className="min-h-screen bg-dark-teal bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-5xl pb-10">experiments</h1>
        <h3 className="text-4xl pb-10">{project.name}</h3>
        <div className="bg-sage-green text-black rounded-2xl text-lg flex flex-col pb-10">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <table className="min-w-full text-left ">
              <thead className="border-b border-black">
                <tr>
                  <th scope="col" className="px-6 py-4" />
                  <th scope="col" className="px-6 py-4" />
                  <th scope="col" className="px-6 py-4">
                    accuracy
                  </th>
                  <th scope="col" className="px-6 py-4">
                    cost
                  </th>
                  <th scope="col" className="px-6 py-4">
                    tone
                  </th>
                  <th scope="col" className="px-6 py-4">
                    latency
                  </th>
                  <th scope="col" className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {experiments.map((experiment, index) => (
                  <tr className="border-b border-black transition duration-300 ease-in-out hover:bg-sage-green-light">
                    <td className="whitespace-nowrap px-6 py-4 ">
                      {experiment.number}.
                    </td>
                    <td className="pr-6 py-4">{experiment.title}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {experiment.accuracy_score}%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      ${(experiment.cost_cents / 100).toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {experiment.tone_score}%
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {Math.floor(experiment.latency_seconds / 60)}m{""}
                      {(experiment.latency_seconds % 60).toFixed(0)}s
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      view details
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiments;

export function getExperimentsProps() {
  // TODO: Add call to retrieve details from the backend
  const experiments = [
    {
      title:
        "A really long display name for an experiment. Fake name title that is really really long.",
      number: 1,
      cost_cents: 300,
      accuracy_score: "89",
      tone_score: "34",
      latency_seconds: 369.3,
    },
    {
      title: "Initial Llama 3 setup",
      number: 2,
      cost_cents: 2,
      accuracy_score: 68,
      tone_score: 34,
      latency_seconds: 2.3,
    },
    {
      title: "Normalized to lowercase.",
      number: 3,
      cost_cents: 65,
      accuracy_score: 2,
      tone_score: 15,
      latency_seconds: 88,
    },
  ];

  return experiments;
}

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
