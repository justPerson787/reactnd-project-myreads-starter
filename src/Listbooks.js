import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js'
import PropTypes from 'prop-types'

class Listbooks extends Component {
    // PROPTYPES TO CHANGE
    static propTypes = {
        books: PropTypes.array.isRequired,
        /*-onDeleteContact: PropTypes.func.isRequired*/
    }
        
    render() {
        //shelves' titles go to UI, shelves id is 'shelf'property from books 
        const shelvesTitle = ['Currently Reading', 'Want to Read', 'Read']
        //const shelfeName= ['currentlyReading', 'wantToRead', 'read']

        //this function filters  book for each shelf
        /*const booksByShelf = shelf => {
            return this.props.books.filter(book => shelves.id === book.shelf);
        };*/
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {shelvesTitle.map((shelfTitle) => 
                        <Bookshelf 
                            key={shelfTitle}
                            books={this.props.books} 
                            title={shelfTitle}
                            //shelfeName = {shelfeName}

                        />
                    )}
                </div>
                
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>           
        )
    }
}

export default Listbooks



