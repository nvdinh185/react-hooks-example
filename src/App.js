import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Compnonent from './components/comment';
import Clock from './state/clock';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Compnonent />} />
                <Route path="/:id" element={<Clock />} />
            </Routes>
        </Router>
    )
}