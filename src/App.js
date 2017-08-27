/* jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import {getBooksFromFakeXHR,addBookToFakeXHR} from './lib/books.db';
import BookListAppTitle from './components/BookListAppTitle';
import BookList from './containers/BookList/';

console.log(BookListAppTitle);

class App extends Component {

  componentWillMount() {
    this.setState({
      books: []
    });

    getBooksFromFakeXHR()
      .then((books) =>{
        //console.log(books);
        this.setState({
          books: books
        });
      }).catch((err)=>{
        console.log(err);
      });

  // getBooksFromFakeXHR()
  //   .then((books) =>{
  //     console.log(books);
  //   }).catch((err)=>{
  //     console.log(err);
  //   });
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <BookListAppTitle
          title="James BookList of Things"
        />

        <BookList
          books={this.state.books}
        />
      </div>
    );
  }
}



export default App;
