import React from 'react'
import { Route, Link } from 'react-router-dom';
//import * as BooksAPI from './BooksAPI'
import './App.css'

import BookList from './components/BookList';
import BookSearch from './components/BookSearch';


class BooksApp extends React.Component {
  state = {
    myBooks: [] //Array of Book Objects
  }

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookList myBooks={this.state.myBooks}/>
            </div>
          )}/>

          <Route path='/search' component={BookSearch} />
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
    );
  };
}

export default BooksApp
