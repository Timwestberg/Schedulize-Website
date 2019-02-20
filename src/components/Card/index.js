import React from "react";

const Card = props => {
  return (
    <div className='card'>
      <div className='card-header title level is-mobile'>
        <div className='level-item'>{props.name}</div>
      </div>
      <div className=' is-multiline card-content'>
        <div className='column is-full level'>
          <h1 className='title level-item'>{props.price}</h1>
        </div>
        <div className='column is-full'>
          <p>
            Dolore do non sunt deserunt ipsum irure aute voluptate. Nisi ut
            ipsum aliqua ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
