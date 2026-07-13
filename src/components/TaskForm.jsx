function TaskForm({ newTask, setNewTask, addTask }) {
  return (
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
  );
}

export default TaskForm;