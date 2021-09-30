import React, { useState } from 'react';

const Button = () => {
  const [count, updateCount] = useState(0);

  return (
    <button
      type="button"
      className="px-2 py-3 bg-red-100"
      onClick={() => updateCount(count + 1)}
    >
      Still still clicked {count} times
    </button>
  );
};

export default Button;
