import React from 'react'
import { ITask } from './interfaces';
import './TodoComponent.css';

interface Props {
    task: ITask;
    handleDelete(todoToDelete: string): void;
}

const TodoComponent = ({ task, handleDelete }: Props) => {
  return (
    <div className='taskComponent'>
      <h4 className='task'>{task.task}</h4>
      <h4 className='deadline'>{task.deadline} days</h4>
      <button onClick={() => handleDelete(task.task)} className='deleteButton'>Delete</button>
    </div>
  )
}

export default TodoComponent;