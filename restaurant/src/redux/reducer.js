
//import COMMENTS from '../datas/comments'
import {combineReducers} from 'redux'
import * as actions from './actionTypes'
import {createInitialContactForm} from './forms'
import {actionTypes, createForms} from 'react-redux-form'
//initial state defination
//initializing two reducer for two case
const dishReducer=(dishState={isLoading:false,dishes:[],errorMessage:null},action)=>{
    //using switch
    switch (action.type){
        case actions.DISHES_LOADING:
            return{
                ...dishState,
                isLoading:true,
                dishes:[],
                errorMessage:null
            }
        case actions.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload,
                errorMessage:null
            }
        case actions.DISH_LOADING_FAILED:
            return{
                ...dishState,
                isLoading:false,
                dishes:[],
                errorMessage:action.payload
            }
        default:
            return dishState;
    }
   
}
const commentReducer=(commentsState={isLoading:false,comments:[]},action)=>{
    switch (action.type){
        case actions.COMMENT_LOADING:
            return{
                ...commentsState,
                isLoading:true,
                comments:[]
            }
        case actions.LOAD_COMMENTS:
            return{
                ...commentsState,
                isLoading:false,
                comments:action.payload
            }
        case actions.ADD_COMMENT:
             //console.log(action)
            let comment=action.payload;
            return{
                ...commentsState,
                comments:commentsState.comments.concat(comment)
            }
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
