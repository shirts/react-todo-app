import React, { Component } from 'react';
import TodoList from './TodoList'
import './App.css';

class App extends Component {
  state = {
    tasks: []
  }

  newTaskRef = React.createRef()

  addItem = e =>  {
    e.preventDefault()
    const task = { text: this.newTaskRef.current.value, key: Date.now() }
    const tasks = [...this.state.tasks.slice(), task]
    this.setState({ tasks })
    e.currentTarget.reset()
  }

  tasks = () => {
    return this.state.tasks
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          newTaskRef={this.newTaskRef}
          currentTask={this.state.currentTask}
          tasks={this.tasks}
        />
      </div>
    );
  }
}

export default App;
