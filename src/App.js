import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductScreen from './screen/ProductScreen';
import HomeScreen from './screen/HomeScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import CartScreen from './screen/CartScreen';
import MenuScreen from './screen/MenuScreen';
import Error from './screen/ErrorScreen';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShippingAddressScreen from './screen/ShippingAddressScreen';
import PaymentMethodScreen from './screen/PaymentMethodScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import SuccessScreen from './screen/SuccessScreen';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <main style={{ minHeight: `calc(100vh - 198px)` }}>
        <Switch>
          <Route path="/" exact component={HomeScreen}></Route>
          <Route path="/api/products/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/menu" component={MenuScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/ordersuccess" component={SuccessScreen}></Route>
          <Route path="*" component={Error}></Route>
        </Switch>
      </main>
      <ScrollButton />
      <Footer></Footer>
    </Router>
  );
}

export default App;
