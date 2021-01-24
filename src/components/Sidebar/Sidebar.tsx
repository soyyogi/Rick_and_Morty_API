import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

function Sidebar() {
    const [episodes, setEpisodes] = useState(null);
    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/episode');
            setData(response.data)
        })();
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <section className="sidebar">
            
        </section>
    )
}

export default Sidebar;
