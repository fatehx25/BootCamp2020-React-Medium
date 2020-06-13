import React from 'react';
import './App.css';

const MediaCard = ({ title, body, imageUrl }) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <img src={imageUrl} alt="Motivational Quote" class="center"/>
      </div>
    );
  }
  

export default MediaCard;