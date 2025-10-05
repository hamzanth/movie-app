import { movieList } from "../lib";
import ImageSlider from "../components/imageSlider";

export function Home() {
  return (
    <>
      <div className="px-4">
        <h1 className="text-blue-600 text-3xl font-bold mt-3 mb-4">
          Latest Trending Movies
        </h1>
      </div>
      <ImageSlider />
      {/* <div className="grid grid-cols-4 gap-4 px-4">
        {movieList.map((movie, index) => (
          <div key={index} className="rounded">
            <div className="flex justify-center">
              <img
                src={movie.thumbnailUrl}
                className="h-52 w-full"
                alt="Image not found"
              />
            </div>
            <div className="py-2 px-3">
              <h2 className="font-bold text-lg text-center">{movie.name}</h2>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
