import React from 'react';
import ReactDOM from 'react-dom';

const customButton = <button>Click Me!</button>;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(customButton);
