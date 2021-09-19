import React, { Component } from "react";
import DISHES from "../../datas/dishes";
import COMMENTS  from "../../datas/comments"
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail"
import {CardColumns,Modal,ModalBody,ModalFooter,Button} from 'reactstrap'
class Menu extends Component{
    state={
        dishes:DISHES,
        comments:COMMENTS,
        selected_dish_detail:null,
        isModelOpen:false,
    }
    onDishSelect=(dishitem)=>{
        this.setState({
            selected_dish_detail:dishitem,
            isModelOpen:!this.state.isModelOpen
        })
        
        console.log(this.state.selected_dish_detail);
    }
    changeModalOpen=()=>{
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }
    render(){
        //console.log(this.state.dishes)
        document.title="Menu";
        const dishmenuitems=this.state.dishes.map(item=>{
            return(
                <MenuItem dish={item} key={item.id} onDishSelect={()=>this.onDishSelect(item)} />
            );
            
        })
        let dish_detail_view=null;
        if(this.state.selected_dish_detail!=null){
            //will add comments from comments after filtering out
            const comments_list=this.state.comments.filter(comment=>{
                return comment.dishId===this.state.selected_dish_detail.id
            })
            dish_detail_view=<DishDetail dish={this.state.selected_dish_detail} comments_list={comments_list} />
        }
        return(
            <div className='container'>
                <div className='row'>
                    <CardColumns>
                        {dishmenuitems}
                    </CardColumns>
                    <Modal isOpen={this.state.isModelOpen}>
                        <ModalBody>
                            {dish_detail_view}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='secondary' onClick={this.changeModalOpen}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
                
            </div>
        );
    }
}
export default Menu;