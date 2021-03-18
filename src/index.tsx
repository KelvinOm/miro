import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'sanitize.css/sanitize.css';
import { App } from 'app';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNT_NODE,
);
