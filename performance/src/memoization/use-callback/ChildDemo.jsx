import { useCallback, useState } from "react";
import Child from "./Child";
const ChildDemo = () => {
    const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     console.log("Child Clicked!");
    // };

    const handleClick = useCallback(() => {
        console.log("Child Clicked!");
    }, []);

    // functions reference changes on every render
    // causes Child to re-render even if it's memoized
    // So we use useCallback to memoize the function 

    console.log("App Rendered");

    return (
        <div className="p-2 border rounded">
            <p>Count: {count}</p>
            <div className="space-x-2">
                <button onClick={() => setCount(count + 1)}>Increment</button>

                <Child onClick={handleClick} />
            </div>
        </div>
    );
};

export default ChildDemo;
