import caroulStyles from "../cssfiles/slider2.module.css";
import { movieList } from "../lib";

const ImageSlider = () => {
  return (
    <div className={caroulStyles.sliderWrapper}>
      <div className={`${caroulStyles.sliderTrack} space-x-4`}>
        {[...movieList, ...movieList].map((movie, idx) => (
          <div key={idx} className={caroulStyles.sliderItem}>
            <img
              src={movie.thumbnailUrl}
              //   className="h-52 w-full"
              className={caroulStyles.sliderImg}
              alt="Image not found"
            />
            <div>
              <h2 className="font-semibold text-xl text-center">
                {movie.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
