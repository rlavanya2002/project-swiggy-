import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import UsingFetch from './Api/Api';
import AsyncAwait from './Api/Api';
import ButtonClick from './Api/Api';
import PassParam from './Api/Api';
import SearchUser from './Api/Api';
import Section1 from './Section1/Section1';
import LoadingText from './Api/Api';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

import RestaurantCard from './Section3/Json';
import Act from './Card/app';
import CardComponent from './Card/CardComponent';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Website from './Website/Website';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/> 
        <Section1/>
        <Section2/>

        
         <Section3/>
         <RestaurantCard/> 
         <Section4/>
         {/* <Act/>
         <CardComponent/> */}
         <Section5/>
          <Section6/>
          <Website/>
          <Footer/>

        
        </div>
       
    );
  }
}

export default App;



