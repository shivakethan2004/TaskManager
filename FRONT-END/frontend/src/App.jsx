import React from 'react';
import TaskList from './components/TaskList';
import './App.css'
import AddTask from './components/AddTask';
const App = () => {
  return (
    <div className='container'>
      <h1 className='heading'>Task Manager</h1>
      <AddTask />
      <TaskList/>
    </div>
  );
};

export default App;
