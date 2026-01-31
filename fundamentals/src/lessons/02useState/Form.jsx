import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault(); 
        setSubmitted(true);
    }

    return (
        <div>
            <h2>Contact Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <button type="submit">Submit</button>
            </form>

            {submitted && (
                <p>
                    Submitted: {name} ({email})
                </p>
            )}
        </div>
    );
}
