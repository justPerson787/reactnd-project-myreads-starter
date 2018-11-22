import React, { Component } from 'react'
import { Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import Book from './Book';

class BookSearch extends Component {
    
    /*static propTypes = {
        book: PropTypes.object.isRequired
    }*/

    state = {
        query: '',
        selectedBooks: []
    }
    
    updateQuery = (query) => {
        this.setState({ query: query.trim() }, () => {
          this.searchBooks(this.state.query); //trim() removes whitespace from both sides of a string
        });
    }
        
    // perform and API search using query
    searchBooks = (query) => {
    // Case if query is not empty
        query? (
            BooksAPI.search(query).then((searchedBooks) => {        
                if (searchedBooks.length > 0) {          
                    searchedBooks.map((searchedBook) =>  {
                        for (let book of this.props.books) {
                            if(book.id === searchedBook.id) {
                                searchedBook.shelf = book.shelf;
                                return searchedBook                                 
                            }
                            else {
                                searchedBook.shelf = 'none';
                            }
                        }                    
                        return searchedBook;                     
                    });
                    this.setState({ selectedBooks: searchedBooks });                
                }
                else {
                    this.setState({ selectedBooks: [] });
                }   
            })  
        ) : (
            this.setState({ selectedBooks: [] }) //if query is empty
        );
    }    

    render() {

        const {selectedBooks} = this.state
        //console.log(selectedBooks)

        return(

            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. 
                */}
                        <input type="text" placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {selectedBooks.map((book, key) => 
                            <Book 
                                updateBook={this.props.updateBook} 
                                book={book} 
                                key={key} 
                            />)
                        }    
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch