import * as React from 'react';
import './style.css';
import TrafficLight from './TrafficLight';
import { useState } from 'react';

export default function MyTrafficLight() {
  const [On, setOn] = useState('red');
  const handleNext = () => {
    switch (On) {
      case 'red':
        setOn('green');
        break;
      case 'yellow':
        setOn('red');
        break;
      default:
        setOn('yellow');
    }
  };
  return (
    <div>
      <button
        onClick={handleNext}
        type="button"
        className="btn btn-outline-secondary d-flex mx-auto my-3"
      >
        NEXT
      </button>
      <div className="d-flex justify-content-center">
        <TrafficLight color="red" on={On === 'red'} />
        <TrafficLight color="yellow" on={On === 'yellow'} />
        <TrafficLight color="green" on={On === 'green'} />
      </div>
    </div>
  );
}
