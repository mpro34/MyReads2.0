import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI';
import shortid from 'shortid';


class Main extends Component {
  state = {
    books: []
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

  componentDidMount() {
    this.updateBookState();
  }

  componentWillReceiveProps() {
    this.updateBookState();
  }

  render() {
    const shelves = [
      {
        id: 'currentlyReading',
        title: 'Currently Reading',
        books: this.state.books.filter(book => book.shelf === "currentlyReading")
      },
      {
        id: 'read',
        title: 'Read',
        books: this.state.books.filter(book => book.shelf === "read")
      },
      {
        id: 'wantToRead',
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
              shelfId={shelf.id}
              title={shelf.title}
              books={shelf.books}
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
