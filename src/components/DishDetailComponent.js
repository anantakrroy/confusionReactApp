import React, { Component } from 'react';
// import { COMMENTS } from '../shared/comments';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [
                {
                    id: 1,
                    comment: 'Imagine all the eatables living in confusion',
                    user: 'John Lennon',
                    date: 'Oct 17, 2012'
                },
                {
                    id: 2,
                    comment: 'Imagine all the eatables living in confusion',
                    user: 'John Lennon',
                    date: 'Oct 17, 2012'
                },
                {
                    id: 3,
                    comment: 'Imagine all the eatables living in confusion',
                    user: 'John Lennon',
                    date: 'Oct 17, 2012'
                },
                {
                    id: 4,
                    comment: 'Imagine all the eatables living in confusion',
                    user: 'John Lennon',
                    date: 'Oct 17, 2012'
                },
                {
                    id: 5,
                    comment: 'Imagine all the eatables living in confusion',
                    user: 'John Lennon',
                    date: 'Oct 17, 2012'
                }
            ]
        }
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><strong>{dish.name}</strong></CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        } else {
            return (<div></div>);
        }
    }

    renderComments(comments) {
        if (comments !== null) {
            return comments.map((comment) => {
                return (
                    <ul>
                        <li key={comment.id} style={{ listStyleType: 'none' }}>
                            <div>{comment.comment}</div>
                            <div>-- {comment.user}, {comment.date}</div>
                        </li>
                    </ul>
                )
            })
        } else {
            return (<div></div>)
        }

    }

    render() {
        const dish = this.props.dish;
        const comments = this.state.comments;
        console.log(dish);
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderDish(dish)}
                    <div className='col-12 col-md-5 m-1'>
                        <h4><strong>Comments</strong></h4>
                        {this.renderComments(comments)}
                    </div>
                </div>
            </div>
        );
    };

}

export default DishDetail;