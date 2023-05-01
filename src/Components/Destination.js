import React from "react"
import "../Styles/Destinations.css"
import ping from "../Icons/ping.png"
export default function Destination(props) {
    return (
        <div className="dest-container">
        <div className="image-container">
            <img src={`./Images/${props.item.image.file}`} className="image" alt={props.item.image.alt}></img>
        </div>
        <article className="dest-info">
            <span className="dest-country"><img src={ping} width="20px"></img><p>{props.item.country}</p></span>
            <h2 className="dest-location">{props.item.location}</h2>
            <p className="dest-duration">{props.item.dates.startDate} - {props.item.dates.endDate}</p>
            <p>{props.item.description}</p>
        </article>
        </div>
   )
}