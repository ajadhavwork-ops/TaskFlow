import { useState } from "react";

function App() {
  const [tasks , setTasks] = useState([

    "learn React",
    "Build TaskFlow ",
    "practice Js"

  ]);

  const [newTask, setNewTask ] = useState("");

  function addTask(){
    if (newTask.trim() === "") return;

    setTasks([...tasks , newTask]);

    setNewTask("");
  }

  return (
    <div>
      <h1>TaskFlow</h1>
      
      <input 
      type="text"
      placeholder="enter the task..."
      value = {newTask}
      onChange={(event) => setNewTask(event.target.value)}
      />

      <button onClick={addTask}> Add </button>
      <ul>
        {tasks.map((task,index) => (
          <li key={index} > {task} </li>
        ))}
        </ul>
      </div>
  );
}

  export default App;