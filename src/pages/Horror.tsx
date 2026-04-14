import React, { useContext, useMemo } from "react";
import { useMovies } from "../hooks/useMovies";
import { SearchContext } from "../context/searchContext";


const Horror = () => {
    const { data: allMovies = [], isLoading, isError, error } = useMovies();
    const { searchTerm } = useContext(SearchContext)!
    // Filter locally - super fast!
    const filteredMovies = useMemo(() => {
    if(searchTerm){
        return allMovies.filter(movie =>
            movie.genres.includes("Horror") && movie.originalTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    else{
        return allMovies.filter(movie =>
            movie.genres.includes("Horror")
        );
    }
    }, [allMovies, searchTerm]);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {(error as Error).message}</div>;

    return (
        <div className="pt-24">
            <h1 className="text-center text-xl">Horror Movies</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 px-4 mt-10">
                {filteredMovies?.slice(0, 100).map((movie, index) => (
                <div key={index} className="rounded">
                    <a href={`/movie/${movie.id}`}>
                        <div className="flex justify-center">
                        <img
                            src={movie.thumbnails[2].url}
                            className="h-52 w-full"
                            alt="Image not found"
                        />
                        </div>
                        <div className="py-2 px-3">
                            <h2 className="font-bold text-lg text-center">{movie.primaryTitle}</h2>
                        </div>
                    </a>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Horror