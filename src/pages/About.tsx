// // components/About.tsx
// import React, { useState } from 'react';

// interface Movie {
//   id: string;
//   title: string;
//   image: string;
//   genre: string;
//   year: string;
// }

// const About: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const movies: Movie[] = [
//     { id: '1', title: 'Edge of Tomorrow', image: 'https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Action', year: '2024' },
//     { id: '2', title: 'Neon Nights', image: 'https://images.pexels.com/photos/7991584/pexels-photo-7991584.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Thriller', year: '2025' },
//     { id: '3', title: 'Midnight Drive', image: 'https://images.pexels.com/photos/7991591/pexels-photo-7991591.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Drama', year: '2023' },
//     { id: '4', title: 'Last Horizon', image: 'https://images.pexels.com/photos/7991539/pexels-photo-7991539.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Sci-Fi', year: '2022' },
//     { id: '5', title: 'Crimson Streets', image: 'https://images.pexels.com/photos/7991312/pexels-photo-7991312.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Crime', year: '2021' },
//   ];

//   const featuredMovie = movies[0];

//   return (
//     <div className="bg-slate-950 text-slate-100 min-h-screen">
//       {/* Fixed Navbar - Always Visible */}
//       <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-lg">
//         <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
//               <span className="text-lg font-bold text-white">MH</span>
//             </div>
//             <span className="text-xl font-bold tracking-tight text-white">MovieHub</span>
//           </div>

//           {/* Desktop Nav + Search */}
//           <div className="hidden md:flex items-center gap-6">
//             <nav className="flex items-center gap-6 text-sm text-slate-300">
//               <a href="#" className="hover:text-white transition">Home</a>
//               <a href="#" className="hover:text-white transition">Movies</a>
//               <a href="#" className="hover:text-white transition">TV Shows</a>
//               <a href="#" className="hover:text-white transition">Genres</a>
//             </nav>
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search movies..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="bg-slate-900/80 border border-slate-700 text-xs rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder:text-slate-500 w-64"
//               />
//               <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
//             </div>
//           </div>

//           {/* Mobile menu button + Sign In */}
//           <div className="flex items-center gap-3 md:hidden">
//             <button className="text-xs font-medium px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition">
//               Sign In
//             </button>
//             <button className="md:hidden p-2">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Sign In */}
//           <button className="hidden md:block text-xs font-medium px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 transition">
//             Sign In
//           </button>
//         </div>
//       </header>


//       {/* Hero Section - Shorter with top padding for fixed navbar */}
//       <section className="max-w-6xl mx-auto px-4 pt-24 pb-12"> {/* pt-24 for navbar + pb-12 for spacing */}
//         <div className="grid md:grid-cols-[1.6fr,1fr] gap-6 items-center">
//           <div>
//             <p className="text-xs uppercase tracking-[0.2em] text-red-400 mb-2">Now Streaming</p>
//             <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
//               Watch the latest blockbuster movies in one place.
//             </h1>
//             <p className="text-sm text-slate-300 mb-5 max-w-xl">
//               Discover trending titles, top-rated classics, and hidden gems.
//             </p>
//             <div className="flex flex-wrap items-center gap-3">
//               <button 
//                 onClick={() => console.log('Play:', featuredMovie.title)}
//                 className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-500 text-sm font-medium transition"
//               >
//                 Start Watching
//               </button>
//               <button className="px-4 py-2 rounded-full border border-slate-700 hover:border-slate-500 text-sm font-medium transition">
//                 Browse Library
//               </button>
//             </div>
//           </div>
//           <div className="relative">
//             {/* Reduced height from aspect-[4/5] to aspect-[3/4] */}
//             <div className="aspect-[3/4] md:aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-red-900/40">
//               <img
//                 src={featuredMovie.image}
//                 alt={featuredMovie.title}
//                 className="h-full w-full object-cover"
//               />
//             </div>
//             <div className="absolute -bottom-4 -left-2 bg-slate-900/90 backdrop-blur px-4 py-3 rounded-2xl border border-slate-700 shadow-lg text-xs">
//               <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Featured</p>
//               <p className="font-semibold">{featuredMovie.title}</p>
//               <p className="text-[11px] text-slate-400">{featuredMovie.genre} • {featuredMovie.year}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Movies Grid */}
//       <main className="max-w-6xl mx-auto px-4 py-10">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold">All Movies</h2>
//           <a href="#" className="text-xs text-slate-300 hover:text-white">View all</a>
//         </div>

//         <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//           {movies.map((movie) => (
//             <MovieCard key={movie.id} movie={movie} />
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-slate-800 py-6 mt-12">
//         <div className="max-w-6xl mx-auto px-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
//           <p>© 2026 MovieHub. All rights reserved.</p>
//           <p>Built For Entertainment</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// interface MovieCardProps {
//   movie: Movie;
// }

// const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
//   return (
//     <article className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-red-600 transition">
//       <div className="aspect-[2/3] overflow-hidden">
//         <img
//           src={movie.image}
//           alt={movie.title}
//           className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
//         />
//       </div>
//       <div className="p-2.5">
//         <h3 className="text-xs font-semibold line-clamp-2">{movie.title}</h3>
//         <p className="text-[11px] text-slate-400 mt-0.5">{movie.genre} • {movie.year}</p>
//       </div>
//     </article>
//   );
// };

// export default About;



// components/MoviesPage.tsx
import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

interface Movie {
  id: string;
  title: string;
  image: string;
  genre: string;
  year: string;
}

const About: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const allMovies: Movie[] = [
    { id: '1', title: 'Edge of Tomorrow', image: 'https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Action', year: '2024' },
    { id: '2', title: 'Neon Nights', image: 'https://images.pexels.com/photos/7991584/pexels-photo-7991584.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Thriller', year: '2025' },
    { id: '3', title: 'Midnight Drive', image: 'https://images.pexels.com/photos/7991591/pexels-photo-7991591.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Drama', year: '2023' },
    { id: '4', title: 'Last Horizon', image: 'https://images.pexels.com/photos/7991539/pexels-photo-7991539.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Sci-Fi', year: '2022' },
    { id: '5', title: 'Crimson Streets', image: 'https://images.pexels.com/photos/7991312/pexels-photo-7991312.jpeg?auto=compress&cs=tinysrgb&w=800', genre: 'Crime', year: '2021' },
  ];

  const filteredMovies = allMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMovieClick = (movieId: string) => {
    navigate({ to: `/movie/${movieId}` });
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">MH</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">MovieHub</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search 10,000+ movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-72 pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent placeholder:text-slate-500"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            </div>
            <button className="text-sm font-medium px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 transition">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <div className="pt-24 pb-12">
        {/* Page Header + Tabs */}
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">All Movies</h1>
              <p className="text-xl text-slate-400">
                {filteredMovies.length} movies available
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === 'all' ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-800/50 hover:bg-slate-700'}`}
                onClick={() => setActiveTab('all')}
              >
                All
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === 'action' ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-800/50 hover:bg-slate-700'}`}
                onClick={() => setActiveTab('action')}
              >
                Action
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${activeTab === 'thriller' ? 'bg-red-600 text-white shadow-lg' : 'bg-slate-800/50 hover:bg-slate-700'}`}
                onClick={() => setActiveTab('thriller')}
              >
                Thriller
              </button>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <main className="max-w-7xl mx-auto px-4">
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
              <p className="text-slate-400">Try adjusting your search or filter</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// MovieGridCard component remains the same
interface MovieGridCardProps {
  movie: Movie;
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
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xs font-bold line-clamp-2 group-hover:text-red-400 transition-colors mb-1">
          {movie.title}
        </h3>
        <p className="text-[10px] text-slate-400 flex items-center gap-1">
          <span>{movie.genre}</span>
          <span>•</span>
          <span>{movie.year}</span>
        </p>
      </div>
    </article>
  );
};

export default About;

