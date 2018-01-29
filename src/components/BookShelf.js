import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  // addBook(sId) {
  //   console.log(`Add book = ${this.state}`);
  //   // if (this.props.shelfId === sId) {
  //   //   console.log(`Matched ShelfId = ${this.props.shelfId}`);
  //   // }
  // }
  //
  // removeBook(sId) {
  //   console.log('del book');
  // }

  render() {
//    console.log(`State Books List = ${JSON.stringify(this.props.books)}`);
    return (
      <div className="bookshelf">
        {
          (this.props.title !== undefined) ?
          (<h2 className="bookshelf-title">{this.props.title}</h2>) :
          undefined
        }
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, index) => (
              <li key={index}>
                <Book
                  onAddBook={this.props.onAddBook}
                  onRemoveBook={this.props.onRemoveBook}
                  title={book.title}
                  authors={book.authors}
                  imgUrl={book.imageLinks}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
