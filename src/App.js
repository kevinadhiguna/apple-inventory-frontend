import React, { Component } from 'react';
import './App.css';
import StockEventsTable from './components/StockEventsTable';
import axios from 'axios';
import AddStockEvent from './components/AddStockEvent';
import AddProduct from './components/AddProduct';
import FileUpload from './components/FileUpload';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Credit from './components/Credit';

// fetch all of the stock events

// seperate stock events by the different products

// display stock events

class App extends Component{
  state = {
    fetchedProducts: [],
    fetchedStockEvents: []
  }

  //LifeCycle Method
  async componentDidMount(){
    const productsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/products'
    })
    const stockEventsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1337/stockevents'
    })

    const fetchedProducts = productsRes.data;
    const fetchedStockEvents = stockEventsRes.data;

    this.setState({ fetchedProducts, fetchedStockEvents });
  }

  render(){
    const { fetchedProducts, fetchedStockEvents } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <AddProduct />
            </Route>
            {/* '/stockevents/add' can be placed above '/stockevents' , only if the <Router> includes the 'exact' property. */}
            <Route exact path="/stockevents/add" >
              <AddStockEvent products={fetchedProducts} />
            </Route>
            <Route exact path="/stockevents">
              <h3 className="APtitle" >Available Products</h3>
              <StockEventsTable
                products={fetchedProducts}
                stockEvents={fetchedStockEvents}
                />
            </Route>
            <Route exact path="/upload">
              <div className="AppUpload">
                <div className="V_Centre">
                  <FileUpload />
                </div>
              </div>
            </Route>
            <Route exact path="/credit">
              <Credit />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
