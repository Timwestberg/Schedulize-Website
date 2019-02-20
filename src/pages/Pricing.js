import React from "react";
import Card from "../components/Card";

class Pricing extends React.Component {
  state = {};

  render() {
    return (
      //   <div className="hero-body has-background-dark">
      <div className='container is-fluid'>
        <section className='section has-text-centered '>
          <h1 className='title has-text-white'>Pricing</h1>
        </section>
        {/* <section className="section ">
            <div className=" columns is-multiline">
              {this.state.cards.map(card => (
                <div className="column is-3">
                  <Card key={card.id} name={card.name} img={card.img} />
                </div>
              ))}
            </div>
          </section> */}
      </div>
      //   </div>
    );
  }
}

export default Pricing;
