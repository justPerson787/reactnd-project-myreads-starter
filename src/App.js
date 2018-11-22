import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Listbooks from './Listbooks.js'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch.js'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  /*books represents the books currently in the bookshelves*/
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  /*
  update method from `BooksAPI.js`(a backend server) is used
  to update books and shelves data
  *book: `<Object>` containing at minimum an `id` attribute
  *shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  */ 
  updateBook = (book, shelf) =>  {
    BooksAPI.update(book, shelf).then(() => {
        BooksAPI.getAll().then((books) => {
        this.setState({ books });
      })
    })
  }

  render() {
    const { books } = this.state;
        
    return (
      <div className="app">  
        <Route
          exact path="/"
          render={({ history }) =>
              <Listbooks
                  updateBook = {this.updateBook}
                  books={books}
              />}
        />   
        <Route
          path="/search"
          render={({ history }) =>
              <BookSearch
                  updateBook = {this.updateBook}
                  books={books}
              />}
        />  
      </div>
    )
  }
}

export default BooksApp

