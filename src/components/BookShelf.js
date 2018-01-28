import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }
  
//Fix this!
  renderBooks() {
    this.state.books.map(book => (
      <li>
        <Book />
      </li>
    ))
  }

  render() {
    console.log(this.props.myBooks);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.renderBooks}
            {/* <li>
             <Book />
            </li>
            <li>
              <Book />
            </li> */}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
