import React from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <main className="min-h-screen bg-[url('/leaf-background.png')] bg-cover bg-no-repeat">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-9xl font-bold mb-8">gen ai</div>
        <div className="text-9xl font-bold mb-8">test</div>
        <div className="text-9xl font-bold mb-8">dashboard</div>
      </div>

      <div className="flex flex-col items-center space-y-4 mb-20">
        <Link className="w-1/12 text-center" href="/docs">
          <div className="text-2xl text-white border py-4 px-8 rounded cursor-pointer transition duration-200 hover:bg-white hover:text-dark-teal">
            docs
          </div>
        </Link>
        <Link className="w-1/12 text-center" href="/projects">
          <div className="text-2xl text-white border py-4 px-8 rounded cursor-pointer transition duration-200 hover:bg-white hover:text-dark-teal">
            projects
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
