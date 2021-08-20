import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log(`You clicked ${count} times - Example2`);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <br />
            Go to <Link to="/">Example1</Link>
        </div>
    );
}

export default Example