import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analyzer from './pages/analyzer';
import History from './pages/history';
import UserContext from './store/user-context';
import { createGlobalStyle } from 'styled-components';
import { NavbarContextProvider } from './store/navbar-context';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(247, 251, 251);
    margin: 0;
    padding: 0;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <UserContext.Provider value={{name: 'Jiyun'}}>
    <NavbarContextProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="analyzer" element={<Analyzer />} />
        <Route path="history" element={<History />} />
      </Routes>
    </BrowserRouter>
    </NavbarContextProvider>
  </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
