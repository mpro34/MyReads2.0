import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
  render() {
    return (
      <div className="list-books-content">
         <BookShelf title="Currently Reading"/>
      </div>
    );
  }
}

export default BookList;
