import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build TaskFlow",
    "Practice JavaScript",
  ]);

  const [newTask, setNewTask] = useState("");

  function addTasimport { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Learn React", completed: false },
    { text: "Build TaskFlow", completed: false },
    { text: "Practice JavaScript", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");

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

  function toggleTask(index) {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>TaskFlow</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span
              style={{
                marginLeft: "10px",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>

            <button
              style={{ marginLeft: "10px" }}
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

export default App;k() {
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