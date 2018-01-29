import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      shelfId: this.props.shelfId
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

  addBook = (targetBook) => {
    console.log(`Adding Book... ${JSON.stringify(targetBook)}`);
    console.log(`Matching.... ${this.state.shelfId} TO ${targetBook.shelfId}`);
    if (this.state.shelfId === targetBook.shelfId) {
      console.log(`Matched: ${targetBook.shelfId}`);
    } else {
      console.log(`Not Matched: ${targetBook.shelfId}`);
    }
    // this.setState((state) => ({
    //   books: state.books.push(book)
    // }))
  }

  removeBook = (targetBook) => {
    console.log(`Removing Book... ${JSON.stringify(targetBook)}`);
    // this.setState((state) => ({
    //   books: state.books.filter((b) => b.id !== book.id)
    // }))
  }

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
                  onAddBook={this.addBook}
                  onRemoveBook={this.removeBook}
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
