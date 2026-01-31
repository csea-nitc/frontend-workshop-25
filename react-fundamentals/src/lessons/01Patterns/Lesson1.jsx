export default function Jsx() {
    const name = "React Student";

    return (
        <div>
            <h1>Hello {name}</h1>

            <p>2 + 2 = {2 + 2}</p>

            <p className="highlight">
                JSX uses className instead of class
            </p>

            <div
                style={{
                    padding: "10px",
                    backgroundColor: "lightblue"
                }}
            >
                Inline styles are objects
            </div>
        </div>
    );
}
