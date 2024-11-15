// import React, { useState } from "react";
// import { Container, Button } from "react-bootstrap";
// import TaskList from "./components/TaskList";
// import TaskForm from "./components/TaskForm";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App(){
//   const [tasks, setTask] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [taskToEdit, setTaskToEdit] = useState(null);

//   const handleShowForm = () => setShowForm(true);
//   const handleCloseForm = () => {
//     setShowForm(false);
//     setTaskToEdit(null);
//   };

//   const addTask = (task) => {
//     setTask([...tasks, {...task, id: Date.now()}]);
//   };

//   const editTask = (updatedTask) => {
//     setTask(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
//   };

//   const deleteTask = (id) => {
//     setTask(tasks.filter(task => task.id !== id));
//   };

//   const showEditForm = (task) => {
//     setTaskToEdit(task);
//     handleShowForm();
//   };

//   return (
//     <Container className="my-5">
//       <h1 className="mb-4">Task List</h1>
//       <Button variant="primary" onClick={handleShowForm}>+ Add Task</Button>
//       <div className="mt-4">
//         <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={showEditForm} />
//         <TaskForm
//         show={showForm}
//         handleClose={handleCloseForm}
//         addTask={addTask}
//         editTask={editTask}
//         taskToEdit={taskToEdit}
//         />
//       </div>
//     </Container>
//   );

// }

// export default App;

import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS for styling

function App() {
  const [tasks, setTask] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTask([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTask(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTask(tasks.filter(task => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <Container className="task-container my-5">
      <div className="header d-flex justify-content-between align-items-center mb-4">
        <h1 className="main-title">To Do List</h1>
        <Button variant="primary" onClick={handleShowForm}>+ Add Task</Button>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={showEditForm} />
      <TaskForm
        show={showForm}
        handleClose={handleCloseForm}
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
      />
    </Container>
  );
}

export default App;