import React, { useState } from 'react';
import Plus from '../assets/svg/plus.svg';

const TaskCreator = ({ createTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      createTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div className="mb-6 fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-full sm:max-w-[875px] w-full">
      <form className="mx-2 px-1 mt-5" onSubmit={handleSubmit}>
        <div className="flex font-geist-medium">
          <div className="relative w-full">
            <input
              type="text"
              id="search-dropdown"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="block p-[13px] w-full z-20 rounded-lg text-sm rounded-e-lg rounded-s-gray-100 rounded-s-2 bg-[#ffffff80]"
              placeholder="What do you need to do?"
              required
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white rounded-e-lg bg-gray-900 border border-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <div className="flex gap-2">
                <img src={Plus} alt="Add Icon" className="w-6 h-5" />
                Add
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskCreator;