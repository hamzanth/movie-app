// import React, { useState, useEffect, useContext, useMemo } from "react";
// import { useQuery } from '@tanstack/react-query';
// import type { MovieType } from "../types";
// import { SearchContext } from "../context/searchContext";
// import { useMovies } from "../hooks/useMovies";

// // import { movieList } from "../lib";
// import ImageSlider from "../components/imageSlider";
// import { fetchMovies, fetchTestMovies } from "../fetcher";



// export function Home() {
//   // const movieLink1 = "https://drive.google.com/file/d/1xut57zaxgcmpFjUel0W8x69UHPO4h8mA/view?usp=drive_link"
//   // const movieLink = "https://drive.google.com/uc?export=download&id=1xut57zaxgcmpFjUel0W8x69UHPO4h8mA";
//   // const movieLink = "https://drive.google.com/uc?export=download&id=1xut57zaxgcmpFjUel0W8x69UHPO4h8mA";
//   // https://drive.google.com/file/d/1KZZdZoslEVruxrLxUNopmNSsblXlS5EB/view?usp=drive_link

//   // const [movieMapper, setMovieMapper] = useState<string>("");
//   const { searchTerm } = useContext(SearchContext)!
//   const { data: allMovies = [], isLoading, isError, error } = useMovies();

//    // Filter locally - super fast!
//   const filteredMovies = useMemo(() => {
//     if (!searchTerm.trim()) return allMovies;
    
//     return allMovies.filter(movie =>
//       movie.originalTitle.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [allMovies, searchTerm]);

  
//   // const {
//   //     data,       // Todo[] | undefined
//   //     isLoading,
//   //     isError,
//   //     error,
//   //   } = useQuery<MovieType[]>({
//   //     queryKey: ['movies'],
//   //     queryFn: fetchTestMovies,
//   //   });
  
//     if (isLoading) return <div>Loading...</div>;
//     if (isError) return <div>Error: {(error as Error).message}</div>;
//   console.log("The home page")

//   return (
//     <>
//       <div className="px-4">
//         <h1 className="text-blue-600 text-3xl font-bold mt-3 mb-4">
//           Latest Trending Movies
//         </h1>
//       </div>
//       <ImageSlider />
//       {/* <div className="mt-5 text-center">
//         <a href={movieLink} download>
//           <button className="cursor-pointer">Download File</button>
//         </a>
//       </div> */}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 mt-10">
//         {filteredMovies?.slice(0, 100).map((movie, index) => (
//           <div key={index} className="rounded">
//             <div className="flex justify-center">
//               <img
//                 src={movie.thumbnails[2].url}
//                 className="h-52 w-full"
//                 alt="Image not found"
//               />
//             </div>
//             <div className="py-2 px-3">
//               <a href={`/movie/${movie.id}`}>
//                 <h2 className="font-bold text-lg text-center">{movie.primaryTitle}</h2>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }



// components/About.tsx
import React, { useMemo, useContext } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { useMovies } from '../hooks/useMovies';
import type { MovieType } from "../types";
import TrailerPlayer from "../components/player2";
import { SearchContext } from "../context/searchContext";


const Home: React.FC = () => {
  const { searchTerm } = useContext(SearchContext)!
  const { data: allMovies = [], isLoading, isError, error } = useMovies();

  const navigate = useNavigate()
  // Filter locally - super fast!
  const filteredMovies = useMemo(() => {
    if (!searchTerm.trim()) return allMovies;
    
    return allMovies.filter(movie =>
      movie.originalTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allMovies, searchTerm]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;


  const featuredMovie = allMovies[0];
  const featuredMovie2 = allMovies[10];



  const handleMovieClick = (movieId: string) => {
    navigate({ to: `/movie/${movieId}` });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Fixed Navbar - Always Visible */}

      {/* Hero Section - Shorter with top padding for fixed navbar */}
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-12"> {/* pt-24 for navbar + pb-12 for spacing */}
        <div className="grid md:grid-cols-[1.6fr,1fr] gap-6 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Now Streaming</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Watch the latest blockbuster movies in one place.
            </h1>
            <p className="text-sm text-slate-300 mb-5 max-w-xl">
              Discover trending titles, top-rated classics, and hidden gems.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href={`/movie/${featuredMovie.id}`}
                className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-sm font-medium transition"
              >
                Start Watching
              </a>
              <Link to="/movies" className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 text-sm font-medium transition">
                Browse Library
              </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className="relative flex justify-center">
              {/* Reduced height from aspect-[4/5] to aspect-[3/4] */}
              <a href={`/movie/${featuredMovie.id}`}>
                <div className="aspect-[3/4] md:aspect-[3/4] w-full max-w-sm rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-red-900/40">
                  <img
                    src={featuredMovie.primaryImage}
                    alt={featuredMovie.originalTitle}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 bg-slate-900/90 backdrop-blur px-4 py-3 rounded-2xl border border-slate-700 shadow-lg text-xs">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Featured</p>
                  <p className="font-semibold">{featuredMovie.originalTitle}</p>
                  <p className="text-[11px] text-slate-400">{featuredMovie.genres} • {featuredMovie.startYear}</p>
                </div>
              </a>
            </div>
            <div className="relative flex justify-center">
              {/* Reduced height from aspect-[4/5] to aspect-[3/4] */}
              <a href={`/movie/${featuredMovie.id}`}>
                <div className="aspect-[3/4] md:aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-red-900/40">
                  <img
                    src={featuredMovie2.primaryImage}
                    alt={featuredMovie2.originalTitle}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-2 bg-slate-900/90 backdrop-blur px-4 py-3 rounded-2xl border border-slate-700 shadow-lg text-xs">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Featured</p>
                  <p className="font-semibold">{featuredMovie2.originalTitle}</p>
                  <p className="text-[11px] text-slate-400">{featuredMovie2.genres} • {featuredMovie2.startYear}</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Movies</h2>
          <Link to="/movies" className="text-xs text-slate-300 hover:text-white">View all</Link>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredMovies.slice(0,10).map((movie) => (
            <MovieCard 
              key={movie.id} 
              movie={movie}
              onClick={() => handleMovieClick(movie.id)} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© 2026 AwaMovie. All rights reserved.</p>
          <p>Built For Entertainment</p>
        </div>
      </footer>
    </div>
  );
};

interface MovieCardProps {
  movie: MovieType;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <article 
      className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-red-600 transition"
      onClick={onClick}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={movie.primaryImage}
          alt={movie.originalTitle}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-2.5">
        <h3 className="text-xs font-semibold line-clamp-2">{movie.originalTitle}</h3>
        <p className="text-[11px] text-slate-400 mt-0.5">{movie.genres} • {movie.startYear}</p>
      </div>
    </article>
  );
};

export default Home;