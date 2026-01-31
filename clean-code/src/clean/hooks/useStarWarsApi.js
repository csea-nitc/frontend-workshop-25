import { useEffect, useState } from "react";

export function useStarWarsApi(page) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch characters");
        setLoading(false);
      });
  }, [page]);

  return { people, loading, error };
}
