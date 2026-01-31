export default function CharacterList({ people, onSelect }) {
  return (
    <ul className="p-4 border-2 border-black ">
      {people.map((p) => (
        <li
          key={p.name}
          onClick={() => onSelect(p)}
          style={{ cursor: "pointer" }}
        >
          {p.name} – {p.height}cm
        </li>
      ))}
    </ul>
  );
}
