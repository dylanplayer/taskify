import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import styles from './Task.module.css';

interface Props {
  title: string;
}

export default function Task({ title }: Props) {
  return (
    <div className={styles.Task}>
      <div className={styles.TaskTitleContainer}>
        <p className={styles.TaskTitle}>{title}</p>
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
