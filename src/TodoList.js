import React, { Component } from 'react';

class TodoList extends Component {
  tasks = () => this.props.tasks()

  render() {
    const tasks = this.tasks().map(task => {
        return (<li key={task.key}>{task.text}</li>)
    })

    return (
      <>
        <ul style={{listStyleType: 'none'}}>
          {tasks}
        </ul>
        <div className="TodoList">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder='Task'
              ref={this.props.newTaskRef}
            />
            <button type='submit'>Add Task</button>
          </form>
        </div>
      </>
    );
  }
}

export default TodoList;
