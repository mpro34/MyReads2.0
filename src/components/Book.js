import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rating: [false, false, false, false, false]
    }
    this.handleChange = this.handleChange.bind(this);
  //  this.buttonPress = this.buttonPress.bind(this);
  }

  handleChange(e) {
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
    this.props.onUpdateBook(targetBook);
  }

  // buttonPress(e) {
  //   console.log(`Button Pressed: ${e.target.checked}`);
  //   //this.state.rating[index] = true;
  //   this.setState({
  //     rating: true
  //   })
  //   console.log(`new rating: ${this.state.rating}`);
  // }

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
      {/*    <div className="rating">
            <input onChange={this.buttonPress} checked={this.state.rating[0]} type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!"></label>
            <input onChange={this.buttonPress} checked={this.state.rating[0]} type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good"></label>
            <input onChange={this.buttonPress} checked={this.state.rating[0]} type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh"></label>
            <input onChange={this.buttonPress} checked={this.state.rating[1]} type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad"></label>
            <input onChange={this.buttonPress} checked={this.state.rating[0]} type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time"></label>
          </div>  */}
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;
