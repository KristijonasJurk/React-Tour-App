import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [text, setText] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>
        {text ? info : info.substring(0, 200)}...
        <button onClick={() => setText(!text)}>
          {text ? 'see more' : 'show less'}
        </button>
      </p>
      <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
    </footer>
  </article>;
};

export default Tour;
