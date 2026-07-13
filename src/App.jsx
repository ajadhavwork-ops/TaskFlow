import { useState, useEffect } from "react";

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

  const completedTasks = tasks.filter(task => task.completed).length;
const remainingTasks = tasks.length - completedTasks;

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
  setTasks(
    tasks.map((task, i) =>
      i === index
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}
  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>TaskFlow</h1>

      <p>
  Total: {tasks.length} | Completed: {completedTasks} | Remaining: {remainingTasks}
</p>

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

export default App;