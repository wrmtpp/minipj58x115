import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: '../covid3.png',
    
  },
  {
    src: '../covid2.jpg',
  
  },
  {
    src: '../covid1.jpg',
  
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;