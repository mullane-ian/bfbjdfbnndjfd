import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Work } from "./components";
import ContactForm from './components/ContactForm'

import "./App.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Work" exact component={() => <Work />} />
          <Route path="/contact" exact component={() => <ContactForm />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
