import React from 'react';
import './EpisodeDetails.css';

interface Props {
    episode: any
}

function EpisodeDetails({ episode }: Props) {
    episode.length ? console.log(episode) : console.log('not selected')

    return (
        <section className="episodeDetails">
            <div className="episodeDetails_header">
                <h1 className="title">{episode[0]? episode[0]['name'] : ''}</h1>
                <p>
                    <span className="air_date">{episode[0]? episode[0]['air_date'] : ''}</span>
                    <span className="episode_code">{episode[0]? episode[0]['episode'] : ''}</span>
                </p>
            </div>
        </section>
    );
}

export default EpisodeDetails;
