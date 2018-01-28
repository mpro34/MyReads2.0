import React, { Component } from 'react';

class Book extends Component {
  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imgUrl.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select multiple={true} value={[
              'none',
              'currentlyReading',
              'wantToRead',
              'read'
            ]}
            onChange={this.handleChange}
          />
              {/* <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select> */}
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;
