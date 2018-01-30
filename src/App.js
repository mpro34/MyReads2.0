import React from 'react'
import { Route, Link } from 'react-router-dom';
//import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelf from './components/BookShelf';
//import BookList from './components/BookList';
import BookSearch from './components/BookSearch';


class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
    this.getBook = this.getBook.bind(this);
  }

  getBook = (selectedBooks) => {
    console.log(`Adding App.js... ${selectedBooks}`);
    // this.setState((state) => ({
    //   books: state.books.push(book)
    // }))
  }

  render() {
  //  console.log(`Start = ${JSON.stringify(this.state.books)}`)
    return (
        <div className="app">
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
            {/*  <BookList onAddBook={this.addBook} onRemoveBook={this.removeBook} books={this.state.books}/>  */}
              <BookShelf
                onGetBook={this.getBook}
                title="Currently Reading"
                shelfId="currentlyReading"
                books={[{
                  "title": "Artificial Intelligence",
                  "authors": ["John Haugeland"],
                  "imageLinks": "http://books.google.com/books/content?id=zLFSPdIuqKsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}]}

              />
              <BookShelf
                onGetBook={this.getBook}
                title="Read"
                shelfId="read"
                books={this.state.books}

              />
              <BookShelf
                onGetBook={this.getBook}
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
