import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { Task } from '../../../../../../graphql/types/graphql';
import { useCreateTaskMutation } from '../../../../../../hooks';

import styles from './CreateTask.module.css';

interface Props {
  onTaskCreate: (task: Task) => void;
}

export default function CreateTask({ onTaskCreate }: Props) {
  const [newTask, setNewTask] = useState('');
  const [createTask, {loading, error, data}] = useCreateTaskMutation();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleCreateTask();
    }
  };

  const handleCreateTask = () => {
    if (newTask !== '') {
      createTask({
        variables: {
          title: newTask,
        }
      });
      
      setNewTask('');
    }
  };

  useEffect(() => {
    if (data?.createTask?.task) {
      const task = data?.createTask?.task;
      onTaskCreate(task);
    }
  }, [data]);

  if (error) {
    console.log(error);
  }

  if (loading) {
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

  return (
    <div className={styles.CreateTask}>
      <div className={styles.CreateTaskTitleContainer}>
        <input
          className={styles.CreateTaskTitleInput}
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.CreateTaskButtonContainer}>
        <button
          className={styles.CreateTaskButton}
          onClick={handleCreateTask}
        >ADD</button>
      </div>
    </div>
  );
}
