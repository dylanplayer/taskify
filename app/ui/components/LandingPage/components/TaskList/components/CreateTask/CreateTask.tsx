import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useCreateTaskMutation } from '../../../../../../hooks';

import styles from './CreateTask.module.css';

export default function CreateTask() {
  const [newTask, setNewTask] = useState('');
  const [createTask, {loading, error}] = useCreateTaskMutation();

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

  if (error) {
    console.log(error);
    return (<></>);
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
