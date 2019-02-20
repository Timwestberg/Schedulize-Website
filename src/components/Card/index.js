import React from "react";
import "bulma-pricingtable/dist/css/bulma-pricingtable.min.css";
import "hover.css";

const Card = props => {
  return (
    <div className="pricing-plan is-primary cursor">
      <div className="plan-header ">
        <span className="hvr-grow ">{props.name}</span>
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
