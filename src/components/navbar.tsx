import React, { useState, useContext } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from '@iconify/react';
import { SearchContext } from "../context/searchContext";
import { useLocation } from '@tanstack/react-router';
import { useNavigate } from "@tanstack/react-router";

// type NavBarTypes = {

// }
const navbarList: {name: string; link: string}[] = [
  {name: "ACTION", link: "/action"},
  {name: "HORROR", link: "/horror"},
  {name: "NAIJA NOLLYWOOD", link: "/nollywood"},
  {name: "THRILLER", link: "/thriller"},
  {name: "DRAMA", link: "/drama"},
  {name: "ROMANCE", link: "/romance"},
  {name: "COMEDY", link: "/comedy"},
  {name: "ADVENTURE", link: "/adventure"},
];


const Navbar = () => {

  const { searchTerm, setSearchTerm } = useContext(SearchContext)!
  const [activeGenre, setActiveGenre] = useState('all');
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleGenres = () => setIsGenresOpen(!isGenresOpen);

  const location = useLocation()
  const navigate = useNavigate()


  return (
    <>
      {/* <h1 className="text-3xl text-blue-700 font-semibold">
        This is the navbar component
      </h1> */}
      {/* <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
        <Link 
          to="/"
          className={`${location.pathname === '/' && 'text-green-500'}`}
          >
          AWAMOVIE
        </Link>
        <div className="flex items-center border-[1px] pl-2 rounded-lg bg-gray-100">
          <Icon 
            icon="mdi:magnify" 
            className="text-2xl text-black cursor-pointer"
            />
          <input
            type="search"
            placeholder="Search"
            className="text-black text-lg h-8 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="hidden md:flex space-x-4">
          {navbarList.map((item, index) => (
            <Link to={item.link} key={index} className={`${item.link === location.pathname && 'text-green-500'}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav> */}


        <header className="fixed z-10 top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
            <Link to="/">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-lg font-bold text-white">AM</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">AwaMovie</span>
              </div>
            </Link>

          {/* Desktop Nav + Search */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm text-slate-300">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/movies" className="hover:text-white transition">Movies</Link>
              <a href="#" className="hover:text-white transition">TV Shows</a>
              {/* Genres Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGenresOpen(!isGenresOpen)}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-full text-sm font-semibold hover:bg-slate-700/50 transition-all"
              >
                genre
                <svg className={`w-4 h-4 transition-transform ${isGenresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isGenresOpen && (
                <div className="absolute top-full left-[-100%] mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl z-50 py-3 px-2">
                    <div className="grid grid-cols-3 gap-1">
                    {navbarList.map((genre, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            navigate({to: genre.link})
                            setIsGenresOpen(false)

                          }}
                          className="text-left px-3 py-2 text-xs hover:bg-slate-800/60 rounded-xl hover:text-red-400 transition-all"
                          >
                          {genre.name}
                        </button>
                    ))}
                    </div>
                </div>
                )}
            </div>
            </nav>
            {location.pathname !== "/admin" && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-72 pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder:text-slate-500"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
              </div>
            )}
          </div>

          {/* FIXED Mobile menu button - VISIBLE ON MOBILE */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={toggleSidebar}
              className="p-3 bg-slate-900/70 hover:bg-slate-800/90 border border-slate-700/50 rounded-xl transition-all duration-200 hover:scale-[1.05] active:scale-[0.98] shadow-md z-50"
              style={{ minWidth: '48px', minHeight: '48px' }} // Ensures touch target
            >
              {/* 3 CLEAR WHITE LINES - ALWAYS VISIBLE */}
              <div className="w-6 h-[22px] flex flex-col justify-between relative z-50">
                <span 
                  className={`w-full h-[3px] bg-white rounded-full block transition-all duration-300 origin-right ${
                    isSidebarOpen 
                      ? 'rotate-45 translate-y-[9px] translate-x-[9px]' 
                      : ''
                  }`}
                />
                <span 
                  className={`w-full h-[3px] bg-white rounded-full block transition-all duration-300 ${
                    isSidebarOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-100'
                  }`}
                />
                <span 
                  className={`w-full h-[3px] bg-white rounded-full block transition-all duration-300 origin-right ${
                    isSidebarOpen 
                      ? '-rotate-45 -translate-y-[9px] translate-x-[8px]' 
                      : ''
                  }`}
                />
              </div>
            </button>
          </div>


        </div>
      </header>

      {/* Mobile Sidebar */}
      {/* COMPLETE FIXED SIDEBAR - Replace your entire sidebar */}
      <div 
        className={`fixed inset-0 z-[70] bg-black/70 backdrop-blur-md transition-all duration-300 ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div 
          className={`fixed top-0 left-0 w-80 h-screen bg-gradient-to-b from-slate-900/98 to-slate-950/98 backdrop-blur-3xl border-r border-slate-800/60 shadow-2xl transform transition-transform duration-500 ease-out z-[75] flex flex-col ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 1. FIXED HEADER */}
          <div className="p-8 border-b border-slate-800/50 sticky top-0 bg-slate-900/95 backdrop-blur-xl z-[80] flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-xl shadow-2xl flex items-center justify-center">
                  <span className="text-xl font-black text-white">AM</span>
                </div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  AwaMovie
                </span>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-slate-800/50 rounded-xl transition-all hover:scale-110"
              >
                <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* 2. ✅ SCROLLABLE CONTENT - Full remaining height */}
          <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden p-6 scrollbar-thin scrollbar-thumb-slate-600/50 scrollbar-track-slate-900/50">
            <nav className="space-y-2">
              {/* Home */}
              <a href="/" className="flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold text-white hover:bg-slate-800/60 hover:translate-x-2 transition-all duration-300 group" onClick={() => setIsSidebarOpen(false)}>
                <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all flex-shrink-0">🏠</span>
                <span>Home</span>
              </a>

              {/* Movies */}
              <a href="/movies" className="flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold text-white hover:bg-slate-800/60 hover:translate-x-2 transition-all duration-300 group" onClick={() => setIsSidebarOpen(false)}>
                <span className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all flex-shrink-0">🎬</span>
                <span>Movies</span>
              </a>

              {/* Genres Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsGenresOpen(!isGenresOpen)}
                  className="w-full flex items-center justify-between gap-4 p-4 rounded-2xl text-lg font-semibold text-white hover:bg-slate-800/60 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all flex-shrink-0">🎭</span>
                    <span>Genres</span>
                  </div>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${isGenresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* ✅ Genres dropdown - Now scrolls with parent */}
                <div className={`overflow-hidden transition-all duration-500 ease-out mt-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 ${isGenresOpen ? 'max-h-80 p-4 opacity-100' : 'max-h-0 p-0 opacity-0'}`}>
                  <div className="space-y-1 max-h-64 overflow-y-auto">
                    {navbarList.map((genre, index) => (
                      <Link
                        key={index}
                        to={genre.link}
                        className="flex items-center text-white gap-2 p-3 text-sm font-medium rounded-xl hover:bg-slate-800/80 hover:text-red-400 hover:translate-x-2 transition-all duration-200 group block w-full"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <span className="w-2 h-2 bg-current rounded-full scale-0 group-hover:scale-100 transition-transform"></span>
                        {genre.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* TV Shows */}
              <a href="/tv" className="flex items-center gap-4 p-4 rounded-2xl text-lg font-semibold text-white hover:bg-slate-800/60 hover:translate-x-2 transition-all duration-300 group" onClick={() => setIsSidebarOpen(false)}>
                <span className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all flex-shrink-0">📺</span>
                <span>TV Shows</span>
              </a>
            </nav>
          </div>

        </div>
      </div>

    </>
  );
};

export default Navbar;
