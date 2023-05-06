import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { defaultTheme } from './constant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={defaultTheme} withGlobalStyles withNormalizeCSS>
    <Notifications position='top-right' zIndex={2077} limit={5} />
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
