export default function Conditional() {
    const isLoggedIn = true;
    const notifications = 5;

    return (
        <div>
            <h2>Conditional Rendering Patterns</h2>

            {/* Pattern 1: Ternary operator (condition ? true : false) */}
            <div>
                <h3>Ternary:</h3>
                <p>{isLoggedIn ? "Welcome back!" : "Please log in"}</p>
            </div>

            {/* Pattern 2: && operator (condition && element) */}
            <div>
                <h3>AND Operator:</h3>
                {notifications > 0 && (
                    <p>You have {notifications} new notifications</p>
                )}
            </div>

        </div>
    );
}
