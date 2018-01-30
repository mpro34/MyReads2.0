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
    console.log(`req body: ${targetBook.id}, ${targetBook.shelf}`)
    BooksAPI.update(targetBook.id, targetBook.shelfId)
      .then(res => {
        console.log(res)
      });
  //  this.props.myfunc();
    // console.log(`Matching.... ${this.state.shelfId} TO ${targetBook.shelfId}`);
    // if (this.state.shelfId === targetBook.shelfId) {
    //   console.log(`Matched: ${targetBook.shelfId}`);
    // } else {
    //   console.log(`Not Matched: ${targetBook.shelfId}`);
    // }
    console.log(`Original state: ${JSON.stringify(this.state.books)}`)
    this.setState({
      books: this.state.books.concat([targetBook])
    })
    BooksAPI.getAll().then(books => {
      console.log(books)
    });

    console.log(`After Adding state: ${JSON.stringify(this.state.books)}`)

  //  this.props.onGetBook([{title: 'hello'}])
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
