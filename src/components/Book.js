import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(`Handling book change: ${e.target.value}`);
    this.setState = ({
      value: e.target.value
    })
    const targetBook = {
      title: this.props.title,
      authors: this.props.authors,
      imgUrl: this.props.imgUrl,
      shelfId: e.target.value,
      id: this.props.id,
      shelf: this.props.shelf
    }
    this.props.onAddBook(targetBook);
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imgUrl})` }}></div>
          <div className="book-shelf-changer">
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option defaultValue="none">None</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;
