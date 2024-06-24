import React from 'react';
import './Section6.css';

const Section6 = () => {
    const cities = [
     "Explore","Explore Top"
    ];

    return (
        <div className="containers">
            <h2 >Explore Every Restaurants Near Me</h2>
            <div className="button-grid">
                {cities.map((city, index) => (
                    <button key={index} className="city-button2">
                         {city} Restaurants Near Me
                    </button>
                ))}
               
            </div>
        </div>
    );
}

export default Section6;