import React from "react";
import Task from "./Task"

function TaskList({tasks, onDeleteClick}) {
  const displayTasks = tasks.map(task => {
    return (
      <Task
      text={task.text}
      category={task.category}
      key={task.text}
      onDeleteClick={onDeleteClick}
    />
  ) 
})
  return (
    <div className="tasks">
      {displayTasks}
      
    </div>
  );
}

export default TaskList;
