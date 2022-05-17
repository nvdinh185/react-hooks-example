import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Comment from './components/comment';
import Clock from './state/clock';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Comment />} />
                <Route path="/clock" element={<Clock />} />
            </Routes>
        </Router>
    )
}