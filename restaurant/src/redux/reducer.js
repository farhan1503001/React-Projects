import DISHES from '../datas/dishes'
import COMMENTS from '../datas/comments'
import {combineReducers} from 'redux'
//initial state defination
//initializing two reducer for two case
const dishReducer=(dishState=DISHES,action)=>{
    return dishState;
}
const commentReducer=(commentsState=COMMENTS,action)=>{
    if(action.type==='ADD_COMMENT'){
        //console.log(action)
        let comment=action.payload;
        comment.id=commentsState.length //comments length
        comment.date=new Date().toDateString();
        return commentsState.concat(comment)
    }
    return commentsState;
}
//the reducer function which we are using now combined
export const reducer = combineReducers({
    'dishes':dishReducer,
    'comments':commentReducer
})
