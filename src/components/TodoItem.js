import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {



  getStyleForToolItem = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyleForToolItem()}>
        <p>
          <input type="checkbox" style={{ marginRight: "0.5rem" }} onChange={this.props.updateCompletionStatus.bind(
            this, id
          )} />
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right',
  fontSize: '12px'
};

// PropTypes:

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem
