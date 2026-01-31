import { useMemo } from "react";

function Users({ list }) {
    console.log("Users component rendered");

    const sorted = list.sort((a, b) => a.localeCompare(b));
    console.log("Sorting list");

    // sorting is an expensive operation
    // we don't want to sort the list on every render
    // we can use useMemo to memoize the sorted list

    // const sorted = useMemo(() => {
    //     console.log("Sorting expensive list…");

    //     // [...list] -> copy of list
    //     return [...list].sort((a, b) => a.localeCompare(b));

    // }, [list]);

    return (
        <>
            <h2>Sorted Users</h2>
            {sorted.map((user, index) => (
                <div key={index}>{user}</div>
            ))}
        </>
    );
}

export default Users;
