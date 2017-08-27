/* jshint esversion: 6 */

import React, { Component } from 'react';
import './App.css';
import {getBooksFromFakeXHR,addBookToFakeXHR} from './lib/books.db';
import BookListAppTitle from './components/BookListAppTitle';
import BookList from './containers/BookList/';
import BookFilterInput from './components/BookFilterInput';
import NewBook from './containers/NewBookForm';

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

  addBookHandler(book){
    console.log('handling my books')
    addBookToFakeXHR(book)
      .then((books) =>{
        this.setState({books});
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  render() {
    console.log('apps this.state', this.state)
    return (
      <div>
        <BookListAppTitle
          title="James BookList of Things"
        />

        <BookFilterInput
          filterInputChange={this.handleFilterInputChange.bind(this)}
        />

        <NewBook
          addBookHandler={this.addBookHandler.bind(this)}
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
