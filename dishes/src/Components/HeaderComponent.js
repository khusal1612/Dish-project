import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render()
    {
        return(
            <React.Fragment>
            <Navbar dark>
                <div className="container">
                <NavbarBrand href="/">
                    blah blah blah
                </NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>et5erynb zcx</h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header;