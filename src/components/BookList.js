import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <ol className="books-grid">
        <li>
         <Book />
        </li>
        <li>
          <Book />
        </li>
      </ol>
    );
  }
}

export default BookList;
