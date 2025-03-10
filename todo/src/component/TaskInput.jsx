import React from "react";
import { useState } from "react";

const TaskInput = ({ addTask }) => {
  
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if(taskText.trim() === ""){
        setError("Task cannot be empty");
        return;
    }
    addTask(taskText);
    setTaskText("");
    setError("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 p-2 border rounded-md"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button className="ml-2 bg-green-500 text-white px-3 py-2 rounded-md flex items-center">
          Add Task
        </button>
        
      </form>{error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
    </>
  );
};

export default TaskInput;
