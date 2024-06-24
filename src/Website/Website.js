// 

import React from 'react';
import './Website.css';
import  Playstore from './play_store.png'
import  Appstore from './app_store.avif'

const Website = () => {
    return (
        <div className="download-banner">
            <h2 style={{fontWeight:'700',marginLeft:'100px',fontFamily:'sans-serif'}}>For better experience, download the Swiggy app now</h2>
            <div className="download-buttons">
            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank" rel="noopener noreferrer">
                 <img src={Playstore} alt='playstore' className='playstore'></img></a>
                 <a href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920" target="_blank" rel="noopener noreferrer">
              <img src={Appstore} alt='playstore' className='appstore'></img></a>
            </div>
        </div>
    );
};

export default Website;
