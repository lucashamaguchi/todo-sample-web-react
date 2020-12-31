import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { initialState } from "./modules";

const reducer = (state: any = initialState, action: any) => {
  console.log("reducer state", state)
  console.log("reducer action", action)
  return {
    ...state,
    [action.type]: action.value
  }
}

const composeEnhancers =
  (window as any).window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appReducer = combineReducers({
  getters: reducer
});

const rootReducer = (state: any, action: any) => appReducer(state, action);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
