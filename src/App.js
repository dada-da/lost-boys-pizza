import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./screen/ProductScreen";
import HomeScreen from "./screen/HomeScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import CartScreen from "./screen/CartScreen";
import MenuScreen from "./screen/MenuScreen";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/api/products/:id" component={ProductScreen}></Route>
          <Route path="/api/sweet/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/menu" component={MenuScreen}></Route>
        </Switch>
      </main>
      <ScrollButton />
      <Footer></Footer>
    </Router>
  );
}

export default App;
