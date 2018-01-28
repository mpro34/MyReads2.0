import React, { Component } from 'react';
import Book from './Book';
import SearchBar from './SearchBar';
import BookShelf from './BookShelf';

class BookSearch extends Component {
  render() {
    return (
     <div className="search-books">
       <SearchBar />
       <div className="search-books-results">
         <BookShelf />
       </div>
     </div>
    );
  };
}

export default BookSearch;
