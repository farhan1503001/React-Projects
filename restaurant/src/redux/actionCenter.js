import * as actions from './actionTypes'
import axios from 'axios'
export const addComment=(dishId,rating,author,comment)=>(
    {
        type:actions.ADD_COMMENT,
        payload:{
            dishId:dishId,
            rating:rating,
            author:author,
            comment:comment
        }
    }
)
//now adding dishes loader
export const loadDishes=dishes=>(
    {
        type:actions.LOAD_DISHES,
        payload:dishes
    }
)
//now middle thing which indicates dishes are loading
export const dishesLoading=()=>({
    type: actions.DISHES_LOADING
})
//comment fetcher

export const fetchComments=()=>{

}
//combined asynchronous reducer handler
export const fetchDishes=()=>{
    return dispatch=>{
        dispatch(dishesLoading());
        axios.get("http://localhost:3001/dishes")
        .then(response=>response.data)
        .then(dishes=>dispatch(loadDishes(dishes)))
        //dispatch(loadDishes(DISHES))
        
        
    }
}