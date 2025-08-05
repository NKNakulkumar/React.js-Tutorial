import series from '../api/series.json'; // Ensure this path is correct
import { List } from './List';

export const Netflix = () => {
  return (
    <div className="cards-container">
      {series?.length ? (
        series.map((curelem) => <List key={curelem.id} data={curelem} />)
      ) : (
        <li>No series available</li> // Fallback message if series is empty
      )}
</div>
  );
};