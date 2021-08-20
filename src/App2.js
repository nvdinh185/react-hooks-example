import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Example2 from './effect/Example2';
import Example from './effect/Example';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Example} />
        <Route path="/:id" component={Example2} />
      </Switch>
    </BrowserRouter>
  )
}