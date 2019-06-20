import React from 'react';
import axios from "axios";
import { Route, Switch, } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paintings from "./components/Paintings";

const App = () => (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/paintings" component={Paintings} />
      </Switch>
    </>
  );

export default App;
