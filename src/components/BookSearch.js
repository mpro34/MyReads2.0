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
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormInput = this.onFormInput.bind(this);
  }

// TODO: Merge onInputChange and onFormInput.
// TODO: Change setState call with term setState so it's not stale entry.
// TODO: Change setState call with books setState so it's not stale entry.
//  https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973
  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  onFormInput(e) {
    e.preventDefault();
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

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          {/* TODO: Only use onChange with the merged function above.*/}
          <form onSubmit={this.onFormInput} onChange={this.onFormInput} className="search-books-input-wrapper">
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
