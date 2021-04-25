import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav"
import Form from "./employe/Form"
import List from "./employe/List"
import Edit from "./employe/Edit"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav/>
          <Switch>
           
            <Route path="/employe/index" exact component={List} />
            <Route path="/employe/form"  component={Form} />
            <Route path="/employe/edit/:id" component={Edit} />
          </Switch>
        </main>
      </Router>
    )
  }
}
// for <div id="main-customer"></div>
ReactDOM.render(<Main />, document.getElementById('main-employe'));