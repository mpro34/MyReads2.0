import React, { Component } from 'react';
import Book from './Book';
import SearchBar from './SearchBar';

class BookSearch extends Component {
  render() {
    return (
     <div className="search-books">
       <SearchBar />
       <div className="search-books-results">
         <ol className="books-grid">
          <li>
            <Book />
          </li>
          <li>
            <Book />
          </li>
         </ol>
       </div>
     </div>
    );
  };
}

export default BookSearch;
