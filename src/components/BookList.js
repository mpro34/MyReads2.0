import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
  render() {
    console.log(`BookList books = ${this.props.books}`)
    return (
      <div className="list-books-content">
         <BookShelf title="Currently Reading" books={this.props.books}/>
         <BookShelf title="Read" books={this.props.books}/>
         <BookShelf title="Want to Read" books={this.props.books}/>
      </div>
    );
  }
}

export default BookList;
