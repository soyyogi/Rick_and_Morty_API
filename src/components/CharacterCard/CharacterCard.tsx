import React from 'react';
import './CharacterCard.css'

interface Props {
    image: string;
    name: string;
    status: string;
    species: string;
}

function CharacterCard({image, name, status, species}: Props) {
    return (
        <div className="characterCard">
            <div className="characterCard_image">
                <img src={image} alt="avatar" />
            </div>
            <div className="characterCard_details">
                <p className="title">{name}</p>
                <p>
                    <span className="species">{species}</span>
                    <span className="status">{status}</span>
                </p>
            </div>
        </div>
    );
}

export default CharacterCard;
