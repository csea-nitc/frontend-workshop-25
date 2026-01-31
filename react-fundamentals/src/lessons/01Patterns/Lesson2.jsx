import './styles.css';

function Greeting({ name }) {
    return <h2>Hello {name}</h2>;
}

export default function Props() {
    return (
        <div>
            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />
        </div>
    );
}
