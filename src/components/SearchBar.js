import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'

import BookShelf from './BookShelf';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      books: []
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(`Search TERMS: ${this.state.term}`)
    console.log(`Search Books: ${this.state.books}`)
    //1. Issue API search here
    const searchRes = BooksAPI.search(this.state.term);
    searchRes.then(books => (
      this.setState({
        books
      })
    //  console.log(`Books in Search: ${books}`)
    ));
    //2. Clear the search field after api call is issued?
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <form onSubmit={this.onFormSubmit} className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </form>
        </div>
        <div className="search-books-results">
          <BookShelf books={this.state.books}/>
        </div>
      </div>
    );
  };
}

export default SearchBar;
