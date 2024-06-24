// import React from 'react'
// import './Section2.css'
// import Button from 'react-bootstrap/Button';
// import { Filter } from 'react-bootstrap-icons';
 import { Col, Row } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton'
// function Section2() {
//   return (
//     <div className='main'>
//         <h4 className='head'><b>
//             Restaurants with online food delivery in Erode</b>
//         </h4>

//         <div className='button'> 
        
//         <div className='part'>
//         <Row>   
//         <div className='filter'> <Col xs={4}>
//            <button className='round' onClick={() => { window.alert.href = '/https://www.w3schools.com/css/css3_box-sizing.asp' }} target="_blank">
//                 filter<Filter></Filter>
//             </button></Col>
//             </div>
//             <Col xs={4}>
//       <div className='sort'>

//      <DropdownButton  variant="white" title="Sort By" className="round1">
//       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//     </DropdownButton>   
//     </div></Col>
   
//       <div className='fast'>
//       <Col xs={4}>
//       <button className='round3'>
//         Fast delivery
//        </button></Col>
 
//        </div> 
//        </Row>
//       <div className='rating'>
//         <Col xs={4}>
//        <button className='round4'>
//         New on Swiggy
//        </button></Col> </div>
//        <div className='rate'>
//         <button className='round5'>
//           Ratings 4.0+
//         </button>
//        </div>
//        <div className='veg'>
//         <button className='round1'>
//         Pure veg
//        </button></div>
//      <div className='offer'>
//        <button className='round1'>
//         Offers
//        </button>
//        </div>  
//        <div className='price'>
//        <button className='round1'>
//        Rs.300-Rs.600
//        </button>
//        </div>       
//        <div className='less'>
//        <button className='round1'>
//       Less then Rs.300
//        </button>
//        </div>   
//     </div>
//        </div>
//     </div>
//   )
// }

// export default Section2

// src/components/FilterBar.js
import React from 'react';
import './Section2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Section2 = () => {
  return (
    <div className="containermy">
      <h3 style={{fontWeight:'900',marginRight:'500px'}}>Restaurants with online food delivery in Erode</h3>
      <div className="filter-bar d-flex flex-wrap">
        <button className="btn btn-outline-secondary m-1">Filter</button>
        <div className="dropdown m-1">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="sortByDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </button>
          <ul className="dropdown-menu" aria-labelledby="sortByDropdown">
            <li><a className="dropdown-item" href="#">Option 1</a></li>
            <li><a className="dropdown-item" href="#">Option 2</a></li>
            <li><a className="dropdown-item" href="#">Option 3</a></li>
          </ul>
        </div>
        <button className="btn btn-outline-secondary m-1">Fast Delivery</button>
        <button className="btn btn-outline-secondary m-1">New on Swiggy</button>
        <button className="btn btn-outline-secondary m-1">Ratings 4.0+</button>
        <button className="btn btn-outline-secondary m-1">Pure Veg</button>
        <button className="btn btn-outline-secondary m-1">Offers</button>
        <button className="btn btn-outline-secondary m-1">Rs. 300-Rs. 600</button>
        <button className="btn btn-outline-secondary m-1">Less than Rs. 300</button>
      </div>
    </div>
  );
};

export default Section2;

