import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code"
  })

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setNewTask({
      ...newTask,
      [key]: value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(newTask)
    setNewTask({
      text: "",
      category: "Code"
    })
  }

  
  return (
    <form className="new-task-form"
          onSubmit={(e) => handleFormSubmit(e)}>
    
      <label>
        Details
        <input type="text" name="text" 
              onChange={handleChange}
              value={newTask.text} />
        
      
      </label>
      <label>
        Category
        <select name="category"
                onChange={handleChange}
                value={newTask.category}>

        {categories.slice(1).map(cat => 
         <option key={cat}>{cat}</option>)}
          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
