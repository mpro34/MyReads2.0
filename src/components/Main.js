import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI';
import shortid from 'shortid';


class Main extends Component {
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

  getBookShelf(bookId) {
    console.log(`Book Id = ${bookId}`);
    return this.state.books;
  }

  componentDidMount() {
    this.updateBookState();
  }

  componentWillReceiveProps() {
    this.updateBookState();
  }

  render() {
    const shelves = [
      {
        shelfId: 'currentlyReading',
        title: 'Currently Reading',
        books: this.state.books.filter(book => book.shelf === "currentlyReading")
      },
      {
        shelfId: 'read',
        title: 'Read',
        books: this.state.books.filter(book => book.shelf === "read")
      },
      {
        shelfId: 'wantToRead',
        title: 'Want to Read',
        books: this.state.books.filter(book => book.shelf === "wantToRead")
      }
    ]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {
          shelves.map(shelf => (
            <BookShelf
              key={shortid.generate()}
              shelfId={shelf.shelfId}
              title={shelf.title}
              books={shelf.books}
              onUpdateBookState={this.updateBookState}
              onRenderBooks={this.getBookShelf}
            />
          ))
        }
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  };
}

export default Main;
