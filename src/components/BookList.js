import React, { Component } from 'react';
import BookShelf from './BookShelf';

class BookList extends Component {
  render() {
    console.log(`BookList books = ${this.props.books}`)
    return (
      <div className="list-books-content">
        <BookShelf
          onAddBook={this.props.onAddBook}
          onRemoveBook={this.props.onRemoveBook}
          title="Currently Reading"
          books={this.props.books}/>
        <BookShelf
          onAddBook={this.props.onAddBook}
          onRemoveBook={this.props.onRemoveBook}
          title="Read"
          books={this.props.books}/>
        <BookShelf 
          onAddBook={this.props.onAddBook}
          onRemoveBook={this.props.onRemoveBook}
          title="Want to Read"
          books={this.props.books}/>
      </div>
    );
  }
}

export default BookList;
