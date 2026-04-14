// import React, { useEffect, useState } from "react";
// import { useParams } from '@tanstack/react-router';
// import type { MovieType } from "../types";
// import axios from "axios";
// import TrailerPlayer from "../components/player2";
// import { doc, getDoc, updateDoc, deleteField } from "firebase/firestore";
// import { db } from "../firebase";

// const ref = doc(db, "movie123", "4VFpLKwjfPUV0cLyGrPk");

// export const MovieDetail: React.FC = () => {
//     const params = useParams({from: "/movie/$id"});
//     console.log("Movie ID from params:", params.id);

//     const [movie, setMovie] = useState<MovieType | null>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [downloadLink, setDownloadLink] = useState<string>("")

//     const getDownloadUrl = async(movieName: string): Promise<void> => {
//         const snap = await getDoc(ref)
//         const data = snap.data()
//         const downloadLnk = data ? data[movieName] : ""
//         setDownloadLink(downloadLnk)
//         console.log("The download link is " + downloadLnk)
//         // return downloadLink
//     }

//     useEffect(() => {
//         // Fetch movie details based on params.id
//         const fetchMovieDetail = async () => {
//             try {
//                 const res = await axios.get<MovieType[]>(`http://localhost:3000/movies`);
//                 const movi = res.data.find(m => m.id === params.id) || null;
//                 if (movi){
//                     getDownloadUrl(movi.originalTitle)
//                 }
//                 setMovie(movi)
//             } catch (error) {
//                 console.error("Error fetching movie details:", error);
//             } finally {
//                 setIsLoading(false);
//             }   
//         };

//         fetchMovieDetail();
//     }, [params.id]);

//     if (isLoading) {
//         return <div>Loading movie details...</div>;
//     }

//   return (
//     <>
//         <div className="px-4">
//             <h1 className="text-blue-900 text-3xl font-bold mt-3 mb-4 text-center">
//                 {movie?.originalTitle}
//             </h1>
//             <div className="w-[75%] mx-auto">
//                 <img className="w-full h-[120vh]" src={movie?.primaryImage} alt="Movie image not found" />
//                 <p className="w-[50%] mx-auto text-center text-lg">{movie?.description}</p>
//                 <div className="flex justify-center mt-6">
//                     {downloadLink ? (
//                         <div>
//                             <a
//                                 href={downloadLink}
//                                 className="rounded text-xl bg-blue-800 py-2 px-10 text-white hover:bg-blue-900 cursor-pointer"
//                             >
//                                 Download
//                             </a>
//                         </div>
//                     ) : (
//                         <div>
//                             <button
//                                 onClick={() => alert("This video is not available for download yet, Try again later")}
//                                 className="rounded text-xl bg-blue-800 py-2 px-10 text-white hover:bg-blue-900 cursor-pointer"
//                             >
//                                 Download
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <div className="w-[75%] mx-auto mt-10 mb-10">
//                 <div>
//                     <p className="font-semibold text-xl mb-4">Movie Trailer</p>
//                 </div>
//                 <TrailerPlayer 
//                     movieSource={movie?.trailer}
//                 />
//             </div>

//             <div className="w-[75%] mx-auto mb-10">
//                 <div>
//                     <p className="font-semibold text-xl mb-4">Movie Info</p>
//                 </div>
//                 <div>
//                     <p>Movie Name: <strong>{movie?.primaryTitle}</strong></p>
//                     <p>Release Date: <strong>{movie?.releaseDate}</strong></p>
//                     <p>Content Rating: <strong>{movie?.contentRating}</strong></p>
//                     <div className="flex space-x-1">
//                         <p>genre:</p>
//                         <div className="flex space-x-1">
//                             {movie?.genres.map((genre, index) => (
//                                 <div className="" key={index}>
//                                     <strong>{genre}</strong>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     <p>Average Rating: <strong>{movie?.averageRating}</strong></p>
//                     <p>Runtime Minutes: <strong>{movie?.runtimeMinutes}</strong></p>
//                 </div>
//             </div>
//         </div>
//     </>
//   );
// }

// export default MovieDetail;




// components/MovieDetail.tsx
import React, { useState, useEffect } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import type { MovieType } from "../types";
import axios from "axios";
import TrailerPlayer from "../components/player2";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const ref = doc(db, "movie123", "4VFpLKwjfPUV0cLyGrPk");

interface MovieDetailsProps {
  movieId: string;
}

interface Movie {
  id: string;
  title: string;
  image: string;
  backdrop: string;
  genre: string[];
  year: string;
  duration: string;
  rating: string;
  description: string;
  trailer: string; // Your self-hosted trailer URL
}

const MovieDetail: React.FC<MovieDetailsProps> = ({ movieId }) => {
  // Sample movie data - replace with useQuery by movieId
//   const movie: Movie = {
//     id: movieId,
//     title: 'Edge of Tomorrow',
//     image: 'https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=800',
//     backdrop: 'https://images.pexels.com/photos/7991310/pexels-photo-7991310.jpeg?auto=compress&cs=tinysrgb&w=1600',
//     genre: ['Action', 'Sci-Fi'],
//     year: '2024',
//     duration: '1h 53m',
//     rating: '8.2',
//     description: 'Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha with him, but when he wakes up, he is still in that last moment. He is able to live that moment over and over.',
//     trailer: '/trailers/edge-of-tomorrow.mp4' // Your self-hosted trailer
//   };

    const params = useParams({from: "/movie/$id"});
    console.log("Movie ID from params:", params.id);

    const [movie, setMovie] = useState<MovieType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [downloadLink, setDownloadLink] = useState<string>("")

    const getDownloadUrl = async(movieName: string): Promise<void> => {
        const snap = await getDoc(ref)
        const data = snap.data()
        const downloadLnk = data ? data[movieName] : ""
        setDownloadLink(downloadLnk)
        console.log("The download link is " + downloadLnk)
        // return downloadLink
    }

    useEffect(() => {
        // Fetch movie details based on params.id
        const fetchMovieDetail = async () => {
            try {
                const res = await axios.get<MovieType[]>(`http://192.168.1.147:3000/movies`);
                const movi = res.data.find(m => m.id === params.id) || null;
                if (movi){
                    getDownloadUrl(movi.originalTitle)
                }
                setMovie(movi)
            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setIsLoading(false);
            }   
        };

        fetchMovieDetail();
    }, [params.id]);

    if (isLoading) {
        return <div>Loading movie details...</div>;
    }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Back Navigation + Breadcrumb */}
      <div className="fixed hidden md:block top-[70px] left-0 right-0 z-40 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to='/' className="p-2 hover:bg-slate-800 rounded-lg transition">
            ← Back to Home
          </Link>
          <span className="text-sm text-slate-400">Home / {movie?.originalTitle}</span>
        </div>
      </div>

      {/* Backdrop + Details */}
      <section 
        className="relative pt-20 pb-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${movie?.primaryImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-start">
            {/* Movie Poster */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-[2/3] rounded-3xl overflow-hidden border-4 border-slate-800/50 shadow-2xl">
                <img src={movie?.primaryImage} alt={movie?.originalTitle} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Movie Info */}
            <div>
              <h1 className="text-2xl lg:text-5xl font-bold mb-4">{movie?.originalTitle}</h1>
              
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <span className="px-3 py-1 bg-slate-800 rounded-full">{movie?.startYear}</span>
                <span className="px-3 py-1 bg-slate-800 rounded-full">{movie?.runtimeMinutes}</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full font-semibold">
                  {movie?.contentRating} ⭐
                </span>
                {movie?.genres.map(g => (
                  <span key={g} className="text-slate-400">{g}</span>
                ))}
              </div>

              {/* Play Trailer Button */}
              <div className="mb-8 space-x-2 space-y-2">
                <button 
                  onClick={() => document.getElementById('trailer-player')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-3xl font-bold text-sm md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all shadow-red-500/50"
                >
                  ▶️ Play Trailer
                </button>
                {downloadLink ? (
                        <a 
                            href={downloadLink}
                            className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-3xl font-bold text-sm md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                            >
                            {/* Download Icon - same size/style as ▶️ play icon */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10l-5.5 5.5m0 0L8 18l3.5-3.5M3.5 15.5L8 18l3.5-3.5M12 10v6m6-6l-5.5 5.5m0 0L16 18l-3.5-3.5M18.5 15.5L16 18l3.5-3.5" />
                            </svg>
                                Download
                        </a>
                    ) : (
                        <button 
                            onClick={() => alert("This video is not available for download yet, Try again later")}
                            className="inline-flex cursor-pointer items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-3xl font-bold text-sm md:text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
                            >
                            {/* Download Icon - same size/style as ▶️ play icon */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10l-5.5 5.5m0 0L8 18l3.5-3.5M3.5 15.5L8 18l3.5-3.5M12 10v6m6-6l-5.5 5.5m0 0L16 18l-3.5-3.5M18.5 15.5L16 18l3.5-3.5" />
                            </svg>
                                Download
                        </button>
                    )}
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">{movie?.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trailer Player Section */}
      <section id="trailer-player" className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Official Trailer</h2>
          <div className="rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-black">
            {/* <video
              controls
              poster={movie?.primaryImage}
              className="w-full h-full"
              src={movie?.trailer}
            >
              Your browser does not support the video tag.
            </video> */}
            <TrailerPlayer 
                movieSource={movie?.trailer}
            />
          </div>
          <p className="text-sm text-slate-500 text-center mt-4">
            Watch Trailer
          </p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/50 backdrop-blur rounded-3xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold mb-4">Cast & Crew</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Tom Cruise <span className="text-slate-500">• Major Cage</span></li>
              <li>Emily Blunt <span className="text-slate-500">• Rita</span></li>
            </ul>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur rounded-3xl p-8 border border-slate-800">
            <h3 className="text-xl font-bold mb-4">Similar Movies</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-[2/3] rounded-xl overflow-hidden bg-slate-800">
                <img src="/similar1.jpg" alt="Similar" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
              <div className="aspect-[2/3] rounded-xl overflow-hidden bg-slate-800">
                <img src="/similar2.jpg" alt="Similar" className="w-full h-full object-cover hover:scale-105 transition" />
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-3xl p-8 border border-slate-800 md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Reviews</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold">AB</div>
                <div>
                  <p className="font-semibold">Amazing action movie!</p>
                  <p className="text-sm text-slate-400">★★★★★</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;