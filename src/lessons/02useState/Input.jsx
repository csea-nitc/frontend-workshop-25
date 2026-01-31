import { useState } from "react";

export default function InputExample() {
    const [name, setName] = useState("");

    return (
        <section>
            <h2>Input State</h2>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>Hello {name}</p>
        </section>
    );
}