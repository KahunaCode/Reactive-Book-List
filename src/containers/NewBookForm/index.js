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

  render(){
    console.log("this is my new book");
    return(
        <div className="book-form">
          <p>this is the new book form</p>
          <input type="text"
          name="title"


          />


        </div>
      )
  }

}


export default NewBook;