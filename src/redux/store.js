import {combineReducers, createStore} from 'redux';
import todoReducer from "./reducers/todo-reducer";
import todoEditReducer from "./reducers/todoEdit-reducer";

const rootReducer = combineReducers({todoReducer,todoEditReducer}); // key value pair {todoReducer: todoReducer}

const store = createStore(rootReducer);

export default store;