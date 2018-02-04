import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI'


class Main extends Component {
  state = {
    books: []
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

  componentDidMount() {
    this.updateBookState();
  }

  componentWillReceiveProps() {
    this.updateBookState();
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf
          title="Currently Reading"
          shelfId="currentlyReading"
          books={this.state.books.filter(book => book.shelf === "currentlyReading")}
        />
        <BookShelf
          title="Read"
          shelfId="read"
          books={this.state.books.filter(book => book.shelf === "read")}
        />
        <BookShelf
          title="Want to Read"
          shelfId="wantToRead"
          books={this.state.books.filter(book => book.shelf === "wantToRead")}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  };
}

export default Main;
