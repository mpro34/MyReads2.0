import React from 'react'
import { Route, Link } from 'react-router-dom';
import './App.css'

import BookShelf from './components/BookShelf';
import BookSearch from './components/BookSearch';
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => (
        this.setState({
          books
        })
      ));
  }

  componentWillUpdate() {
    BooksAPI.getAll()
      .then(books => (
        this.setState({
          books
        })
      ));
  }

  render() {
    return (
        <div className="app">
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf
                title="Currently Reading"
                shelfId="currentlyReading"
                books={this.state.books}
              />
              <BookShelf
                title="Read"
                shelfId="read"
                books={this.state.books}
              />
              <BookShelf
                title="Want to Read"
                shelfId="wantToRead"
                books={this.state.books}
              />
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}/>

          <Route path='/search' component={BookSearch} />
        </div>
    );
  };
}

export default BooksApp
