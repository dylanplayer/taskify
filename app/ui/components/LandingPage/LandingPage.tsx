import React from 'react';

import { TaskList } from './components';

import './LandingPage.module.css';

export default function LandingPage() {
  return (
    <main className='LandingPage'>
      <h1>Taskify</h1>
      <TaskList />
    </main>
  );
}
