import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Sidebar.css';

function Sidebar() {
    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState<any>();
    const [data, setData] = useState<any>();
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

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

    useEffect(() => {
        if(info?.prev === null) {
            const node = prevRef.current;
            if(node) {
                node.setAttribute('disabled', 'true')
                node.classList.remove('active')
            }
        };
        if(info?.next === null) {
            const node = nextRef.current;
            if(node) {
                node.setAttribute('disabled', 'true')
                node.classList.remove('active')
            }
        };
    }, [info])


    return (
        <section className="sidebar">
            <ul className="sidebar_list">
                {episodes && episodes.map((epi: any) => {
                    return <li key={epi.id} className="sidebar_list_item">{epi.episode}</li>
                })}
                <div className="sidebar_nav_buttons">
                    <button ref={prevRef} className="prev active">&#8678;</button>
                    <button ref={nextRef} className="next active">&#8680;</button>
                </div>
            </ul>
        </section>
    )
}

export default Sidebar;
