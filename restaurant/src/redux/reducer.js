
import COMMENTS from '../datas/comments'
import {combineReducers} from 'redux'
import * as actions from './actionTypes'
import {createInitialContactForm} from './forms'
import {createForms} from 'react-redux-form'
//initial state defination
//initializing two reducer for two case
const dishReducer=(dishState={isLoading:false,dishes:[]},action)=>{
    //using switch
    switch (action.type){
        case actions.DISHES_LOADING:
            return{
                ...dishState,
                isLoading:true,
                dishes:[]
            }
        case actions.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload
            }
        default:
            return dishState;
    }
   
}
const commentReducer=(commentsState=COMMENTS,action)=>{
    switch (action.type){
        case actions.ADD_COMMENT:
             //console.log(action)
            let comment=action.payload;
            comment.id=commentsState.length //comments length
            comment.date=new Date().toDateString();
            return commentsState.concat(comment)
        default:
            return commentsState;

    }
}
//the reducer function which we are using now combined
export const reducer = combineReducers({
    'dishes':dishReducer,
    'comments':commentReducer,
    ...createForms(
        {
            feedback:createInitialContactForm
        }
    )
})
