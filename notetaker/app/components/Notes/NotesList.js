import React from 'react';
import ReactDOM from 'react-dom';

class NotesList extends React.Component {
  handleRemoveNote(e){
    //this.props.removeNote(idx);
    console.log(e.target);

    let idx = ReactDOM.findDOMNode(e.target).getAttribute('data-idx');
    this.props.removeNote(idx);
  }
  render(){
      let notes = this.props.notes.map((note, index) => {
        return <li className="list-group-item" key={index}>
        {note}
        <button data-idx={index} onClick={this.handleRemoveNote.bind(this)}>Remove</button>
        </li>
      });
      return (
        <ul className="list-group">{notes}</ul>
      );
  }
};

export default NotesList;
