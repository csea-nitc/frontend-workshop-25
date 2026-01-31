// Event Handling - How to respond to user interactions

export default function Events() {
    // Method 1: Define function separately (RECOMMENDED for complex logic)
    function handleClick() {
        alert("Button clicked!");
    }

    // Method 2: Arrow function for simple logic
    const handleHover = () => {
        console.log("Mouse entered!");
    };

    // Method 3: Function with parameters
    function greet(name) {
        alert(`Hello, ${name}!`);
    }

    // Method 4: Accessing event object
    function handleInput(event) {
        // event.target gives you the element that triggered the event
        console.log("You typed:", event.target.value);
    }

    return (
        <div>
            <h2>Event Handling</h2>

            <button onClick={handleClick}>
                Click Me
            </button>

            <button onClick={() => console.log("Inline click!")}>
                Inline Handler
            </button>

            <button onClick={() => greet("Alice")}>
                Greet Alice
            </button>
            <button onClick={() => greet("Bob")}>
                Greet Bob
            </button>

            <div
                onMouseEnter={handleHover}
                onMouseLeave={() => console.log("Mouse left!")}
                style={{
                    padding: "20px",
                    backgroundColor: "lightblue",
                    margin: "10px 0"
                }}
            >
                Hover over me!
            </div>

            <input
                type="text"
                placeholder="Type something..."
                onChange={handleInput}
            />

        </div>
    );
}
