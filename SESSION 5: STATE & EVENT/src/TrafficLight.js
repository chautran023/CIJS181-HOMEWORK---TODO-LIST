import React from 'react';
import { useState } from 'react';

export default function TrafficLight(props) {
  return (
    <>
      <div>
        <span
          className={`light ${props.color} ${props.on ? 'on' : 'off'}`}
        ></span>
      </div>
    </>
  );
}
