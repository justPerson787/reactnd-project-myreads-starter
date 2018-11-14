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
        const shelves = {
            1:["wantToRead", 'Want to Read'], 
            2:["currentlyReading", "Currently Reading"],
            3:["read", 'Read'],
        }
        
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf/>
                        <Bookshelf/>
                        <Bookshelf/>
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>           
        )
    }
}
/*Currently Reading Want to Read Read*/

export default Listbooks



