import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'

//let h1=React.createElement('h1',{},"This is React Project")

let root=ReactDom.createRoot(document.getElementById('root'));
root.render(<App></App>)