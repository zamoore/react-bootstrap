import React from 'react';
import './styles.css';
import testImage from './test.jpeg';
import Button from './button';

const App = () => (
  <div>
    <h1>Hello world</h1>
    <img src={testImage} alt="It's a test" />
    <Button />
  </div>
);

export default App;
