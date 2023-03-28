import React from "react";
import {data} from "./Data"

export default function Main () {
    console.log(data)
    return (
        <div className="destination-container">
            <div id="destination-image">
                <img src=""/>
            </div>
            <div id="destination-info">
                <p>Japan <span>View on Google Maps</span></p>
                <h3>Mount Fuji</h3>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )
}