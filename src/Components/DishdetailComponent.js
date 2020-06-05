import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderComments({comments})
	{
		if(comments==null)
		{
			return(<div></div>)
		}
		const Comments = comments.map(comment => {
			return (
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
	function RenderDish({dish})
	{
		if(dish!=null){
			return(
				<div className="col-12 col-md-5 m-1">
				<Card>
				   <CardImg top src={ dish.image } alt={dish.name}></CardImg> 
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

const Dishdetail = (props) => {
		if(props.dish!=null)
			return(
				<div className="container">
				 <div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to="/menu">menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
					</Breadcrumb>
				</div>
				<div className="col-12">
					<h3>{props.dish.name}</h3>
					<hr />
				</div>
					<div className="row">
						<RenderDish dish={props.dish} />
						<RenderComments comments={props.comments} />
					</div>
				</div>
			);
}

export default Dishdetail;