export default function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p title="IMDB rating">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p title="user rating">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p title="duration">
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          ❌
        </button>
      </div>
    </li>
  );
}
