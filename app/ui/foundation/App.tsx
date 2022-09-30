import React from 'react';

import { Router } from './Router';
import Graphql from './utilities/Graphql';

import styles from './App.module.css';

export default function App() {
  return (
    <main className={styles.App}>
      <Graphql>
        <Router />
      </Graphql>
    </main>
  );
}
