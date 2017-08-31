/* jshint esversion: 6 */

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

export const loadBooks = (books) => {
  return {
    type: LOAD_BOOKS,
    books: books
  };
};

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book: book
  };
};