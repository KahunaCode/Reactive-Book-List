/* jshint esversion: 6 */

import React from 'react';
import Book from './Book';

const BookListAppTitle = (props) =>{
  console.log(props);
  return(
    <h1>{props.title}</h1>
    // <div className="book-list-container">
    //   {
    //   props.books.map((book) =>{
    //     return(
    //       <Book
    //       title={book.title}
    //       author={book.author}
    //       />
    //     )
    //   })
    // }
    // </div>
    )
}

export default BookListAppTitle;