import React from 'react';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import Star from '../assets/svg/star.svg';
import HighlightStar from '../assets/svg/highlight-star.svg';

const Task = ({ task, toggleTask, highlightTask, deleteTask }) => {
  const getTaskStyles = () => {
    const baseStyles = 'relative z-10 flex items-center justify-between rounded-lg my-1 mx-3 px-2 py-4';
    const doneStyles = task.done ? `line-through bg-[#ffffff30] hover:bg-[#ffffff46]` : `bg-[#ffffff80] hover:bg-[#ffffff96]`;
    const highlightStyles = task.important ? `outline outline-3 outline-yellow-500` : ``;

    let styles = baseStyles + ' ' + doneStyles + ' ' + highlightStyles;

    return styles;
    //return task.done ? `${baseStyles} line-through bg-[#ffffff30] hover:bg-[#ffffff46]` : `${baseStyles} bg-[#ffffff80] hover:bg-[#ffffff96]`;
  };

  const getStarSVG = () => {
    return task.important ? HighlightStar : Star
  }

  const handleMarkAsCompleted = () => {
    const checkboxElement = document.getElementById(task.name);
    if (checkboxElement) {
      checkboxElement.click();
    }
  };

  const handleMarkAsImportant = () => {
    const starBtnElement = document.getElementById(task.name.slice(0,-1));
    if (starBtnElement) {
      starBtnElement.click();
    }
  };

  const handleDelete = () => {
    deleteTask(task.name);
  };

  return (
    <div
      key={task.name}
      className={getTaskStyles()}
    >
      <div className="flex items-center gap-4">
        <Checkbox task={task} toggleTask={toggleTask} />
        {task.name}
      </div>
      <div className="flex items-center gap-3">
        <button id={task.name.slice(0,-1)} onClick={() => {highlightTask(task)}}>
          <img src={getStarSVG()} alt="Ellipsis Icon" className="w-4 h-4" />
        </button>
        <Dropdown task={task} markAsCompleted={handleMarkAsCompleted} markAsImportant={handleMarkAsImportant} handleDelete={handleDelete} />
      </div>
    </div>
  );
};
  
export default Task;