import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css'

import BookSearch from './components/BookSearch';
import NoMatch from './components/NoMatch';
import Main from './components/Main';
import * as BooksAPI from './BooksAPI';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.updateBookState = this.updateBookState.bind(this);
    this.getBookShelf = this.getBookShelf.bind(this);
  }

  updateBookState() {
    BooksAPI.getAll()
      .then(books => (
        this.setState({
          books
        })
      ))
      .catch((err) => {
        console.log(`Error in getAll API call: ${err}`);
      });
  }

  getBookShelf() {
    return this.state.books;
  }

  componentDidMount() {
    this.updateBookState();
  }

// TODO: This is not needed, ensure everything works after removal
  componentWillReceiveProps() {
    this.updateBookState();
  }

  render() {
    return (
        <div className="app">
          <Switch>
            <Route exact path='/' render={() => (
              <Main
                books={this.state.books}
                updateBookState={this.updateBookState}
                getBookShelf={this.getBookShelf}
              />

            )} />
            <Route path='/search' render={() => (
              <BookSearch
                updateBookState={this.updateBookState}
                getBookShelf={this.getBookShelf}
              />

            )} />
            <Route component={NoMatch} status={404}/>
          </Switch>
        </div>
    );
  };
}

export default BooksApp
