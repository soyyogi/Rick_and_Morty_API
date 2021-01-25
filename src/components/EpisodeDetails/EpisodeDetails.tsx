import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import './EpisodeDetails.css';

interface Props {
    episode: any
}

function EpisodeDetails({ episode }: Props) {
    const [characters, setCharacters] = useState<any>();

    useEffect(() => {
        (async function() {
            if (episode[0]?.characters.length > 0) {
                const response = await axios.all(episode[0]?.characters?.map((epi: string) => axios.get(epi)))
                setCharacters(response)
            }
        })();
    }, [episode]);

    function renderCharacters() {
        return characters?.map((el: any) => {
            const {id, image, name, status, species} = el.data
            return <CharacterCard
                key={id}
                image={image}
                name={name}
                status={status}
                species={species}        
            />;
        });
    }

    return (
        <section className="episodeDetails">
            <div className="episodeDetails_header">
                <h1 className="title">{episode[0] ? episode[0]['name'] : ''}</h1>
                <p>
                    <span className="air_date">{episode[0] ? episode[0]['air_date'] : ''}</span>
                    <span className="episode_code">{episode[0] ? episode[0]['episode'] : ''}</span>
                </p>
            </div>
            <div className="episodeDetails_characters">
                {characters && renderCharacters()}
            </div>
        </section>
    );
}

export default EpisodeDetails;
