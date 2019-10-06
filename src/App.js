import React, { Component } from 'react';
import RenderTodos from './RenderTodos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'kupi nesto'},
      {id: 2, content: 'kupi jos nesto'}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== parseFloat(id); //id is a passed as a string
    })
    console.log()
    this.setState({
      todos: todos
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-primary text-center mt-5">TODO'S</h1>
          <RenderTodos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo} todos={this.state.todos}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
