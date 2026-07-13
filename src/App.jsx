import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          { text: "Learn React", completed: false },
          { text: "Build TaskFlow", completed: false },
          { text: "Practice JavaScript", completed: true },
        ];
  });

  const [newTask, setNewTask] = useState("");

  const completedTasks = tasks.filter((task) => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: newTask,
        completed: false,
      },
    ]);

    setNewTask("");
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  }

  function toggleTask(indexToToggle) {
    setTasks(
      tasks.map((task, index) =>
        index === indexToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <div className="container">
      <h1>🚀 TaskFlow</h1>

      <p className="stats">
        Total: <strong>{tasks.length}</strong> | Completed:{" "}
        <strong>{completedTasks}</strong> | Remaining:{" "}
        <strong>{remainingTasks}</strong>
      </p>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li className="task-item" key={index}>
            <div className="task-left">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />

              <span
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  color: task.completed ? "#888" : "#000",
                }}
              >
                {task.text}
              </span>
            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;