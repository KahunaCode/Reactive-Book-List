/* jshint esversion: 6 */

import React, { Component } from 'react';

class BookList extends Component {
  constructor(props) {
    super()

  }

  render(){
    console.log('render method', this.props);
    return (
      <ul>
        {
          this.props.books.map(book =>{
            //console.log(book.title)
            return(
              <li>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </li>
              )
          })

        }
      </ul>
    );
  }
}


export default BookList;