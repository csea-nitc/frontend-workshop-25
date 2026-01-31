export default function State() {
    let count = 0;

    const increment = () => {
        count++;
        console.log(count);
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
