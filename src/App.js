import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { link } from 'react-router-dom'; 

class App extends React.Component {

  state = { 
    basket: 0
  }

  addToBasket = () => {
    console.log("Adding to basket")

    this.setState({
      basket: this.state.basket + 1
    })
    } 

  render() {
    return (
      <React.Fragment>
          <BrowserRouter> 
          <Navbar basketNumbers={this.state.basket}/>

          {/* because I'm passing in a property, the render keyword is used, if we aren't passing in a property then 
          component is used, below. */} 
          <Switch>
            <Route exact path="/" render={() => <Home myFunc={this.addToBasket}/>}/>
            <Route exact path="/about" component={About} /> 
          </Switch>

          </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;
