/* jshint esversion: 6 */

import React, {Component} from 'react';

class NewBook extends Component{
  constructor(props) {
    super(props);

    this.setState({
      bookTitle: '',
      bookAuthor: ''
    });
  }

  TitleChangeHandler(e){
    this.setState({
      bookTitle: e.target.value
    });
  }

  AuthorChangeHandler(e){
    this.setState({
      bookAuthor: e.target.value
    });
  }

  SubmitButtonHandler(e){
    console.log(e)
    let newBook = {
      bookTitle: this.state.bookTitle,
      bookAuthor: this.state.bookAuthor
    };
    console.log('my new book', newBook)
    this.props.addBookHandler(newBook);
  }

  render(){
    console.log("current state", this.state);
    return(
        <div className="book-form">
          <p>Add a new book</p>
          <label htmlFor="new-book-title">Title:</label>
          <input type="text"
          name="title"
          onChange={this.TitleChangeHandler.bind(this)}
          />
          <label htmlFor="new-book-author">Author:</label>
          <input type="text"
          name="author"
          onChange={this.AuthorChangeHandler.bind(this)}
          />
          <button onClick={this.SubmitButtonHandler.bind(this)}>Submit</button>

        </div>
      )
  }

}


export default NewBook;