import React from 'react'
import "./ActorCard.css"

export const ActorCard = ({actor}) => {
  return (
    <div className="actor-container">
        <img src={actor.imgsrc} alt="" />
        <span>{actor}</span>
    </div>
  );
};
export default ActorCard;