// index.js (entry point for React)
import React from 'react';
import ReactDOM from 'react-dom';
import WorkerList from './Components/WorkerList';

ReactDOM.render(
  <React.StrictMode>
    <WorkerList />
  </React.StrictMode>,
  document.getElementById('root')
);
