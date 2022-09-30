import React from 'react';

import { Router } from './Router';
import Graphql from './utilities/Graphql';

import './App.module.css';

export default function App() {
  return (
    <main className='App'>
      <Graphql>
        <Router />
      </Graphql>
    </main>
  );
}
