import { useLoaderData } from "react-router-dom";
import{Card} from './Card.jsx'
export const Movies = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <ul className="container mx-auto p-4 grid grid-cols-4  gap-7">
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie}/>;
        })}
    </ul>
  );
};