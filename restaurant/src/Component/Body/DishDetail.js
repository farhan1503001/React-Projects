import React from "react";
import {Card,CardBody,CardImg,CardText,CardTitle} from "reactstrap"
import CommentForm from "./CommentForm";
import Comments_viewer from "./Comments";
const DishDetail=(props)=>{
    //console.log(props.dish.comments)
    return(
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                    <CardBody style={{textAlign:"left"}}>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText><b>Description:</b></CardText>
                        <CardText>{props.dish.description}</CardText>
                        <CardText><b>Price:</b> {props.dish.price}/-</CardText>
                        
                        <hr/>
                         <CardText><b>Reviews:</b></CardText>
                        <Comments_viewer comments={props.comments_list}/>
                        <hr/>
                        <CommentForm dishId={props.dish.id} comment_addition={props.comment_addition} />
                    </CardBody>         
            </Card>
        </div>

    );
}
export default DishDetail;