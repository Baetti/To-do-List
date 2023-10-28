import React, { useState } from "react";
import styles from "./TaskItem.module.css";

function TaskItem({ task, deleteTask, toggleTask, enterEditMode }) {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };
  return (
    <li className={styles.tasks}>
      <div className=" d-flex justify-content-evenly align-items-center w-100 p-2 shadow rounded border border-warning mt-3 mb-2">
        <div className="fs-4 w-100 mb-2 d-flex ">
          <input
            style={{ transform: "scale(1.5)" }}
            className="fs-2"
            type="checkbox"
            id={task.id}
            name={task.name}
            checked={isChecked}
            onChange={handleCheckBoxChange}
          />

          <label htmlFor={task.id} className="">
            <h5 className="ms-2">{task.name}</h5>
            {/* <p><CheckIcon strokeWidth={2} width={24} height={24} /></p> */}
          </label>
        </div>
        <div className="d-flex ms-4 align-items-center">
          <button
            className="btn btn-warning me-2"
            aria-label={`Update ${task.name} Task`}
            onClick={() => enterEditMode(task)}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            className="btn btn-danger"
            aria-label={`Update ${task.name} Task`}
            onClick={() => deleteTask(task.id)}
          >
            <i className="fa-solid fa-trash-can  "></i>
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
