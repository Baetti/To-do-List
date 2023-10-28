import { useState } from "react";
import "./App.css";
import CustomiseForm from "./components/CustomiseForm";
import TaskLists from "./components/TaskLists";
import EditForm from "./components/EditForm";
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [PreviousFocusEl, setPreviousFocusEl] = useState(null);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
    console.log(task);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((t) => (t.id === task.id ? { ...t, name: task.name } : t))
    );
    // Close the edit mode
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    // previos state focus
    PreviousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex justify-content-center align-items-center w-100 flex-column "
    >
      <div className="todo col-lg-4 shadow rounded p-3">
        <h1 className="text-center mb-5">My Tasks</h1>

        <CustomiseForm addTask={addTask} isEditing={isEditing} />
        {isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )}
        {tasks && (
          <TaskLists
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
