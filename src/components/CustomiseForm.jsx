import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function CustomiseForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };
  return (
    <>
      <Form
        className="todo col-lg-4 shadow rounded p-3"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-center mb-5">My Tasks</h1>
        <div className="wrapper ">
          <Form.Control
            type="text"
            placeholder="Enter Task To Do"
            id="task"
            value={task}
            className="input w-100 mb-3 rounded "
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
          />

          <div className="d-flex justify-content-center">
            <Button className="btn" aria-label="Add Task" type="submit">
              <i
                style={{ color: "green" }}
                className="fa-solid fa-square-plus fa-2x"
              ></i>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default CustomiseForm;
