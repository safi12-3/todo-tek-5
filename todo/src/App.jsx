import { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import SearchBar from "./component/SearchBar";
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";
import Footer from "./component/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // New: filter state

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function handleCompleteTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleEditTask(taskID, newText) {
    setTasks(
      tasks.map((task) =>
        task.id === taskID ? { ...task, text: newText } : task
      )
    );
  }

  function handleClearTasks() {
    setTasks([]);
  }

  // Filtering tasks based on search and status filter
  const filteredTasks = tasks
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => {
      if (filter === "pending") return !task.completed;
      if (filter === "completed") return task.completed;
      return true; // "all" filter shows everything
    });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
        <Header />
        <SearchBar search={search} onSearch={setSearch} filter={filter} onFilterChange={setFilter} onClear={handleClearTasks} />
        <TaskInput addTask={handleAddTask} />
        <TaskList
          tasks={filteredTasks} // Pass filtered tasks
          deleteTask={handleDeleteTask}
          toggleComplete={handleCompleteTask}
          editTask={handleEditTask}
        />
        <Footer filter={filter} onFilterChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default App;
