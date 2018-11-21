import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookSearch extends Component {
    
    static propTypes = {
        book: PropTypes.object.isRequired
    }
