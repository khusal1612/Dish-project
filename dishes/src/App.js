import React, { Component } from 'react';
import './App.css';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">
                blah b;lah blah
            </NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes = {this.state.dishes}/>
    </div>
  );
}
}

export default App;

