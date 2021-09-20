import DISHES from '../datas/dishes'
import COMMENTS from '../datas/comments'
//initial state defination
const initialState = {
    dishes:DISHES,
    comments:COMMENTS,
    sample_text:"Hello world"
}
//the reducer function which we are using
export const reducer = (state=initialState, action)=>{
    if(action.type==='ADD_COMMENT'){
        //console.log(action)
        let comment=action.payload;
        comment.id=state.comments.length //comments length
        comment.date=new Date().toDateString();
        return{
            ...state,
            comments: state.comments.concat(comment)
        }
    }
    return state;
}
