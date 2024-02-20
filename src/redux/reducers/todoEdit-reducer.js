import { DEL_EDIT_TODO, EDIT_TODO } from "../actions/action-types";

const initialState= {};
export default (state=initialState, action)=>{

    switch(action.type){
        case EDIT_TODO:
            console.log("add edit todo",action.payload);
            return action.payload;

        case DEL_EDIT_TODO:
            return {};
        default:
            return state;
        
    }
}