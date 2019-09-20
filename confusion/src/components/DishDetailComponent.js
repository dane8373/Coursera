import React, { Component } from 'react';
import { Card, CardImg, CardText,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    renderDish() {
        if (!this.props.dish) {
            return <div></div>
        }
        return (
        <Card>
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
        </Card>
        );
    }

    renderComments() {
        if (!this.props.dish) {
            return <div></div>
        }
        return (
        <div>
            <h4>Comments</h4>
                {this.props.dish.comments.map((comment) => {
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

    render() {
        return (
            <div className = 'container'>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;