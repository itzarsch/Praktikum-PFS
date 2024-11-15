// import React from "react";
// import { Button , Card} from "react-bootstrap";

// const TaskList = ({tasks, deleteTask, showEditForm}) => {
//     return (
//         <div>
//             {tasks.map((task, index) => (
//             <Card className="mb-3" key={index}>
//                 <Card.Body className="d-flex justify-content-between align-items-center">
//                     <div>
//                         <strong>Task:</strong> {task.name} <br />
//                         <strong>Priority:</strong> {task.priority} <br />
//                         <strong>Status:</strong> {task.status} <br />
//                     </div>
//                     <div>
//                         <Button variant="outline-primary" onClick={()=> showEditForm(task)}>
//                             <i class="bi bi-pencil"></i>
//                         </Button>{''}
//                         <Button variant="outline-danger" onClick={()=> deleteTask(task.id)}>Delete</Button>
//                     </div>
//                 </Card.Body>
//             </Card>
//         ))}
//         </div>
//     );
// };

// export default TaskList;

// import React from "react";
// import { Button, Card } from "react-bootstrap";
// import './TaskList.css'; 

// const TaskList = ({ tasks, deleteTask, showEditForm }) => {
//   return (
//     <div>
//       {tasks.map((task, index) => (
//         <Card className="task-card mb-3" key={index}>
//           <Card.Body className="d-flex justify-content-between align-items-center">
//             <div className="task-details">
//               <strong>Task:</strong> {task.name} <br />
//               <strong>Priority:</strong> {task.priority} <br />
//               <strong>Status:</strong> {task.status} <br />
//             </div>
//             <div className="task-actions">
//               <Button variant="outline-primary" onClick={() => showEditForm(task)}>
//                 <i className="bi bi-pencil"></i>
//               </Button>{' '}
//               <Button variant="outline-danger" onClick={() => deleteTask(task.id)}>
//                 <i className="bi bi-trash"></i> 
//               </Button>
//             </div>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default TaskList;

import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './TaskList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHourglassHalf, faClock } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, deleteTask, showEditForm, handleShowForm }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'priority-high';
      case 'Medium':
        return 'priority-medium';
      case 'Low':
        return 'priority-low';
      default:
        return '';
    }
  };

  return (
    <div>

      {/* Task cards */}
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Card className="task-card mb-3" key={index}>

            {/* Task */}
            <div className="task-card-content d-flex justify-content-between align-items-center p-3">
              <div className="task-details flex-grow-1">
                <h2 className="task-title">{task.name}</h2>
              </div>

            {/* Priority */}
            <div className="task-priority-container">
              <span className={`task-priority ${getPriorityClass(task.priority)}`}>
                {task.priority}
              </span>
            </div>


           {/* Icons */}
            {task.status === 'In Progress' ? (
              <FontAwesomeIcon icon={faHourglassHalf} className="status-icon in-progress" />
              ) : task.status === 'Done' ? (
                <FontAwesomeIcon icon={faCheckCircle} className="status-icon done" />
              ) : (
                <FontAwesomeIcon icon={faClock} className="status-icon to-do" />
              )}
              <div className="task-actions">
                <Button className="task-action-btn" variant="outline-primary" onClick={() => showEditForm(task)}>
                  <i className="bi bi-pencil"></i>
                </Button>
                <Button className="task-action-btn" variant="outline-danger" onClick={() => deleteTask(task.id)}>
                  <i className="bi bi-trash"></i>
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
