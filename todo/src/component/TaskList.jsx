import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const TaskList = ({ tasks, deleteTask, toggleComplete, editTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  function handleEditClick(task) {
    setEditingTaskId(task.id);
    setEditedText(task.text);
  }

  function handleSaveClick(taskId) {
    editTask(taskId, editedText);
    setEditingTaskId(null);
  }

  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-md mt-6 mb-6">
        <span className="text-3xl">📄✏️</span>
        <p className="text-gray-500 mt-2">No tasks found. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <ul className="mt-4 space-y-2 mb-2">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="mr-3 h-5 w-5"
          />

          {editingTaskId === task.id ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="flex-1 p-1 border rounded"
            />
          ) : (
            <span className={`${task.completed ? "line-through text-gray-500" : "text-black"} text-lg flex-1`}>
              {task.text}
            </span>
          )}

          {editingTaskId === task.id ? (
            <>
              <button
                onClick={() => handleSaveClick(task.id)}
                className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTaskId(null)}
                className="ml-2 px-2 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                ✖
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleEditClick(task)}
                className="ml-2 px-2 py-1"
              >
                ✏️
              </button>
              <button onClick={() => deleteTask(task.id)} className="ml-2 text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
