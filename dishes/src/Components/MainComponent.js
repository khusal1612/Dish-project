import React, { Component } from 'react';
import Menu from './Components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Dishdetail from './DishdetailComponent';

class Main extends Component{
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dish) {
      this.setState({selectedDish: dish});
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
      <Dishdetail dish={} />
    </div>
  );
}
}

export default Main;

