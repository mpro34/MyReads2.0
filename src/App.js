import React from 'react'
import { Route, Link } from 'react-router-dom';
//import * as BooksAPI from './BooksAPI'
import './App.css'

//import Book from './components/Book';
import BookList from './components/BookList';
import BookSearch from './components/BookSearch';


class BooksApp extends React.Component {
  state = {
    books: [
      // <Book
      //   title='Test Book 1'
      //   authors='Test Authors 1' imgUrl={'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}/>,
      // <Book     imgUrl={'http://books.google.com/books/content?id=bUybAgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}
      // title={'Test Book 2'}
      // authors={'Test Authors 2'}
      // />
    ] //Array of Book Objects
  }

  addBook = (book) => {
    console.log('Adding Book...');
    // this.setState((state) => ({
    //   books: state.books.push(book)
    // }))
  }

  removeBook = (book) => {
    console.log('Removing Book...');
    // this.setState((state) => ({
    //   books: state.books.filter((b) => b.id !== book.id)
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
              <BookList onAddBook={this.addBook} onRemoveBook={this.removeBook} books={this.state.books}/>
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
