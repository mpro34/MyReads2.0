import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css'

import BookSearch from './components/BookSearch';
import NoMatch from './components/NoMatch';
import Main from './components/Main';


class BooksApp extends Component {
  render() {
    return (
        <div className="app">
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/search' component={BookSearch} />
            <Route component={NoMatch} status={404}/>
          </Switch>
        </div>
    );
  };
}

export default BooksApp
