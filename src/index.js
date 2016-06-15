import React from 'react'
import { render } from 'react-dom'

//import components

import App from './components/App'
import PhotoGrid from './components/PhotoGrid'
import Contact from './components/Contact'
import About from './components/About'

//import react-router deps

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const router = (
  //change url without reloading page
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      //match everything for /
      <IndexRoute component={PhotoGrid}></IndexRoute>
      //nested routes
      <Route path="/contact" component={Contact}></Route>
      <Route path="/about" component={About}></Route>
    </Route>
  </Router>
)

render(router, document.querySelector('#root'))
