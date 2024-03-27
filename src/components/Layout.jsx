import React, { useState, useEffect } from 'react';
import CheckCircle from '../assets/svg/check-world-vector-logo.svg';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import Star from '../assets/svg/star.svg';
import TaskCreator from '../features/TaskCreator';

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

  return (
    <div className="my-10 mx-auto p-3 max-w-4xl font-geist-medium">
      
      <p className="flex items-center justify-center mt-3 mb-7 font-geist-bold text-[42px]">
        <img src={CheckCircle} alt="Check Circle Icon" className="w-9 h-9 mr-2" /> Todo App
      </p>
      <div className="flex flex-col">
        <div id="tag-1" className="m-3 pt-2 pb-1">
          <p className="font-geist-bold text-2xl">Tasks</p>
        </div>
        {/* border-gray-900 border-[1.95px] for editing */}
        {taskItems.map((task) => (
        <div
          key={task.name}
          className="relative z-10 flex items-center justify-between bg-[#ffffff80] hover:bg-[#ffffff96] rounded-lg my-1 mx-3 px-2 py-4"
        >
          <div className="flex items-center gap-4">
            <Checkbox />
            {task.name}
          </div>
          <div className="flex items-center gap-3">
            <button>
              <img src={Star} alt="Ellipsis Icon" className="w-4 h-4" />
            </button>
            <Dropdown />
          </div>
        </div>
      ))}
        <div id="tag-2" className="bg-blue-500 m-3 pt-2 pb-1 hidden">
          <p className="font-geist-bold text-2xl">Important</p>
        </div>
        <div className="bg-blue-500 rounded-lg my-1 mx-3 px-2 py-4 hidden">a</div>
      </div>
      <TaskCreator createTask={createNewTask} />
    </div>
  );
}

export default Layout;