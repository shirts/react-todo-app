import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  state = {
    tasks: []
  }

  newTaskRef = React.createRef()

  addTask = e =>  {
    e.preventDefault()
    const task = {
      text: this.newTaskRef.current.value,
      key: Date.now(),
      completed: false
    }
    const tasks = [...this.state.tasks.slice(), task]
    this.setState({ tasks })
    e.currentTarget.reset()
  }

  // marks task as completed
  completeTask = key => {
    const item = this.state.tasks.find(task => task.key === key)
    item.completed = true
    const tasks = [...this.filtered(key), item]
    this.setState({ tasks })
  }

  // returns tasks, minus one matching key
  filtered = key => {
    return this.state.tasks.filter(task => task.key !== key)
  }

  tasks = () => {
    return this.state.tasks
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addTask={this.addTask}
          completeTask={this.completeTask}
          newTaskRef={this.newTaskRef}
          currentTask={this.state.currentTask}
          tasks={this.tasks}
        />
      </div>
    );
  }
}

export default App;
