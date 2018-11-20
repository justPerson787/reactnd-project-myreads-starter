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
        const shelves = [['Currently Reading', 'currentlyReading'], ['Want to Read', 'wantToRead'], ['Read', 'read']]
        
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
                    {shelves.map((item) => 
                        <Bookshelf 
                            key={item}
                            books={this.props.books} 
                            title={item[0]} 
                            shelfKey = {item[1]}

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



