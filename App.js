import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllSpecials from './components/AllSpecials.js';
import MainPage from './components/MainPage.js';
import Product from './components/Product.js';
import Order from './components/Order.js'; 
import CategoryDetail from './components/CategoryDetail.js' ; 
import ShowCat from  './components/ShowCat.js' ; 
import AllProducts from './components/AllProducts.js';  


   
export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div className="container">
            <Switch>
              <Route component={MainPage} path="/" exact={true} />
              <Route component={MainPage} path= "/home"></Route> 
              <Route component={Product}  path = "/product"></Route>
              <Route component={AllSpecials}  path = "/allspecials"></Route>
              <Route component={Order} path = "/order"></Route>
              <Route component = {CategoryDetail} path = "/catdetail"></Route>
              <Route component = {ShowCat} path = "/showcat"></Route>
              <Route component = {AllProducts} path = "/allproducts"></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}