function Checkbox({task, toggleTask}) {
  return (
    <>
      {/* chkbg is for the checbox backgound, chkfg is for the check simbol */}
      <input
        id={task.name} 
        type="checkbox"
        onChange={() => {toggleTask(task)}}
        checked={task.done}
        className="ml-2 checkbox border-gray-500 checked:border-gray-100 [--chkbg:theme(colors.gray.800)] [--chkfg:theme(colors.gray.100)] rounded-full" />
    </>
  )
}

export default Checkbox;