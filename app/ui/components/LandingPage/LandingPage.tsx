import React from 'react';

import { TaskList } from './components';

import styles from './LandingPage.module.css';

export default function LandingPage() {
  return (
    <main className={styles.LandingPage}>
      <h1>Taskify</h1>
      <a href='/logout' className={styles.LogoutButton}>Logout</a>
      <TaskList />
    </main>
  );
}
