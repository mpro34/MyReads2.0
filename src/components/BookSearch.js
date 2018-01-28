import React, { Component } from 'react';
//import Book from './Book';
import SearchBar from './SearchBar';
//import BookShelf from './BookShelf';

class BookSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }

  render() {
    return (
     <div className="search-books">
       <SearchBar />
     </div>
    );
  };
}

export default BookSearch;
