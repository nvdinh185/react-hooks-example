import React from 'react';
import { Link } from "react-router-dom";

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date()
        };
    }

    tick() {
        this.setState({ count: this.state.count + 1, date: new Date() });
    }

    timerID;
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 3000);
        document.title = `You clicked ${this.state.count} times`;
        console.log(`You clicked ${this.state.count} times1 - Example`);
    }

    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
        console.log(`You clicked ${this.state.count} times2 - Update`);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <p>You clicked {this.state.count} times</p>
                <br />
                Go to <Link to="/Example2">Example2</Link>
            </div>
        );
    }
}

export default Example