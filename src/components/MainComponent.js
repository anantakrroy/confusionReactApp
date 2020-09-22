import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header />
                <Menu dishes={this.state.dishes} clickedDish={(dish) => this.onDishSelect(dish)} />
                <DishDetail comments={this.state.comments} dish={this.state.selectedDish} />
                <Footer />
            </div>
        );
    }
}

export default Main;