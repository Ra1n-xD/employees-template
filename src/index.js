import React from 'react';
import App from './components/app/app';
import './index.css';

// React 18 -----------------------------------
// import { createRoot } from 'react-dom/client';

// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App />);

// React 17 -----------------------------------
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
