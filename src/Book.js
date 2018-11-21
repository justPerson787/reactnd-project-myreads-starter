import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Book extends Component {
    
    static propTypes = {
        book: PropTypes.object.isRequired,
        updateBook: PropTypes.func.isRequired
    }

    render() {
        
      return(
        <li> 
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ 
                        width: 128, 
                        height: 188, 
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` 
                        }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select 
                            value={this.props.book.shelf} 
                            onChange={(event) => {this.props.updateBook(this.props.book, event.target.value)}}>                
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.join(', ')}</div>
            </div>
        </li>
       )
    }
}    

export default Book

