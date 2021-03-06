import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI'
import BookShelf from './BookShelf';

class BookSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      books: []
    }
    this.onFormInput = this.onFormInput.bind(this);
    this.searchForBook = this.searchForBook.bind(this);
  }

  searchForBook() {
    BooksAPI.search(this.state.term)
      .then(books => (
        this.setState({
          books
        })
      ))
      .catch((err) => {
        console.log(`Error occurred in API search: ${err}`);
      });
  }

  onFormInput(e) {
    console.log(`on form input: ${JSON.stringify(this.state)}`);
    e.preventDefault();
    this.setState({ term: e.target.value }, this.searchForBook)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <form onChange={this.onFormInput} className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </form>
        </div>
        <div className="search-books-results">
          <BookShelf
            books={this.state.books}
            onRenderBooks={this.props.getBookShelf}
            onUpdateBookState={this.props.updateBookState}
          />
        </div>
      </div>
    );
  };
}

export default BookSearch;
