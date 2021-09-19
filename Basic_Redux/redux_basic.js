
const redux_file=require('redux');
console.log(redux_file);
//defining a reducer function
//creating a initial state
const initialState = {
    num:0
}
const rootReducer=(state=initialState,action)=>{
    if(action.type==='INC_NUM'){
        return{
            ...state,
            num: state.num+action.val
        }
    }
    if(action.type==='ADD_NUM'){
        return{
            ...state,
            num:state.num+action.value
        }
    }
    return state;
}
//now creating a redux store
const store=redux_file.createStore(rootReducer)
//console.log(store);
//seeing redux state
console.log("Initial state: ",store.getState())

//now performing action on redux
store.dispatch({
    type:"INC_NUM",
    val:1
})
console.log(store.getState())
store.dispatch({ 
    type:'ADD_NUM',
    value:33
})
console.log(store.getState())
