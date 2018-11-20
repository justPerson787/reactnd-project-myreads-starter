import React, { Component } from 'react';
import Book from './Book.js'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    /*static propTypes = {
        books: PropTypes.array.isRequired
    }
    /* onDeleteContact: PropTypes.func.isRequired
      */

    render() {
        const { books } = this.props
                
        /*const c = books.filter((book) => book.shelf === shelfeName)*/
        //console.log(books)
        
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter(book => book.shelf === 'read').map((book, key) => <Book updateBook={this.props.updateBook} book={book} key={key} />)
                        }                      
                     {/*   <Book 
                                /*key={key}
                                book={book} 
                                shelfeName = {shelfeName}

                     />*/}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf

/*{books.filter(book => book.shelf === this.props.shelf).map((book, index) => (<Book book={book} key={index} onUpdateShelf={this.props.onUpdateShelf}/>))}
          </ol>*/