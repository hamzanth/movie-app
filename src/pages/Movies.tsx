// components/MoviesPage.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { useMovies } from "../hooks/useMovies";
import type { MovieType } from "../types";


const Movies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  const navigate = useNavigate();

  const { data: allMovies = [], isLoading, isError, error } = useMovies();
  
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {(error as Error).message}</div>;

  const genres = [
    'All', 'Action', 'Comedy', 'Romance', 'Drama', 'Adventure', 
    'Thriller', 'Horror', 'Nollywood', 'Sci-Fi', 'Fantasy', 
    'Animation', 'Documentary'
  ];

  const filteredMovies = allMovies.filter(movie => {
    const matchesSearch = movie.originalTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.genres.includes(searchTerm.charAt(0).toLocaleUpperCase() + searchTerm.slice(1).toLowerCase());
    const matchesGenre = activeGenre === 'All' || movie.genres.includes(activeGenre);
    return matchesSearch && matchesGenre;
  });

  const handleMovieClick = (movieId: string) => {
    navigate({ to: `/movie/${movieId}` });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Fixed Navbar with Genres Dropdown */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to='/'>
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg shadow-lg flex items-center justify-center hidden md:block">
                <span className="text-xs md:text-lg font-bold text-white">AM</span>
                </div>
                <span className="text-sm md:text-xl font-bold tracking-tight text-white">AwaMovie</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-4">

            {/* Genres Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGenresOpen(!isGenresOpen)}
                className="flex items-center text-xs md:text-base gap-2 px-4 py-2.5 bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-full text-sm font-semibold hover:bg-slate-700/50 transition-all"
              >
                {activeGenre}
                <svg className={`w-4 h-4 transition-transform ${isGenresOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isGenresOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl z-50 py-3 px-2">
                    <div className="grid grid-cols-3 gap-1">
                    {genres.map((genre) => (
                        <button
                        key={genre}
                        onClick={() => {
                            setActiveGenre(genre);
                            setIsGenresOpen(false);
                        }}
                        className="text-left px-3 py-2 text-xs hover:bg-slate-800/60 rounded-xl hover:text-red-400 transition-all"
                        >
                        {genre}
                        </button>
                    ))}
                    </div>
                </div>
                )}

            </div>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-32 md:w-72 pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder:text-slate-500"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>

          </div>
        </div>
      </header>

      <div className="pt-24 pb-12">
        {/* Page Header */}
        <div className="max-w-6xl mx-auto px-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">
                Movies ({activeGenre})
              </h1>
              <p className="text-xl text-slate-400">
                {filteredMovies.length} movies available
              </p>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <main className="max-w-6xl mx-auto px-4">
          {filteredMovies.length > 0 ? (
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
              {filteredMovies.map((movie) => (
                <MovieGridCard 
                  key={movie.id} 
                  movie={movie}
                  onClick={() => handleMovieClick(movie.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🎬</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">No movies found</h2>
              <p className="text-slate-400">
                Try searching or select a different genre
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// MovieGridCard component (same as before)
interface MovieGridCardProps {
  movie: MovieType;
  onClick: () => void;
}

const MovieGridCard: React.FC<MovieGridCardProps> = ({ movie, onClick }) => {
  return (
    <article 
      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-red-600/70 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 z-10" />
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <button className="w-10 h-10 bg-red-600/90 hover:bg-red-500 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-white/20">
          <span className="text-white font-bold">▶️</span>
        </button>
      </div>
      <div className="aspect-[2/3] overflow-hidden relative">
        <img 
          src={movie.primaryImage}
          alt={movie.originalTitle}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xs font-bold line-clamp-2 group-hover:text-red-400 transition-colors mb-1">
          {movie.originalTitle}
        </h3>
        <p className="text-[10px] text-slate-400 flex items-center gap-1">
          <span>{movie.genres}</span>
          <span>•</span>
          <span>{movie.startYear}</span>
        </p>
      </div>
    </article>
  );
};

export default Movies;
