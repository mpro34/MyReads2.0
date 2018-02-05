import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

import BookShelf from './BookShelf';
import shortid from 'shortid';


class Main extends Component {
  render() {
    const shelves = [
      {
        shelfId: 'currentlyReading',
        title: 'Currently Reading',
        books: this.props.books.filter(book => book.shelf === "currentlyReading")
      },
      {
        shelfId: 'read',
        title: 'Read',
        books: this.props.books.filter(book => book.shelf === "read")
      },
      {
        shelfId: 'wantToRead',
        title: 'Want to Read',
        books: this.props.books.filter(book => book.shelf === "wantToRead")
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
              onUpdateBookState={this.props.updateBookState}
              onRenderBooks={this.props.getBookShelf}
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
