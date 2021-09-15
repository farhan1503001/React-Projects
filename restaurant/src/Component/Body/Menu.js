import React, { Component } from "react";
import DISHES from "../../datas/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail"
class Menu extends Component{
    state={
        dishes:DISHES,
        selected_dish_detail:null
    }
    onDishSelect=(dishitem)=>{
        this.setState({selected_dish_detail:dishitem})
        
        console.log(this.state.selected_dish_detail);
    }
    render(){
        console.log(this.state.dishes)
        const dishmenuitems=this.state.dishes.map(item=>{
            return(
                <MenuItem dish={item} key={item.id} onDishSelect={()=>this.onDishSelect(item)} />
            );
            
        })
        let dish_detail_view=null;
        if(this.state.selected_dish_detail!=null){
            dish_detail_view=<DishDetail dish={this.state.selected_dish_detail} />
        }
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    {dishmenuitems}
                    </div>
                <div className="col-6">
                    {dish_detail_view}
                </div>
                </div>
                
            </div>
        );
    }
}
export default Menu;