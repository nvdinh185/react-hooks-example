import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Example2 from './effect/Example2';
import Example from './effect/Example';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Example />} />
        <Route path="/:id" element={<Example2 />} />
      </Routes>
    </Router>
  )
}