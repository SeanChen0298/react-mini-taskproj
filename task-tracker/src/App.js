import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskInput from "./components/TaskInput";

function App() {
  const [showTaskInput, setShowTaskInput] = useState(true);
  const [tasks, setTasks] = useState([
    { id: 1, text: "example task", day: "11 Nov 2021", reminder: false },
  ]);

  // delete task function, pass into Tasks => Task
  const deleteTask = (id) => {
    // reset Tasks, filter out the deleted tasks based on id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder function
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        //...task = reuse the existing props of the object
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // toggle show input task section
  const toggleInputTaskSection = () => {
    setShowTaskInput(!showTaskInput);
  }

  // add task function
  const addTask = (task) => {
    //generate random id
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <Header title={showTaskInput} onClick={toggleInputTaskSection} />

      {/* TASK INPUT */}
      {showTaskInput && <TaskInput onAdd={addTask} />}
  
      {/* TASK LISTING, shows message when no task to show */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task Added"
      )}
    </div>
  );
}

export default App;
