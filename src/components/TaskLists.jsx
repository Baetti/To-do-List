import React from "react";
import TaskItem from "./TaskItem";

function TaskLists({ tasks, deleteTask, toggleTask, enterEditMode }) {
  return (
    <div className="d-flex align-items-center w-100">
      <ul style={{ color: "white" }}>
        {tasks
          .sort((a, b) => b.id - a.id)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              enterEditMode={enterEditMode}
            />
          ))}
      </ul>
    </div>
  );
}

export default TaskLists;
