/* jshint esversion: 6 */

import React from 'react';

const Book = ({title,author}) =>{
  return(
    <div className="Book">
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
    )
}

export default Book;