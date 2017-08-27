/* jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import {getBooksFromFakeXHR,addBookToFakeXHR} from './lib/books.db';
import BookListAppTitle from './components/BookListAppTitle';
import BookList from './containers/BookList/';
import BookFilterInput from './components/BookFilterInput';

console.log(BookListAppTitle);

class App extends Component {

  componentWillMount() {
    this.setState({
      books: [],
      bookFilterText: ''
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

  handleFilterInputChange(e){
    this.setState({
      bookFilterText: e.target.value
    });
  }


  render() {
    return (
      <div>
        <BookListAppTitle
          title="James BookList of Things"
        />

        <BookFilterInput
          filterInputChange={this.handleFilterInputChange.bind(this)}
        />

        <BookList
          filter={this.state.bookFilterText}
          books={this.state.books}
        />
      </div>
    );
  }
}



export default App;
