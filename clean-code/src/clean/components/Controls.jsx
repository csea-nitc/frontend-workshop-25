export default function Controls({ search, onSearch, sortKey, onSort }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />

      <select value={sortKey} onChange={(e) => onSort(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="height">Sort by Height</option>
      </select>
    </div>
  );
}
