import React from "react";
import Card from "../components/Card";

class Pricing extends React.Component {
  state = {
    cards: [
      {
        id: 1,
        name: "Small Business",
        price: "$99/mo",
        description: ""
      },
      { id: 2, name: "Custom", price: "10k", description: "" }
    ]
  };

  render() {
    return (
      //   <div className="hero-body has-background-dark">
      <div className='container is-fluid'>
        <section className='box has-text-centered has-background-black'>
          <h1 className='title has-text-white'>Pricing </h1>
        </section>
        <section className='section '>
          <div className='columns '>
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
