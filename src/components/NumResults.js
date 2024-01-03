export default function NumResults({ movies }) {
  return (
    <>
      <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p>
      <p className="num-result-small">{movies.length}</p>
    </>
  );
}
