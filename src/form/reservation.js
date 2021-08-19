import { useState } from "react";

function Reservation() {
    const [state, setState] = useState({ isGoing: true, numberOfGuests: 2 });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value
        });

        target.type === 'checkbox' ? console.log(state.isGoing) : console.log(state.numberOfGuests);
    }

    return (
        <form>
            <label>
                Is going:
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={state.isGoing}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Number of guests:
                <input
                    name="numberOfGuests"
                    type="number"
                    value={state.numberOfGuests}
                    onChange={handleInputChange}
                />
            </label>
        </form>
    );
}

export default Reservation