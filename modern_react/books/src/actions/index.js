export function selectBook(book) {
  //console.log('Book hasb been selected:', book.title);
  //selectBook is an ActionCreator, it needs to return an action, and object with a type prop
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
//action need to be run through all reducers
