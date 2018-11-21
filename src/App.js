import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Listbooks from './Listbooks.js'
import { Route } from 'react-router-dom'
//import BookSearch from './BookSearch.js'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
    console.log(books)
    return (
      <div className="app">
        {/*this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
               { /*<input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
              ) : ( */}       
          <div> 
            {this.state.showSearchPage === false && (
              <Listbooks books={books} updateBook = {this.updateBook}/>
            )}
          </div>
          <div>
            {this.state.showSearchPage === true && (
          {/*  <BookSearch/>*/}
            )}
          </div>
                      
      </div>
    )
  }
}

export default BooksApp
