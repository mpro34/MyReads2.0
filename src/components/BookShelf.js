import React, { Component } from 'react';

import Book from './Book';
import * as BooksAPI from '../BooksAPI'
import shortid from 'shortid';

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shelfId: this.props.shelfId
    }
    this.updateBook = this.updateBook.bind(this);
  }

  updateBook = (targetBook) => {
    BooksAPI.update(targetBook, targetBook.shelfId)
      .catch((err) => {
        console.log(`Error in API update: ${err}`);
      });
    this.setState(prevBooks => {
      return { books: [...prevBooks, targetBook] }
    });
  }

  render() {
    return (
      <div className="bookshelf">
        {
          (this.props.title !== undefined) ?
          (<h2 className="bookshelf-title">{this.props.title}</h2>) :
          undefined
        }
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.filter((book) => (
              book.shelf === this.state.shelfId
            )).map((book) => (
              <li key={shortid.generate()}>
                <Book
                  onUpdateBook={this.updateBook}
                  title={book.title}
                  authors={book.authors}
                  imgUrl={book.imageLinks === undefined ? 'http://via.placeholder.com/128x193?text=No%20Cover' : book.imageLinks.thumbnail}
                  id={book.id}
                  shelf={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
