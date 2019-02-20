import React from "react";
import Card from "../components/Card";
import "bulma-pricingtable/dist/css/bulma-pricingtable.min.css";

class Pricing extends React.Component {
  state = {
    cards: [
      {
        id: 1,
        name: "Small Business",
        price: 99,
        description: ""
      },
      { id: 2, name: "Custom", price: 1000, description: "" }
    ]
  };

  render() {
    return (
      //   <div className="hero-body has-background-dark">
      <div className='container is-fluid '>
        <section className='box has-text-centered has-background-black'>
          <h1 className='title has-text-white'>Pricing </h1>
        </section>
        <section className='section '>
          <div className='columns pricing-table has-background-black'>
            {this.state.cards.map(card => (
              <div className='column'>
                <Card key={card.id} name={card.name} price={card.price} />
              </div>
            ))}
          </div>
        </section>
      </div>
      //   </div>
    );
  }
}

export default Pricing;
