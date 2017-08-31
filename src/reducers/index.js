/* jshint esversion: 6 */

import { LOAD_BOOKS, ADD_BOOK } from '../actions';

const initialState = { books: [] };

const books = (state = initialState, action) => {
  switch (action.type){
    case LOAD_BOOKS:
      return {
        books: [...action.books]
      }
      break;

    case ADD_BOOK:
      break;

    default:
      return state;
  }
};

export default books;