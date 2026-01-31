import { useEffect, useState } from "react";


export default function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);

        return () => {
            clearInterval(id);
            console.log("Timer cleared");
        };
    }, []);

    return (
        <div>
            {seconds}
        </div>
    )

}
