import React from "react";
import {Card,CardImg,CardTitle,CardImgOverlay } from "reactstrap";
const MenuItem=(props)=>{
    //console.log(props)
    return(
        <div>
            <Card style={{margin: "10px",border:"1px auto" }}>
                <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{opacity:"0.5"}}></CardImg>
                <CardImgOverlay>
                    <CardTitle style={{cursor:"pointer"}} onClick={props.onDishSelect}>{props.dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    );
}
export default MenuItem;