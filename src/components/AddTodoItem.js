import React, { Component } from 'react';

class AddTodoItem extends Component {

  state = {
    title: ''
  }
  submit = (e) => {
    e.preventDefault();
    this.props.addTodoItem(this.state.title);
    this.setState.title = '';
  }

  onInputValueChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form style={formStyle} onSubmit={this.submit}>
          <input style={inputStyle} name="title" onChange={this.onInputValueChange} value={this.state.title}>
          </input>
          <input style={buttonStyle} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

const formStyle = {
  display: 'flex',

}
const inputStyle = {
  flex: 1,
  fontSize: '1rem',
}

const buttonStyle = {
  fontSize: '1rem',
}

export default AddTodoItem;