import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@components/button/component';

const Home = () => (
  <section>
    <header>
      <h2 className="text-blue-500 font-semibold">
        <FontAwesomeIcon icon="home" />
        Home
      </h2>
    </header>
    <p>This is the home page</p>
    <Button />
  </section>
);

export default Home;
