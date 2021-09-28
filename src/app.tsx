import React from 'react';
import './styles.css';
import testImage from './test.jpeg';

const App = () => (
  <div>
    <h1>Hello world</h1>
    <img src={testImage} alt="It's a test" />
  </div>
);

export default App;