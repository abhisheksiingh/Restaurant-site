import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import dish from './components/Dish';
import { Component, useState } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      dishes:dish
    };
  }
  render(){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }
}

export default App;
