import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import { StarFill } from 'react-bootstrap-icons';
import './CardComponent.css';

const CardComponent = ({ restaurant }) => {
  return (
    <Col md={6} lg={3} className="mb-4">
      <Card className="restaurant-card">
        <div className="card-img-wrapper">
          <Card.Img variant="top" src={restaurant.image} />
          {restaurant.discount && (
            <div className="discount-badge">
              {restaurant.discount}
            </div>
          )}
        </div>
        <Card.Body>
          <Card.Title className="card-title">
            {restaurant.name}
          </Card.Title>
          <div className="card-rating">
            <StarFill className="starfill" />
            <span className="rating">{restaurant.rating}</span>
            <span className="time">{restaurant.time}</span>
          </div>
          <Card.Text>
            {restaurant.cuisine}<br />
            {restaurant.location}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardComponent;
