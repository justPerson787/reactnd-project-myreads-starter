import React, { Component } from 'react';
import Book from './Book.js'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
    // PROPTYPES TO CHANGE
    /*static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
      }*/
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Shelf name</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book/>
                        <Book/>
                    </ol>
                </div>
            </div>
        )
    }
}
/*Currently Reading Want to Read Read*/

export default Bookshelf