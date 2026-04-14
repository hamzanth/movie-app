// export type MovieType = {
//   name: string;
//   description: string;
//   thumbnailUrl: string;
// };


type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type ProductionCompany = {
  id: string;
  name: string;
};

export type MovieType = {
  id: string;
  url: string;

  primaryTitle: string;
  originalTitle: string;
  type: "movie" | "tvSeries" | "short" | string;

  description: string;

  primaryImage: string;
  thumbnails: Thumbnail[];

  trailer: string;

  contentRating: string;

  startYear: number;
  endYear: number | null;

  releaseDate: string; // ISO date string

  interests: string[];
  countriesOfOrigin: string[];
  externalLinks: string[];
  spokenLanguages: string[];
  filmingLocations: string[];

  productionCompanies: ProductionCompany[];

  budget: number;
  grossWorldwide: number;

  genres: string[];

  isAdult: boolean;

  runtimeMinutes: number;

  averageRating: number;
  numVotes: number;
  metascore: number;
};
