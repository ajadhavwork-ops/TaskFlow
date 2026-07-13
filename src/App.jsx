import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

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
  <h1>TaskFlow</h1>

  <p className="stats">
    Total: <strong>{tasks.length}</strong> |
    Completed: <strong>{completedTasks}</strong> |
    Remaining: <strong>{remainingTasks}</strong>
  </p>

  <TaskForm
    newTask={newTask}
    setNewTask={setNewTask}
    addTask={addTask}
  />

  <TaskList
    tasks={tasks}
    toggleTask={toggleTask}
    deleteTask={deleteTask}
  />
</div>
  );
}

export default App;