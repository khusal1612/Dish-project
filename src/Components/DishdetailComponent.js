import React, { Component } from 'react';
import { Card, CardImg, CardBody, Col, CardText, Row, CardTitle, Breadcrumb, BreadcrumbItem, Button, Label, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component{
	constructor(props){
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state={
			isModalOpen: false
		}

	}
	toggleModal(){
		this.setState({
			isModalOpen: !this.state.isModalOpen
		})
	}
	handleSubmit(values){
		console.log("Current State is: " + JSON.stringify(values));
		alert("Current State is: "+JSON.stringify(values));
	}


	render(){
		return(
			<React.Fragment>
				<Button color="danger" onClick={this.toggleModal}><span className="fa fa-edit"></span> Submit Comment</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>	
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values)=> this.handleSubmit(values)}>
							<Row className="form-group">
								<Label md={12} htmlfor="rating">Ratings</Label>
								<Col md={12}>
									<Control.select className="form-control" model="rating" name="rating" id="rating">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
                            <Label md={12} htmlfor="yourname">Your Name</Label>
								<Col md={12}>
									<Control.text 
										model=".yourname"
										className="form-control"
										id="yourname"
										name="yourname"
										placeholder="Your Name"
										validators={{
											required, minLength: minLength(5), maxLength: maxLength(15)
										}}
									/>
									<Errors 
										className="text-danger"
										model=".yourname"
										show="touched"
										messages={{
											required: "Required",
											minLength: "Must be greater than 5 characters",
											maxLength: "Must be less than 15 characters"
										}}
                               		/>
								</Col>
							</Row>
							<Row className="form-group">
                            <Label md={12} htmlfor="comment">Comment</Label>
								<Col md={12}>
									<Control.textarea 
										model=".comment"
										className="form-control"
										id="comment"
										name="comment"
										placeholder="Type here..."
										rows="6"
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<Button color="primary" type="submit">Submit</Button>
								</Col>
							</Row>

						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		)
	}
}
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
					<CommentForm />
				</ul>
			</div>
		)
	}
	function RenderDish({dish})
	{
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
			else {
				return(
					<div></div>
				)
			}
}

export default Dishdetail;