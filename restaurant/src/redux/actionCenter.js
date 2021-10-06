import * as actions from './actionTypes'
import DISHES from '../datas/dishes.js'
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
//combined asynchronous reducer handler
export const fetchDishes=()=>{
    return dispatch=>{
        dispatch(dishesLoading());

        
         setTimeout(() => {
            dispatch(loadDishes(DISHES))
        },
        2000);
        //dispatch(loadDishes(DISHES))
        
        
    }
}