import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: this.props.books
    }
  }

//Fix this!
  renderBooks() {
    this.state.books.map(book => (
      <li>
        <Book />
      </li>
    ))
  }

  render() {
    console.log(`State Books List = ${this.state.books}`);
    return (
      <div className="bookshelf">
        {
          (this.props.title !== undefined) ?
          (<h2 className="bookshelf-title">{this.props.title}</h2>) :
          undefined
        }
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books.map((book, index) => (
              <li key={index}>
                {book}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
