// import React from 'react'
import Records from '../Json/Records.json'

// function Json() {
//   return (
//     <div>

//   <div className='inner'>
//     {
//         Records&& Records.map( record =>{
//             return(
//                 <div className='box'>
//                     <img src={record.image}/>
//                     <br/>
//                     {record.title} 
//                     <br></br>
//                     <h2>{record.price}</h2>
//                     </div>
//             )
//         })
//     }

//   </div>


//     </div>
//   )
// }
// import React, { useState, useEffect } from 'react';
// import jsonData from './Records.json'

// function MyComponent() {
//   const [Records, setData] = useState([]);
  

//   useEffect(() => {
//     // Set the data when the component mounts
//     setData(jsonData);
//   }, []);

//   return (
//     <div>
//       <h1>JSON Data:</h1>
//       <ul>
//         {Records.map((item) => (
//           <div>

         
//           {item.id}
//           <br></br>
//           {item.title}
//           <br>
//           </br>
//           {item.price}
//           <img src={item.image}/>
       
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyComponent;


// export default Json





// const RestaurantCard = ({ image, discount, name, rating, time, cuisine, location }) => {
//   return (
   
//       <img src={image} alt={name} className="restaurant-image" />
    
//       <div className="restaurant-info">
//         <h3>{name}</h3>
//         <p>{rating} · {time}</p>
//         <p>{cuisine}</p>
//         <p>{location}</p>
//       </div> 
//     </div>
//   );
// };
import React from 'react';
import './Json.css'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';

const RestaurantCard = ({ image, discount, name, rating, time, cuisine, location }) => {
  return (
    <div className='alignemntdiv'>
    <Container className='imgaealign'>
    <Row className='popularc columns-4 d-flex justify-content-between'>
    <Col >
      <Card style={{width:'85%', height: 'auto', borderRadius: '25px', border: 'none' }}>
     
        <Card.Img style={{ width:'100%',borderRadius: '20px' }} src={image} alt={name} className='img' />
        <div className="discount">{discount}</div>
        <Card.Body>
          <div className="restaurant-info">
            <Card.Title>
              <h6 style={{ fontSize: '19px',fontWeight:'bold',marginBottom:'1px' }}>{name}</h6>
              <StarFill className='starfill' />
              <span className='off'>{rating} · {time}</span>
            </Card.Title>
            <Card.Text className='bodyjs'>
              {cuisine}<br />
              {location}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </Col>
    </Row>
    </Container>
  
   </div>
   
  );
};

export default RestaurantCard;
