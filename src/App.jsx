import React, { useState } from 'react';
import BackgroundXO from './components/Background';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setInputValue(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const updateTask = () => {
    if (inputValue.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === currentTaskIndex ? inputValue : task
      );
      setTasks(updatedTasks);
      setInputValue("");
      setIsEditing(false);
      setCurrentTaskIndex(null);
    }
  };

  return (
    <div className="relative flex justify-center pt-10 pb-10 flex-col items-center min-h-screen">
      <BackgroundXO plusColor="#a78bfa" backgroundColor="#f0f4f8" className="z-0" />
      <div className="relative z-10 w-full max-w-md px-4">
        <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold font-Pacifico text-transparent mb-8 text-center">
          Todo List
        </h1>
        <input
          type="text"
          className="w-full bg-white border-2 border-purple-300 placeholder-purple-500 text-black rounded-lg px-4 py-2 mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          placeholder="Add your todo task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="w-full bg-purple-500 text-white py-2 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
          onClick={isEditing ? updateTask : addTask}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
        <ul className="mt-6 w-full">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-white border border-purple-300 rounded-lg p-4 mb-2 shadow-md flex justify-between items-center"
            >
              <span className="flex-1">{task}</span>
              <div className="flex space-x-2">
                <button
                  className="group/button relative overflow-hidden rounded-md border border-indigo-500/20 bg-white px-4 py-1 text-xs font-medium text-indigo-500 transition-all duration-150 hover:border-indigo-500 active:scale-95"
                  onClick={() => editTask(index)}
                >
                  <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 transition-all duration-500 group-hover/button:h-full" />
                  <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
                    Edit
                  </span>
                </button>
                <button
                  className="group/button relative overflow-hidden rounded-md border border-red-500/20 bg-white px-4 py-1 text-xs font-medium text-red-500 transition-all duration-150 hover:border-red-500 active:scale-95"
                  onClick={() => deleteTask(index)}
                >
                  <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-red-600 to-red-500 transition-all duration-500 group-hover/button:h-full" />
                  <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
                    Delete
                  </span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
