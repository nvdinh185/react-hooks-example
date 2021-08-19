import { useState } from "react";

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up!</h1>;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <>
            <Greeting isLoggedIn={isLoggedIn} />
            {
                isLoggedIn
                    ? <LogoutButton onClick={handleLogoutClick} />
                    : <LoginButton onClick={handleLoginClick} />
            }
        </>
    );
}

export default App