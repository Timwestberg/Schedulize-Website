import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

class App extends Component {
  
  handleTabs = () => {
    if (Home) {
      this.setState({ nav: { home: { active: true } } });
    }
  };
  render() {
    return (
      <Router>
        <div className="hero is-fullheight ">
          <Nav handleTabs={this.handleTabs} />
          <div className="hero-body has-background-dark">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
