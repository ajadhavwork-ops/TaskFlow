import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build TaskFlow",
    "Practice JavaScript",
  ]);

  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>TaskFlow</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{" "}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;