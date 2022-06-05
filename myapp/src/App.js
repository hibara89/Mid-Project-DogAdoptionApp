import React, { useState } from "react";

import { faker } from "@faker-js/faker";
import { dogs } from "./components/data/data";
import DogCard from "./components/DogCard/DogCard";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import Team from "./components/Team/Team";
import Categories from "./components/categories/Categories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  // const randomName = faker.name.findName();
  // const randomEmail = faker.internet.email();

  const [dogsArray, setDogsArray] = useState();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <button className="show-dogs" onClick={handleClick}>
          Show me the dogs for adoption
        </button>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
        {clicked ? <DogCard /> : <></>}
      </div>
    </Router>
  );
}

export default App;
