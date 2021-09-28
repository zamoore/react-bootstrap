import React, { useState } from 'react';

const Button = () => {
  const [count, updateCount] = useState(0);

  return (
    <button type="button" onClick={() => updateCount(count + 1)}>
      Still still clicked {count} times
    </button>
  );
};

export default Button;
