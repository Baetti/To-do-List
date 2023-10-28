import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function EditForm({ editedTask, updateTask, closeEditMode }) {
  const [updatedTaskName, setupdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTaskName });
  };

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, []);
  return (
    <>
      <div
        role="dialog"
        aria-labelledby="editTask"
        onClick={(e) => {
          e.target === e.currentTarget && closeEditMode();
        }}
      >
        <Form onSubmit={handleFormSubmit}>
          <div className="wrapper mb-3 ">
            <Form.Control
              type="text"
              placeholder="Update Task"
              id="editTask"
              value={updatedTaskName}
              className="input w-100 mb-3 rounded "
              onInput={(e) => setupdatedTaskName(e.target.value)}
              required
              autoFocus
              maxLength={60}
            />

            <div className="d-flex justify-content-center">
              <Button
                className="btn"
                aria-label={`Confirm edited Task ${updatedTaskName}`}
                type="submit"
              >
                <i
                  style={{ color: "green" }}
                  className="fa-solid fa-check fa-2x"
                ></i>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default EditForm;
