import React from 'react';
import './style.css';
import DisplayCounter from './DisplayCounter';
import UpdateCounter from './UpdateCounter';

const myFunc = () => {
  <DisplayCounter />;
};

export default function App() {
  return (
    <div>
      <h1>
        <DisplayCounter />
      </h1>
      <button onClick={myFunc}>Click Me</button>
    </div>
  );
}
