import React from 'react';

import { Task } from './components';

import styles from './TaskList.module.css';

export default function TaskList() {
  const tasks = [
    {
      createdAt: Date.now(),
      title: 'Do my homework',
    }
  ];

  return (
    <div className={styles.TaskList}>
      {
        tasks.map((task, index) => (
          <Task key={index} title={task.title}/>
        ))
      }
    </div>
  );
}
