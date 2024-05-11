"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
// import styles from '@/app/components/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  // const fun = (path)=>{
  //     if(path == '/'){

  //     }
  //     else if(path == '/about'){

  //     }
  //     else{
  //         path.substring(1).charAt(0).toUpperCase() + path.slice(2)
  //     }
  // }

  return (
    <>
      <nav className="text-white p-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <a href="/" className="text-xl font-bold">
            <img src="logo.png" className="h-auto max-w-xs w-56" alt="" />
          </a>

          <button
            onClick={toggleMenu}
            className="text-white inline-block md:hidden"
          >
            {/* Hamburger Icon */}
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? "hidden" : "block"
            } flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 gap-7`}
          >
            {["/", "#about", "/projects", "/contact"].map((path) => (
              <li
                key={path}
                className={router.pathname === path ? "bg-gray-700 p-2" : "p-2"}
              >
                <Link href={path}>
                  {path === "/" ? (
                    <img
                      src="home.png"
                      className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12 "
                    />
                  ) : path === "#about" ? (
                    <img
                      src="about.png"
                      className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                    />
                  ) : path === "/projects" ? (
                    <img
                      src="project.png"
                      className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                    />
                  ) : path === "/contact" ? (
                    <img
                      src="contact.png"
                      className="h-10 ease-in-out duration-300 w-10 hover:w-12 hover:h-12"
                    />
                  ) : (
                    path.substring(1).charAt(0).toUpperCase() + path.slice(2)
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="flex h-0.5 bg-white mt-3"></div>
    </>
  );
};
export default Navbar;
