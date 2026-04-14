// hooks/useMovies.ts
import { useQuery } from '@tanstack/react-query';
import type { MovieType } from '../types';



const fetchAllMovies = async (): Promise<MovieType[]> => {
  // Your API/backend endpoint that returns ALL movies
  const response = await fetch('http://192.168.1.147:3000/movies'); 
  return response.json();
};

export const useMovies = () => {
  return useQuery({
    queryKey: ['movies'], // Static key - fetches ONCE
    queryFn: fetchAllMovies,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
};
