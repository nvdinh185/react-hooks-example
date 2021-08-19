import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Compnonent from './components/comment';
import Clock from './state/clock';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Compnonent} />
                <Route path="/:id" component={Clock} />
            </Switch>
        </BrowserRouter>
    )
}