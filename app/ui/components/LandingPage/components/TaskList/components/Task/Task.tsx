import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Task } from '../../../../../../graphql/types/graphql';

import styles from './Task.module.css';

interface Props {
  task: Task;
}

export default function Task({ task }: Props) {
  return (
    <div className={styles.Task}>
      <div className={styles.TaskTitleContainer}>
        <p className={styles.TaskTitle}>{task.title}</p>
      </div>
      <div className={styles.TaskButtonContainer}>
        <button className={styles.TaskButton}>
          <FaRegTrashAlt
            color='#E0E0E0'
            size={15}
          />
        </button>
      </div>
    </div>
  );
}
