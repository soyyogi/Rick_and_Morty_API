import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <Sidebar />
        
      </div>
    </div>
  );
}

export default App;
