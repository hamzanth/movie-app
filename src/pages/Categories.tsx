// Todos.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTodos, type Todo } from '../fetcher';
import { fetchStream } from '../fetcher';


export const About: React.FC = () => {
  // const {
  //   data,       // Todo[] | undefined
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery<Todo[]>({
  //   queryKey: ['todos'],
  //   queryFn: fetchTodos,
  // });
  // const {
  //   data,       // any | undefined
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery<any>({
  //   queryKey: ['stream'],
  //   queryFn: fetchStream,
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {(error as Error).message}</div>;

  return (
    <>  
        <h1>About Us</h1>
        <a href="https://www.youtube.com/watch?v=xyXX8LXiNJ4">watch thriller</a>
    </>
  );
};
