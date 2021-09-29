import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => (
  <section>
    <header>
      <h2 className="text-blue-500 font-semibold">
        <FontAwesomeIcon icon="home" />
        Home
      </h2>
    </header>
    <p>This is the home page</p>
  </section>
);

export default Home;
