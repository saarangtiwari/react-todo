import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import uuid from 'uuid';
import AddTodoItem from './components/AddTodoItem';
class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Dinner with friends",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Meeting",
        completed: false
      },
    ]
  };

  updateCompletionStatus = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  addTodoItem = (title) => {
    this.setState({
      todos: [...this.state.todos, {
        id: uuid.v4(),
        title,
        completed: false
      }]
    })
  }
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id != id)]
    });
  }

  render() {
    return (
      < div className="App" >
        <div className="container">
          <AddTodoItem addTodoItem={this.addTodoItem} />
          <Todos todos={this.state.todos} updateCompletionStatus={this.updateCompletionStatus} delTodo={this.delTodo} />
        </div>
      </div >
    );
  }
}

export default App;
