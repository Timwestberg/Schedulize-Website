import React from "react";
import "bulma-pricingtable/dist/css/bulma-pricingtable.min.css";
const Card = props => {
  return (
    // <div className='card'>
    //   <div className='card-header title level is-mobile'>
    //     <div className='level-item'>{props.name}</div>
    //   </div>
    //   <div className=' is-multiline card-content'>
    //     <div className='column is-full level'>
    //       <h1 className='title'>{props.price}</h1>
    //     </div>
    //     <div className='column is-full'>
    //       <p>
    //         Dolore do non sunt deserunt ipsum irure aute voluptate. Nisi ut
    //         ipsum aliqua ipsum.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div class='pricing-plan is-primary'>
      <div class='plan-header'>{props.name}</div>
      <div class='plan-price'>
        <span class='plan-price-amount'>
          <span class='plan-price-currency'>$</span>{props.price}
        </span>
        /month
      </div>
      <div class='plan-items'>
        <div class='plan-item'>20GB Storage</div>
        <div class='plan-item'>100 Domains</div>
        <div class='plan-item'>-</div>
        <div class='plan-item'>-</div>
      </div>
      <div class='plan-footer'>
        <button class='button is-fullwidth  ' >
          Current plan
        </button>
      </div>
    </div>
  );
};

export default Card;
