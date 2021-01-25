import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <Sidebar />
        <EpisodeDetails />
      </div>
    </div>
  );
}

export default App;
