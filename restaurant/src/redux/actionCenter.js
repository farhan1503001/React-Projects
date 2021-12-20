import * as actions from './actionTypes'
import axios from 'axios'
import { base_url } from './base_url';
export const addComment=(dishId,rating,author,comment)=>dispatch=>{ const newcomment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    };
    newcomment.date=new Date().toISOString();
    axios.post(base_url+'comments',newcomment)
    .then(response=>response.data)
    .then(comment=>dispatch(commentConcat(comment)))

}

//this will post comment update on redux store
export const commentConcat=comment=>(
    {
        type:actions.ADD_COMMENT,
        payload:comment
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
export const commentsLoading=()=>(
    {
        type:actions.COMMENT_LOADING
    }
)
export const loadComments=(comments)=>(
    {
        type:actions.LOAD_COMMENTS,
        payload:comments
    }
)
export const fetchComments=()=>{
    return dispatch=>{
        dispatch(commentsLoading());
        axios.get("http://localhost:3001/comments")
        .then(response=>response.data)
        .then(comments=>dispatch(loadComments(comments)))
    }

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