import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState= [];
export default (state=initialState, action)=>{

    switch(action.type){
        case ADD_TODO:
            console.log("in reducer",action.payload);
            return [...state,action.payload];

        case DELETE_TODO:
            const newState= state.filter((todo)=>todo.id != action.payload)
            return newState;

        case UPDATE_TODO:
            const updatedState = state.map(todo=>{
                if(todo.id == action.payload.id){
                    todo.title= action.payload.title;
                    todo.description = action.payload.description;
                }
                return todo;
            })

            return updatedState;

        default:
            return state;
        
    }
}