import { useState } from "react";
import { useStarWarsApi } from "../hooks/useStarWarsApi";
import { usePeopleFilter } from "../hooks/usePeopleFilter";
import Controls from "./Controls";
import CharacterList from "./CharacterList";
import CharacterDetails from "./CharacterDetails";

export default function StarWarsContainer() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("name");
  const [selected, setSelected] = useState(null);

  const { people, loading, error } = useStarWarsApi(page);
  const filteredPeople = usePeopleFilter(people, search, sortKey);

  return (
    <div style={{ padding: 20 }}>
      <h1>Star Wars Dashboard</h1>

      <Controls
        search={search}
        onSearch={setSearch}
        sortKey={sortKey}
        onSort={setSortKey}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <CharacterList people={filteredPeople} onSelect={setSelected} />

      <div style={{ marginTop: 10 }}>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>

      <CharacterDetails person={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
