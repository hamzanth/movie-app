import React from "react";
import { Link } from "@tanstack/react-router";

// type NavBarTypes = {

// }
const navbarList: string[] = [
  "ACTION MOVIES",
  "HORROR MOVIES",
  "NAIJA NOLLYWOOD MOVIES",
  "THRILLER",
  "DRAMA",
  "ROMANCE",
  "COMEDY",
  "DOCUMENTARY",
];

const Navbar = () => {
  return (
    <>
      {/* <h1 className="text-3xl text-blue-700 font-semibold">
        This is the navbar component
      </h1> */}
      <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
        <h1>AWAMOVIE</h1>
        <input
          type="search"
          placeholder="Search"
          className="border-[1px] rounded-lg bg-gray-100 text-center text-black text-lg h-8 focus:outline-none"
        />
        <div className="hidden md:flex space-x-4">
          {navbarList.map((item, index) => (
            <Link to="/" key={index}>
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
