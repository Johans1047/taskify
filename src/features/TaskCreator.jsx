import { useState } from 'react'

const TaskCreator = () => {
  const [ newTask, setNewTask ] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('task', newTask);
    setNewTask('');
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className='bg-red-100'>Enter your task:</label>
        <br></br>
        <input type="text" placeholder='What do you need to do?' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <br></br>
        <button onClick={() => alert(newTask)}>add task</button>
      </form>
    </>
  )
}

export default TaskCreator;