import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';

import { Task } from '../../../../../../graphql/types/graphql';
import useDeleteTaskMutation from '../../../../../../hooks/useDeleteTaskMutation';

import styles from './Task.module.css';

interface Props {
  task: Task;
}

export default function Task({ task }: Props) {
  const [deleteTask, {loading, error, data}] = useDeleteTaskMutation();
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    deleteTask({ variables: { id: task.id } });
  };

  useEffect(() => {
    if (data) {
      setDeleted(true);
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

  if (deleted) {
    return null;
  }

  return (
    <div className={styles.Task}>
      <div className={styles.TaskTitleContainer}>
        <p className={styles.TaskTitle}>{task.title}</p>
      </div>
      <div className={styles.TaskButtonContainer}>
        <button
          className={styles.TaskButton}
          onClick={handleDelete}
        >
          <FaRegTrashAlt
            color='#E0E0E0'
            size={15}
          />
        </button>
      </div>
    </div>
  );
}
