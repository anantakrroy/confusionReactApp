import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        })
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                // Passing selected dish object as the prop to the DishDetail component 
                <DishDetail dish={this.state.selectedDish}/>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-3'>
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className='ml-1'>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='row'>
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;