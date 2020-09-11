import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {

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
                    <p>{comment.comment}</p>
                    <p>-- {comment.user}, {comment.date}</p>
                </li>
            )
        });

        if (comments.length !== 0 && this.props.dish !== null) {
            return (
                <div>
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
        console.log(dish);
        const comments = this.props.comments;
        if (dish !== undefined) {
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
        } else {
            return null;
        }
    };

}

export default DishDetail;