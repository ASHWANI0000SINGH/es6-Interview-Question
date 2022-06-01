import { BUY_BOOK } from "../actions/actionType"

const initialBookState={
    noOfBooks:50
}

  export const bookReducer=(state=initialBookState,action)=>{
    switch(action.type){
        case BUY_BOOK :
        return{
noOfBooks:state.noOfBooks-1
        }
    default :
    return state
}
}