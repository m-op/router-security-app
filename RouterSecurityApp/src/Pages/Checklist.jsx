import React, { useState } from 'react';

function Checklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Change default router password', completed: false },
    { id: 2, text: 'Enable WPA3 encryption', completed: false },
    { id: 3, text: 'Disable open ports', completed: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Security Checklist</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
            {task.completed ? <s>{task.text}</s> : task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;

