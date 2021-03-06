/* jshint esversion: 6 */

const booksFromFakeDB = [{
    _id : 1,
    title : 'Talion: The Revenant from DB',
    author : 'Michael A. Stackpole'
  },
  {
    _id : 2,
    title : 'Ready Player One from DB',
    author : 'Ernest Cline'
  },
  {
    _id : 3,
    title : 'Enders Game from DB',
    author : 'Orson Scott Card'
  }
];

export const getBooksFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve(booksFromFakeDB), 500);
});

export const addBookToFakeXHR = (book) => new Promise((resolve, reject) => {
  //console.log('this is XHR book:', book)
  setTimeout(() => {
    book._id = Math.random();
    booksFromFakeDB.push(book);
    resolve(booksFromFakeDB);
  }, 500);
});
