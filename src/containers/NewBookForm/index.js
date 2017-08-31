/* jshint esversion: 6 */

import React, {Component} from 'react';
import { addBook } from '../../actions';
import { connect } from 'react-redux';

class NewBook extends Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    };
  }

  componentDidMount() {
    console.log('newbook container', this.props);
  }


  TitleChangeHandler(e){
    this.setState({
      title: e.target.value
    });
  }

  AuthorChangeHandler(e){
    this.setState({
      author: e.target.value
    });
  }

  SubmitButtonHandler(e){
    // console.log(e)
    let newBook = {
      title: this.state.title,
      author: this.state.author
    };
    //previously from App Container via props
    //this.props.addBookHandler(newBook);

    //running dispatch method from connect redux store
    this.props.addBook(newBook);
  }

  render(){
    // console.log("current state", this.state);
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

const mapDispatchToProps = (dispatch) =>{
  return {
    addBook: (book) =>{
      dispatch(addBook(book))
    }
  }
}

const ConnectedNewBookForm = connect(
  null,
  mapDispatchToProps
)(NewBook);

export default ConnectedNewBookForm;