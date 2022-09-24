import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '../ui';

const app = document.getElementById('app');
const root = createRoot(app!);
root.render(<App />);
