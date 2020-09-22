import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

function RenderDishDetail({ dish }) {
    return dish ? (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle><strong>{dish.name}</strong></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    ) : <div></div>
}


function RenderComments({ comments, dish }) {
    const commentList = comments.map(comment => {
        return (
            <li key={comment.id} className='list-unstyled m-2'>
                <p>{comment.comment}</p>
                <p>-- {comment.user}, {comment.date}</p>
            </li>
        );
    });

    return dish ? (
        <div>
            <h4><strong>Comments</strong></h4>
            <ul>{commentList}</ul>
        </div>
    ) : <div>
            <p>No comments to show ! Choose a dish to show comments...</p>
        </div>
}


function DishDetail(props) {
    const dish = props.dish;
    const comments = props.comments;
    return (
        <div className='container'>
            <div className='row d-flex justify-content-around'>
                <div className='col-12 col-md-5 m-1'>
                    <RenderDishDetail dish={dish} />
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <RenderComments comments={comments} dish={dish} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;