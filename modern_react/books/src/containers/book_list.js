import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//action ends up flowing through all different reducers


class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (<li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>);
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//Glue between react and redux
//connect - takes a function and a component and produces a container
//when state changes this component will automatically re-render
