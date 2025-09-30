'use client'
import { FaHome } from 'react-icons/fa';
import './airbnblist.css';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AirbnbCard({airbnb}){
    const [imageError, setImageError] = useState(false);
    const [liked, setLiked] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    
    const toggleLike = () => {
        setLiked(!liked);
    }

    return(
        <div className="airbnb-card">
            <h1 className="airbnb-name">{airbnb.name}</h1>
            <div className="airbnb-image-container">
                {airbnb.images.picture_url && !imageError ? (
                <img
                src={airbnb.images.picture_url}
                alt={airbnb.name}
                className="airbnb-image"
                onError={handleImageError}
                />
            ) : (
                <div>
                    <span><FaHome /></span>
                </div>
            )}
            <button onClick={toggleLike}>
                <FontAwesomeIcon icon={liked ? solidheart : regularHeart} />
            </button>
            </div >
            <div className="airbnb-url">
                {airbnb.listing_url}                
            </div>
            <div className="airbnb-summary">
                <p>{airbnb.summary}</p>
            </div>
        </div>

    );
}
}