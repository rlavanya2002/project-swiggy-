import React, { useState } from 'react';
import './Section4.css';

const Section4 = () => {
  
    const initialCities = [
        "Bangalore", "Pune", "Mumbai", "Delhi",
        "Kolkata", "Chennai", "Hyderabad", " Ahmedabad",
        "Jaipur", "Nagpur"
    ];

    
    const additionalCities = [
        "Bhubaneswar", "Chandigarh", "Surat", "Lucknow",
        "Kanpur", "Patna", "Indore", "Bhopal",
        "Visakhapatnam", "Vadodara", "Coimbatore"
    ];


    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='line'>        
            <div className="container">
            <h2>Best Places to Eat Across Cities</h2>
            <div className="button-grid">
                {initialCities.map((city, index) => (
                    <button  xs={12} sm={6} md={4} lg={3} key={index} className="city-button">
                        Best Restaurants in {city}
                    </button>
                ))}
                {showMore && additionalCities.map((city, index) => (
                    <button key={index + initialCities.length} className="city-button">
                        Best Restaurants in {city}
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

export default Section4;
