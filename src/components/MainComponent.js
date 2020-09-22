import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments: COMMENTS
        }
    }

    onDishSelect(dish) {
        console.log('Called to update the selectedDish state')
        this.setState({
            selectedDish: dish
        })
    }

    render() {
        console.log('Called MAIN component render method !');
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} clickedDish={(dish) => this.onDishSelect(dish)} />
                <DishDetail comments={this.state.comments} dish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Main;