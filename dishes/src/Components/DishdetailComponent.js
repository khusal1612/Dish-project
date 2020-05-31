import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class Dishdetail extends Component{

    renderComments(comments)
    {
        if(comments==null)
        {
            return(<div></div>)
        }
        const Comments = comments.map(comment => {
            return (
                <div className="container">
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
                </div>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {Comments}
                </ul>
            </div>
        )
    }
    renderDish(dish)
    {
        if(dish!=null){
            return(
                <div className="row">
                <Card>
                   <CardImg width="100%" src={ dish.image } alt={dish.name}></CardImg> 
                   <CardBody>
                       <CardTitle>{ dish.name }</CardTitle>
                       <CardText> { dish.description } </CardText>
                   </CardBody>
                </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render()
    {
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishitem = this.renderDish(dish)
        const commentitem = this.renderComments(dish.comments)
        return(
            <div className="row">
                {dishitem}
                {commentitem}
            </div>
        )
    }
}

export default Dishdetail;