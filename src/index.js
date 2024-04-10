import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot из react-dom/client
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const rootElement = document.getElementById('root');

const app = (
    <React.StrictMode>
        <Provider store={store}>

                <App />

        </Provider>
    </React.StrictMode>
);

createRoot(rootElement).render(app); // Используем createRoot из react-dom/client
