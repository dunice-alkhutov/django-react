// var React = require('react')
// var ReactDOM = require('react-dom')
// var Button = require('react-bootstrap/lib/Button');

// import Button from 'react-bootstrap/lib'
import React from 'react'
import { render } from 'react-dom'
import App from './app'
import Board from './components/board'
import Boards from './components/boards'
import Dashboard from './pages/dashboard'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'

import { Card, Button, CardTitle, CardText, Row, Col  } from 'reactstrap';

render(
   <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Boards} />
      <Route path='boards/:board_id' component={Board} />
      <Route path='dashboard' component={Dashboard} />
      {/*<Route path='genre' component={Genre} />*/}
    </Route>
  </Router>,
  document.getElementById('container')
)


