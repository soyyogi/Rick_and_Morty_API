import React from 'react';
import './EpisodeDetails.css';

interface Props {
    episode: {}[]
}

function EpisodeDetails({ episode }: Props) {
    episode.length ? console.log(episode) : console.log('not selected')

    return (
        <section className="episodeDetails">
        </section>
    );
}

export default EpisodeDetails;
