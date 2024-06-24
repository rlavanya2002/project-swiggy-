import React, { useState } from 'react';
import './Section5.css';

const Section5 = () => {
  
    const initialCities = [
        "Best Chinese Restaurants", "Best South Indian Restaurants", "Best Indian Restaurants", "Best Kerala Restaurants",
        "Best Korean Restaurants ", "North Indian Restaurants ", "Best Seafood Restaurants ", " Best Bengali  Restaurants ",
        "Best Punjabi Restaurants ", "Best Italian Restaurants "
    ];

    
    const additionalCities = [
        "Japanese Restaurants Near Me", "Andhra Restaurants Near Me", "Briyani Restaurants Near Me", "Gujarati Restaurants Near Me",
        "Thai Restaurants Near Me", "Pizzas Restaurants Near Me", "Asian Restaurants Near Me", "Fast Food Restaurants Near Me",
        "Jain Restaurants Near Me", "Cafe Restaurants Near Me", "Continential Restaurants Near Me","Mexican Restaurants Near Me",
        "Mughali Restaurants Near Me","Sushi Restaurants Near Me"
    ];


    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='line'>        
            <div className="container">
            <h2>
Best Cuisines Near Me</h2>
            <div className="button-grid">
                {initialCities.map((city, index) => (
                    <button  xs={12} sm={6} md={4} lg={3} key={index} className="city-button">
                        {city} Near Me
                    </button>
                ))}
                {showMore && additionalCities.map((city, index) => (
                    <button key={index + initialCities.length} className="city-button">
                       {city}  Near Me
                    </button>
                ))}
                <button className="city-button show-more" onClick={handleShowMore}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
      
        </div>

    );
}

export default Section5;
