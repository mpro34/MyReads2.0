import React from 'react'
import { Route, Link } from 'react-router-dom';
//import * as BooksAPI from './BooksAPI'
import './App.css'

import Book from './components/Book';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';


class BooksApp extends React.Component {
  state = {
    books: [
      <Book />,
      <Book />
    ] //Array of Book Objects
  }

  render() {
    console.log(`Start = ${this.state.books}`)
    return (
        <div className="app">
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookList books={this.state.books}/>
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
