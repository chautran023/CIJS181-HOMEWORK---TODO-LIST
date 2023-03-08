import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from './App.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const element = (
  <div>
    <TodoList />
  </div>
);

root.render(element);
