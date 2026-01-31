import { useState } from "react";
import Users from "./Users";

const UsersSortingDemo = () => {
    const [count, setCount] = useState(0);
    const [users] = useState(() => getUsers()); // assume it returns 10,000 users

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <Users list={users} />
        </>
    );
};


function getUsers() {
    const usernames = [];
    const count = 1000;

    for (let i = 0; i < count; i++) {
        const firstName = "CSEA";
        const lastName = "Workshop" + i;

        const username = `${firstName}${lastName}`;
        usernames.push(username);
    }

    return usernames;
}
export default UsersSortingDemo;
