import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardComponent from './CardComponent';

function Act() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {restaurants.map((restaurant, index) => (
          <CardComponent key={index} restaurant={restaurant} />
        ))}
      </Row>
    </Container>
  );
}

export default Act;
