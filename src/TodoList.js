import React, { Component } from 'react';

class TodoList extends Component {
  tasks = () => this.props.tasks()

  render() {
    const tasks = this.tasks().map((task) => {
      return (
        <li
          style={{cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'default'}}
          key={task.key}
          onClick={(() => this.props.completeTask(task.key))}>

          {task.text}
        </li>
      )
    })

    return (
      <>
        <div className="TodoList">
          <form onSubmit={this.props.addTask}>
            <input
              placeholder='Task'
              ref={this.props.newTaskRef}
            />
            <button type='submit'>Add Task</button>
          </form>
        </div>
        <ul style={{listStyleType: 'none'}}>
          {tasks}
        </ul>
      </>
    );
  }
}

export default TodoList;
