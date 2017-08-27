/* jshint esversion: 6 */

import React, { Component } from 'react';
import Book from '../../components/Book'

class BookList extends Component {
  constructor(props) {
    super()

  }

  render(){
    console.log('render method', this.props.filter);
    return (
      <ul>
        {
          this.props.books
            .filter(book => {
              return this.props.filter ? book.author.toLowerCase().indexOf(this.props.filter) > -1 || book.title.toLowerCase().indexOf(this.props.filter) > -1 : book;
            })
            .map(book =>{
            //console.log(book.title)
              return(
                <Book
                  title={book.title}
                  author={book.author}
                  key={book._id}
                />

              //moved to Book.js
              // <li>
              //   <h3>{book.title}</h3>
              //   <p>{book.author}</p>
              // </li>
              )
          })

        }
      </ul>
    );
  }
}


export default BookList;