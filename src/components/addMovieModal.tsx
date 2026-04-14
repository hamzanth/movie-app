import React from "react";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const ref = doc(db, "movie123", "4VFpLKwjfPUV0cLyGrPk");

type PropTypes = {
    movieName: string;
    movieId: string;
    setMovieName: React.Dispatch<React.SetStateAction<string>>;
    setMovieId: React.Dispatch<React.SetStateAction<string>>;
    setShowAddModal: React.Dispatch<React.SetStateAction<boolean>>;
    fetchData:() => Promise<void>;
}

const AddMovieModal = ({ movieName, movieId, setMovieName, setMovieId, setShowAddModal, fetchData }: PropTypes) => {
    const handleAddMovie = async (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to add movie goes here
        if (movieName.trim() === "" || movieId.trim() === "") {
            alert("Please fill in all fields.");
            return;
        }
        else {
            await updateDoc(ref, {
                [movieName]: movieId,
                });
            alert("Movie Added: " + movieName + " with ID: " + movieId);
            setMovieName("");
            setMovieId("");
            setShowAddModal(false);
            fetchData()
        }
    };
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="relative bg-white p-6 rounded shadow-lg w-96">
                <button 
                    onClick={() => setShowAddModal(false)}
                    className="p-2 absolute top-5 right-5 text-red-500 hover:bg-slate-800/50 rounded-xl transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6 text-slate-300 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h2 className="text-xl font-bold mb-4">Add New Movie</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Movie Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" value={movieName} onChange={(e) => setMovieName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Download Link</label>
                        <input type="text" className="w-full px-3 py-2 border rounded" value={movieId} onChange={(e) => setMovieId(e.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            className="bg-blue-500 text-white px-4 py-2 cursor-pointer transition-all duration-500 rounded hover:bg-blue-600"
                            onClick={handleAddMovie}
                        >
                            Add Movie
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddMovieModal;