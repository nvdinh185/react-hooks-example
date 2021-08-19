import { useState } from "react";

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

function App() {
    const [showWarning, setShowWarning] = useState(true);

    const handleToggleClick = () => {
        setShowWarning(!showWarning);
    }

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

export default App