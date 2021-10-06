import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail"
import Loading from './Loading'
import {connect} from 'react-redux'
import {addComment,fetchDishes} from '../../redux/actionCenter'
import {CardColumns,Modal,ModalBody,ModalFooter,Button} from 'reactstrap'
//now we will dispatch action as props
const mapDispatchToProps=dispatch=>{
    return{
        addcomment:(dishId,rating,author,comment)=>dispatch(addComment(dishId,rating,author,comment)),
        fetchDishes:()=>dispatch(fetchDishes())
    }
}
const mapStateToProps = state=>{
    return{
        dishes:state.dishes,
        comments:state.comments
    }
}
class Menu extends Component{
    state={
        selected_dish_detail:null,
        isModelOpen:false,
    }
    
    onDishSelect=(dishitem)=>{
        this.setState({
            selected_dish_detail:dishitem,
            isModelOpen:!this.state.isModelOpen
        })
        
       // console.log(this.state.selected_dish_detail);
    }
    changeModalOpen=()=>{
        this.setState({
            isModelOpen: !this.state.isModelOpen
        })
    }
    componentDidMount(){ 
        this.props.fetchDishes();
    }
    render(){
        //console.log(this.state.dishes)
        document.title="Menu";
        if(this.props.dishes.isLoading){
           return(
            <Loading />
           );
        }
        else{
            const dishmenuitems=this.props.dishes.dishes.map(item=>{
                return(
                    <MenuItem dish={item} key={item.id} onDishSelect={()=>this.onDishSelect(item)} />
                );
                
            })
            let dish_detail_view=null;
            if(this.state.selected_dish_detail!=null){
                //will add comments from comments after filtering out
                const comments_list=this.props.comments.filter(comment=>{
                    return comment.dishId===this.state.selected_dish_detail.id
                })
                dish_detail_view=<DishDetail dish={this.state.selected_dish_detail} 
                comments_list={comments_list} 
                comment_addition={this.props.addcomment}
                />
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
        
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);