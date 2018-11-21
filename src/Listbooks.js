import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Listbooks extends Component {
    
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired
    }
        
    render() {
        //shelves[0] titles go to UI, shelves[1] resemble 'shelf'property of books 
        const shelves = [['Currently Reading', 'currentlyReading'], ['Want to Read', 'wantToRead'], ['Read', 'read']]
                     
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
                            updateBook={this.props.updateBook}
                        />
                    )}
                </div>                
                <div className="open-search">
                   <Link to="/search">Add a book</Link>
                </div>
            </div>           
        )
    }
}

export default Listbooks



