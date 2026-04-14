import axios from 'axios';
import type { MovieType } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  return res.data;
};

export const fetchMovies = async (): Promise<MovieType[]> => {
  const res = await axios.get<MovieType[]>('https://imdb236.p.rapidapi.com/api/imdb/top250-movies', {
    headers: {
      'x-rapidapi-host': 'imdb236.p.rapidapi.com',
      'x-rapidapi-key': '20657b64demshc78cbd78d8755e2p1d2895jsnbd54218d4405'
    }
  });
  return res.data;
}

export const fetchTestMovies = async (): Promise<MovieType[]> => {
  const res = await axios.get<MovieType[]>('http://localhost:3000/movies');
  return res.data;
}

export const fetchStream = async(): Promise<any> => {
  const res = await axios.get<any>('https://streaming-availability.p.rapidapi.com/shows/tt0111161?country=us', {
    headers: {
      'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
      'x-rapidapi-key': '20657b64demshc78cbd78d8755e2p1d2895jsnbd54218d4405'
    },
    params: {
      country: 'us',
      service: 'netflix',
      type: 'movie',
      genre: '18',
      page: '1'
    }
  });
  return res.data;
}