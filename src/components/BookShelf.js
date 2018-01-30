import React, { Component } from 'react';

import Book from './Book';
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      shelfId: this.props.shelfId
    }
    console.log(`bs props: ${JSON.stringify(this.props)}`)
    console.log(`bs state: ${JSON.stringify(this.state)}`)
    this.addBook = this.addBook.bind(this);

  }

  addBook = (targetBook) => {
    console.log(`Adding Book... ${JSON.stringify(targetBook)}`);
    console.log(`req body: ${targetBook.id}, ${targetBook.shelf}`)
    BooksAPI.update(targetBook, targetBook.shelfId)
      .then(res => {
        console.log(res)
      });
    console.log(`Original state: ${JSON.stringify(this.state.books)}`)
    this.setState({
      books: this.state.books.concat([targetBook])
    })
    BooksAPI.getAll().then(books => {
      console.log(books)
    });
    this.forceUpdate();
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
            )).map((book, index) => (
              <li key={index}>
                <Book
                  onAddBook={this.addBook}
                  title={book.title}
                  authors={book.authors}
                  imgUrl={book.imageLinks.thumbnail}
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
