import React from "react";
import {Card,CardBody,CardImg,CardText,CardTitle} from "reactstrap"

const DishDetail=(props)=>{
    return(
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                    <CardBody style={{textAlign:"left"}}>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>
                            <p><b>Description:</b></p>
                            <p>{props.dish.description}</p>
                            <p><b>Price:</b> {props.dish.price}/-</p>
                        </CardText>
                    </CardBody>         
            </Card>
        </div>

    );
}
export default DishDetail;