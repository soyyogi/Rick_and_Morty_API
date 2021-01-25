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
        if (info?.prev === null) {
            const node = prevRef.current;
            if (node) {
                node.setAttribute('disabled', 'true')
                node.classList.remove('active')
            };
        } else {
            const node = prevRef.current;
            if (node) {
                node.removeAttribute('disabled')
                node.classList.add('active')
            };
        }
        if (info?.next === null) {
            const node = nextRef.current;
            if (node) {
                node.setAttribute('disabled', 'true')
                node.classList.remove('active')
            };
        } else {
            const node = nextRef.current;
            if (node) {
                node.removeAttribute('disabled')
                node.classList.add('active')
            };
        }
    }, [info])

    async function prevButtonClick() {
        const response = await axios.get(info?.prev);
        setData(response.data)
    }

    async function nextButtonClick() {
        const response = await axios.get(info?.next);
        setData(response.data)
    }

    function listItemClick(id: number) {
        const episode = episodes?.filter((epi: any) => epi.id === id)
        console.log(episode)
    }

    return (
        <section className="sidebar">
            <ul className="sidebar_list">
                {episodes && episodes.map((epi: any) => {
                    return <li key={epi.id} onClick={() => listItemClick(epi.id)} className="sidebar_list_item">{epi.episode}</li>
                })}
                <div className="sidebar_nav_buttons">
                    <button ref={prevRef} onClick={prevButtonClick} className="prev active">&#8678;</button>
                    <button ref={nextRef} onClick={nextButtonClick} className="next active">&#8680;</button>
                </div>
            </ul>
        </section>
    )
}

export default Sidebar;
