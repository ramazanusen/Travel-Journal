import React from "react";

export default function Main (props) {
    const {id, title, location, googleMapsLink, startDate, endDate, description, imageUrl} = props
    return (
        <div className="destination-container">
            <div id="destination-image">
                <img src={`${imageUrl}`}/>
            </div>
            <div id="destination-info">
                <p id="location-country">📍{location} <span><a href={`${googleMapsLink}`} target="blank">View on Google Maps</a></span></p>
                <h2>{title}</h2>
                <p>{startDate} - {endDate}</p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}