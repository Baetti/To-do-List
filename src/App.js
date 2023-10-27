import { useState } from "react";
import "./App.css";
import CustomiseForm from "./components/CustomiseForm";
import TaskLists from "./components/TaskLists";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevState) => [...prevState, tasks]);
  };

  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex justify-content-center align-items-center w-100 flex-column "
    >
      <CustomiseForm addTask={addTask} />
      {tasks && <TaskLists tasks={tasks} />}
    </div>
  );
}

export default App;
