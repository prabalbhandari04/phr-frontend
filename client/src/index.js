import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataProvider from './redux/store'
import ThemeProvider from './context/ThemeContext'
import UserProvider from './context/UserContext'
ReactDOM.render(
  <ThemeProvider>
    <UserProvider>
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
  </UserProvider>
  </ThemeProvider>,
  document.getElementById('root')
);


