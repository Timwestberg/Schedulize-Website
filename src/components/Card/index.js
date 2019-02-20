import React from "react";
import "bulma-pricingtable/dist/css/bulma-pricingtable.min.css";
import "hover.css";

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
    <div className="pricing-plan is-primary ">
      <div className="plan-header ">
        <span className="hvr-grow">{props.name}</span>
      </div>
      <div className="plan-price ">
        <span className="plan-price-amount ">
          <span className="plan-price-currency">$</span>
          <span className="hvr-grow">{props.price}</span>
        </span>
        /month
      </div>
      <div className="plan-items ">
        <div className="plan-item">
          <span className="hvr-grow">20GB Storage</span>
        </div>
        <div className="plan-item">
          <span className="hvr-grow">100 Domains</span>
        </div>
        <div className="plan-item">
          <span className="hvr-grow">20GB Storage</span>
        </div>
        <div className="plan-item">
          <span className="hvr-grow">20GB Storage</span>
        </div>
      </div>
      <div className="plan-footer">
        <button className="button is-fullwidth hvr-shadow">Current plan</button>
      </div>
    </div>
  );
};

export default Card;
