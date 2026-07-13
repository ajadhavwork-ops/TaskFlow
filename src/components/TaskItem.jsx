function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />

        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none",
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
  );
}

export default TaskItem;