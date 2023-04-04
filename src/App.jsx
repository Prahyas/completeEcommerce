import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import ProductCollection from "./pages/ProductCollection";
import ProductItem from "./components/ProductItem";
import SingleProduct from "./pages/SingleProduct";

function App() {
  let user = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <ProductCollection />
          </Route>
          <Route path="/products/:category">
            <ProductCollection />
          </Route>
          <Route path="/product/:id">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
