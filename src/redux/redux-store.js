import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import competitionsReducer from "./competitions-reducer";
import teamsReducer from "./teams-reducer";

const reducers = combineReducers({
    competitionsState: competitionsReducer,
    teamsState: teamsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;