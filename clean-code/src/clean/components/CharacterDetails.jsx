export default function CharacterDetails({ person, onClose }) {
  if (!person) return null;

  return (
    <div style={{ marginTop: 20, border: "1px solid #ccc", padding: 10 }}>
      <h3>{person.name}</h3>
      <img src={person.image} alt={person.name} />
      <p>Gender: {person.gender}</p>
      <p>Birth Year: {person.birth_year}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
