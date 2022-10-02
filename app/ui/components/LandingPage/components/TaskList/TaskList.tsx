import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { Task, CreateTask } from './components';
import {useTasksQuery} from '../../../../hooks';
import { Task as TaskType } from '../../../../graphql/types/graphql';

import styles from './TaskList.module.css';

export default function TaskList() {
  const { loading, data, error } = useTasksQuery();
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    if(data?.tasks) {
      setTasks(data.tasks);
    }
  }, [data]);

  if(loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#E0E0E0"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    );
  }

  if(error) {
    return (
      <h1>There was an error please try again.</h1>
    );
  }

  const handleCreateTask = (task: TaskType) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className={styles.TaskList}>
      {
        tasks.map((task, index) => (
          <Task key={index} task={task}/>
        ))
      }
      <CreateTask onTaskCreate={handleCreateTask}/>
    </div>
  );
}
