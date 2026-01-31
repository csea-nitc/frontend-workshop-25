import { useEffect, useState } from "react";

export default function StarWarsDashboard() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState(null);

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
        setError("API failed");
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    let result = [...people];

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    result.sort((a, b) => {
      if (sortKey === "name") return a.name.localeCompare(b.name);
      if (sortKey === "height") return parseInt(a.height) - parseInt(b.height);
      return 0;
    });

    setFilteredPeople(result);
  }, [people, search, sortKey]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Star Wars Dashboard</h1>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="height">Sort by Height</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul className="p-4 border-2 border-black rounded-md mt-4">
        {filteredPeople.map((p) => (
          <li
            key={p.name}
            onClick={() => setSelectedPerson(p)}
            style={{ cursor: "pointer" }}
          >
            {p.name} – {p.height}cm
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 10 }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>

      {selectedPerson && (
        <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 10 }}>
          <h3>{selectedPerson.name}</h3>
          <p>Gender: {selectedPerson.gender}</p>
          <p>Birth Year: {selectedPerson.birth_year}</p>
          <button onClick={() => setSelectedPerson(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
