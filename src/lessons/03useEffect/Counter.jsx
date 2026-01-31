import { useState, useEffect } from "react";
import TimerExample from "./Lesson6";

export default function Lesson3() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component rendered or updated");
    });

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    const message =
        count === 0 ? "Count is zero" : `Count is ${count}`;

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <div>
            <h1>Lesson 3: useEffect Hook</h1>

            <div style={{ marginBottom: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
                <h2>useEffect with Counter</h2>
                <p>{message}</p>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <p style={{ fontSize: "12px", color: "#666", marginTop: "10px" }}>
                    Check the console to see useEffect in action!
                </p>
            </div>

            <TimerExample />
        </div>
    );
}
