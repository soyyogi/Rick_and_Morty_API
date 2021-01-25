import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import EpisodeDetails from './components/EpisodeDetails/EpisodeDetails';

function App() {
  const [episode, setEpisode] = useState([])
  function getEpisode(episode: []) {
    setEpisode(episode)
  }

  return (
    <div className="App">
      <Header />
      <div className="main_container">
        <Sidebar passToParent={getEpisode} />
        <EpisodeDetails episode={episode} />
      </div>
    </div>
  );
}

export default App;
