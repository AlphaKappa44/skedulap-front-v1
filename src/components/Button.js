import React, { useState } from 'react';
import './Button.css';

function Button() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="button-green" onClick={() => setCount(count + 1)}>
      SE CONNECTER
      </button>
      <button className="button-orange" onClick={() => setCount(count + 1)}>
      S'INSCRIRE
      </button>
    </div>
  );
}

export default Button;