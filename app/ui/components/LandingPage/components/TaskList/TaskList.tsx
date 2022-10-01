import React from 'react';

import { Task } from './components';
import useTasksQuery from '../../../../hooks/useTasksQuery';

import styles from './TaskList.module.css';
import { CreateTask } from './components/CreateTask';

export default function TaskList() {
  const { loading, data, error } = useTasksQuery();

  if(loading) {
    return (
      <h1>Loading...</h1>
    );
  }

  if(error) {
    return (
      <h1>There was an error please try again.</h1>
    );
  }

  const tasks = data.tasks;

  return (
    <div className={styles.TaskList}>
      {
        tasks.map((task, index) => (
          <Task key={index} task={task}/>
        ))
      }
      <CreateTask />
    </div>
  );
}
