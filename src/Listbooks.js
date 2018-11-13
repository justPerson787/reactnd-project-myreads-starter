import React, { Component } from 'react';
import Bookshelf from './Bookshelf.js'
import PropTypes from 'prop-types'

class Listbooks extends Component {
    // PROPTYPES TO CHANGE
    /*static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
      }*/
    /*state = {
        showSearchPage: false
    }*/
    render() {
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



