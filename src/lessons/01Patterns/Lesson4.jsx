// Lists & Keys - Rendering arrays in React

export default function Lists() {
    const fruits = ["Apple", "Banana", "Orange", "Mango"];

    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 }
    ];

    return (
        <div>
            <h2>Rendering Lists</h2>

            {/* Basic list using .map() */}
            <h3>Fruits:</h3>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>

            <h3>Users:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - Age: {user.age}
                    </li>
                ))}
            </ul>

        </div>
    );
}
