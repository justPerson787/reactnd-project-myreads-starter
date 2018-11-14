import React, { Component } from 'react';
import Book from './Book.js'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    /* PROPTYPES TO CHANGE
    static propTypes = {
        books: PropTypes.array.isRequired
    }
    /* onDeleteContact: PropTypes.func.isRequired
      */

    render() {
        /*const { books } = this.props.books*/
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">shelfTitle</h2>
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