import DISHES from '../datas/dishes'
import COMMENTS from '../datas/comments'
//initial state defination
const initialState = {
    dishes:DISHES,
    comments:COMMENTS
}
//the reducer function which we are using
export const reducer = (state=initialState, action)=>{
    return state;
}
