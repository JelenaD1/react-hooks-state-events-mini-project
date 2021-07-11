import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS)
  const [selected, setSelected] = useState("")

  const handleChangeTask = (newList) => {
    setTaskList(newList)
  }

  const onTaskFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask])
  }

  const handleDeleteClick = (text) => {
    const filteredTasks = taskList.filter(task => task.text !== text)
    handleChangeTask(filteredTasks)
  }

  const selectedTask = taskList.filter(task => {
    if (selected === "All" || selected === "") {
      return true
    } else {
      return (task.category === selected)
    }
  })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
                       setSelected={setSelected}
                       selected={selected} 
      />
      <NewTaskForm categories={CATEGORIES} 
                    onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={selectedTask} 
                onDeleteClick={handleDeleteClick}
      
      />
    </div>
  );
}

export default App;
