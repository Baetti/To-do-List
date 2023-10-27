import React from "react";
import TaskItem from "./TaskItem";
import styles from "./TaskLists.module.css";

function TaskLists({ tasks }) {
  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskLists;
