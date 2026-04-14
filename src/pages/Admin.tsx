import React, { useEffect, useState } from "react";

import { doc, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import AddMovieModal from "../components/addMovieModal";

const ref = doc(db, "movie123", "4VFpLKwjfPUV0cLyGrPk");
// const snap = await getDoc(ref);

// if (snap.exists()) {
//   console.log(snap.data());
// }



const Admin = () => {
    const [data, setData] = useState<any>(null);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [movieName, setMovieName] = useState<string>("");
    const [movieId, setMovieId] = useState<string>("");

    const fetchData = async () => {
        const snap = await getDoc(ref);
        if (snap.exists()) {
            setData(snap.data());
        }
    };

    useEffect(() => {  
        fetchData();
    }, []);

    const handleDelete = async (movieName: string): Promise<void> => {
        console.log("Deleting movie recored")
        await updateDoc(ref, {
            [movieName]: deleteField(),
        });
        fetchData()
    }

    return (
        <div className="px-10 pt-24 relative">
            {showAddModal && (
                <div className="fixed bg-black opacity-80 top-0 left-0 w-full h-full z-10"></div>
            )}
            {showAddModal && (
                <AddMovieModal 
                    movieName={movieName}
                    movieId={movieId}
                    setMovieName={setMovieName}
                    setMovieId={setMovieId} 
                    setShowAddModal={setShowAddModal}
                    fetchData={fetchData}
                />
            )}
            <h1 className="text-blue-600 text-3xl font-bold mt-3 mb-4 text-center">
                Admin Page
            </h1>
            <h2 className="font-semibold">Manage your content</h2>
            <div>
                <button className="rounded shadow cursor-pointer bg-green-500 hover:bg-green-600 transition-all duration-500 text-gray-100 py-1 px-4 font-semibold text-sm"
                    onClick={() => setShowAddModal(true)}
                >
                    add movie
                </button>
            </div>
            {data ? Object.keys(data).map((key, index) => (
                <div key={index} className="my-3">
                    <div className="">
                        <div>
                            <strong>{key}:</strong> {JSON.stringify(data[key]).slice(0,50)}...
                        </div>
                        <div className="flex space-x-2">
                            <button 
                                className="rounded shadow cursor-pointer bg-blue-500 hover:bg-blue-600 transition-all duration-500 text-gray-100 py-1 px-4 font-semibold text-sm"
                                onClick={() => {
                                    setMovieName(key)
                                    setMovieId(data[key])
                                    setShowAddModal(true)
                                }}
                                >
                                update
                            </button>
                            <button 
                                className="rounded shadow cursor-pointer bg-red-500 hover:bg-red-600 transition-all duration-500 text-gray-100 py-1 px-4 font-semibold text-sm"
                                onClick={()=> handleDelete(key)}
                                >
                                delete
                            </button>
                        </div>
                    </div>
                </div>
            )) : (
                <div>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
}

export default Admin;