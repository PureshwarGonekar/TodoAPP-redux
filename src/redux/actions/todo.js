import { ADD_TODO, DELETE_TODO, DEL_EDIT_TODO, EDIT_TODO, UPDATE_TODO } from "./action-types";

export const addTodo= (todo)=>({
    type: ADD_TODO,
    payload:todo
})

export const deleteTodo= (id)=>({
    type: DELETE_TODO,
    payload:id
})

export const updateTodo= (todo)=>({
    type: UPDATE_TODO,
    payload:todo
})

export const editTodo= (todo,id)=>({
    type: EDIT_TODO,
    payload:todo
})


export const deleteEditTodo= (id)=>({
    type: DEL_EDIT_TODO,
    payload:id
})