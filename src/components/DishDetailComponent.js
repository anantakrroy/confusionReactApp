import React, { Component } from 'react';
import { COMMENTS } from '../shared/comments';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: COMMENTS
        }
    }

    allDishes() {
        const dishes = this.props.dishes;
        const dishNames = dishes.map((dish) => {
            return (<span><small> {dish.name}   </small></span>);
        });
        console.log(dishNames);
        return dishNames;
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><strong>{dish.name}</strong></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (<div></div>);
        }
    }

    renderComments(comments) {
        const commentList = comments.map((comment) => {
            return (
                <li key={comment.id} className='list-unstyled m-2'>
                    <div>{comment.comment}</div>
                    <div>-- {comment.user}, {comment.date}</div>
                </li>
            )
        });

        if (comments.length !== 0 && this.props.dish !== null) {
            return (
                <div>
                    <h3>You selected {this.props.dish.name} from among these dishes : {this.allDishes()}</h3>
                    <h4><strong>Comments</strong></h4>
                    <ul>{commentList}</ul>
                </div>
            )
        } else if (this.props.dish !== null && comments.length === 0) {
            return (<div>
                <h3>You selected {this.props.dish.name} from among these dishes : {this.allDishes()}</h3>
                <p>No comments found !</p>
            </div>)
        }

    }

    render() {
        const dish = this.props.dish;
        const comments = this.state.comments;
        return (
            <div className='container'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-12 col-md-5 m-1'>{this.renderDish(dish)}</div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(comments)}
                    </div>
                </div>
            </div>
        );
    };

}

export default DishDetail;