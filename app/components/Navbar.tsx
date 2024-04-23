import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
          <div className="flex justify-end items-center px-20 h-full">
            <ul className="flex gap-x-3">
              <li>
                <Link href="/">
                  <div className="text-2xl text-gold cursor-pointer transition duration-200 hover:bg-gold hover:text-dark-teal rounded px-3">
                    home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/docs">
                  <div className="text-2xl text-gold cursor-pointer transition duration-200 hover:bg-gold hover:text-dark-teal rounded px-3">
                    docs
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <div className="text-2xl text-gold cursor-pointer transition duration-200 hover:bg-gold hover:text-dark-teal rounded px-3">
                    projects
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
