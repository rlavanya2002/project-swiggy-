import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Section1.css'
import Image from 'react-bootstrap/Image';
import uthapam from './Uttapam.avif';
import sand from './Sandwich.avif';
import dosa from './Dosa.avif';
import omllete from './Omelette.avif'
import poori from './Poori.avif'
import parota from './Parotta.avif'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

function Section1() {
  return (

   
    <div className='body'>
    <div className='part1'>
      <Row className='icon'>
        <Col xs={6} md={12}><h5 className='text'> What's on your mind?</h5>

        </Col><Col xs={6} md={12}>
        <ArrowRightCircle className='right'></ArrowRightCircle>
        <ArrowLeftCircle className='left'></ArrowLeftCircle>
        </Col>
     </Row>
     <Row >
    <Col xs={6} md={2} sm={6}>
          <Image src={uthapam}  roundedCircle  className='image'/>
        </Col>
        <Col xs={6} md={2} sm={6}>
          <Image  src={sand} alt='img'roundedCircle className='image' />
        </Col>
        <Col xs={6} md={2} sm={6}>
          <Image src={dosa} roundedCircle  className='image' />
        </Col>
        <Col xs={6} md={2} sm={6}>
          <Image src={omllete} roundedCircle  className='image'/>
        </Col>
        <Col xs={6} md={2} sm={6}>
          <Image src={poori} roundedCircle  className='image'/>
        </Col>
        <Col xs={6} md={2} sm={6}>
          <Image src={parota} roundedCircle className='image' />
        </Col>
        </Row>
    </div>
   </div>

 
  
  )
}

export default Section1