import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        }
    });

    const tick = () => {
        setDate(new Date());
    }

    return (
        <>
            <h1>Hello, world!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
            Go to <Link to="/">Comment</Link>
        </>
    );
}

export default App