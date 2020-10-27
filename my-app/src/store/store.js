import listReducer from "./list-reducer";
import thunkMiddleware from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");

const reducers = combineReducers({
  list: listReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
