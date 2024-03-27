import React, { useState, useEffect } from 'react';
import CheckCircle from '../assets/svg/check-world-vector-logo.svg';
import TaskCreator from '../features/TaskCreator';
import Task from './Task'; // Import the Task component

function Layout() {
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTaskItems(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false, important: false }]);
    }
  };

  const deleteTask = (taskName) => {
    setTaskItems(taskItems.filter((task) => task.name !== taskName));
  };

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? {...t, done: !t.done } : t ))
    );
  };

  const highlightTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? {...t, important: !t.important } : t ))
    );
  };

  return (
    <div className="my-10 mx-auto p-3 max-w-4xl font-geist-medium">
      <p className="flex items-center justify-center mt-3 mb-7 font-geist-bold text-[42px]">
        <img src={CheckCircle} alt="Check Circle Icon" className="w-9 h-9 mr-2" />
        Todo App
      </p>
      <div className="flex flex-col">
        <div id="tag-1" className="m-3 pt-2 pb-1">
          <p className="font-geist-bold text-2xl">Tasks</p>
          {taskItems.length === 0 && 
            <div className="flex items-center justify-center">
              <h1 className="text-gray-600 text-lg">No items yet.</h1>
            </div>
          }
        </div>
        {taskItems.map((task) => (
          <Task key={task.name} task={task} toggleTask={toggleTask} highlightTask={highlightTask} deleteTask={deleteTask} />
        ))}
      </div>
      <TaskCreator createTask={createNewTask} />
    </div>
  );
}

export default Layout;