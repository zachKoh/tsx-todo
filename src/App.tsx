import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';
import TodoComponent from './TodoComponent';

const App: FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "todoInput") {
      setTodo(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  }

  const handleSubmit = (): void => {
    if (todo === "" || deadline < 1) {
      alert("Invalid input");
      setTodo("");
      setDeadline(0);
      return
    }
    const newTask = { task: todo, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTodo("");
    setDeadline(0);
  }

  const handleDelete = (taskToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.task !== taskToDelete
    }))
  }

  return (
    <div className='App'>
      <div className='todoForm'>
        <input name='todoInput' className='todoInput' placeholder='Enter ToDo' onChange={handleChange} value={todo}></input>
        <input name='deadlineInput' className='deadlineInput' onChange={handleChange} value={deadline} type="number"></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className='todoList'>
        {todoList.map((todo: ITask, key: number) => {
          return <TodoComponent key={key} task={todo} handleDelete={handleDelete}/>;
        })}
      </div>
    </div>
  );
}

export default App;
