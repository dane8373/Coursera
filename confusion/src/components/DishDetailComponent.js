import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';;
    
function RenderDish({dish}) {
    if (!dish) {
        return <div></div>
    }
    return (
    <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
    </Card>
    );
}

function RenderComments({dish}) {
    if (!dish) {
        return <div></div>
    }
    return (
    <div>
        <h4>Comments</h4>
            {dish.comments.map((comment) => {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const date = new Date(comment.date)
                return (
                    <ul className = "list-unstyled" key={comment.id}>
                        <li>{comment.comment}</li>
                        <li> -- {comment.author}, {date.toLocaleDateString("en-US", options)}</li>
                    </ul>
                )
            })}
    </div>
    );
}

const DishDetail = (props) => {
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
}

export default DishDetail;