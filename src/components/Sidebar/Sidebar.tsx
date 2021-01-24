import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

function Sidebar() {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState([]);
    const [data, setData] = useState<any>();

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/episode');
            setData(response.data)
        })();
    }, [])

    useEffect(() => {
        setEpisodes(data?.results)
        setInfo(data?.info)
    }, [data])


    return (
        <section className="sidebar">
            <ul className="sidebar_list">
                {episodes && episodes.map((epi: any) => {
                    return <li key={epi.id} className="sidebar_list_item">{epi.episode}</li>
                })}
                <div className="sidebar_nav_buttons">
                    <button className="prev">&#8678;</button>
                    <button className="next">&#8680;</button>
                </div>
            </ul>
        </section>
    )
}

export default Sidebar;
