import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'learn to skate'},
      {id: 2, content: 'get some swimming lessons'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id //deleted if this statement returns false
    });
    this.setState({
      todos: todos
    }) 
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="centre blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
