import React from "react";
import Card from "../../components/Card";
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
      // <div className="hero-body has-background-primary">
        <div className="container is-fluid ">
          <section className="section ">
            <div className="container ">
              <div className="box columns has-background-black">
                <div className="column level">
                  <h1 className="title has-text-white has-text-center level-item cursor">
                    <span className="hvr-float">P</span>
                    <span className="hvr-float">r</span>
                    <span className="hvr-float">i</span>
                    <span className="hvr-float">c</span>
                    <span className="hvr-float">i</span>
                    <span className="hvr-float">n</span>
                    <span className="hvr-float">g</span>
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container ">
              <div className="box columns pricing-table has-background-black ">
                {this.state.cards.map(card => (
                  <div className="column">
                    <Card key={card.id} name={card.name} price={card.price} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      // </div>
    );
  }
}

export default Pricing;
