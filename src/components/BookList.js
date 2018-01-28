import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
  render() {
    return (
      <div className="list-books-content">
         <BookShelf title="Currently Reading" myBooks={this.props.myBooks}/>
         <BookShelf title="Read" myBooks={this.props.myBooks}/>
         <BookShelf title="Want to Read" myBooks={this.props.myBooks}/>
      </div>
    );
  }
}

export default BookList;
