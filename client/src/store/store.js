import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/combineReducer';
const init = {}
const middleWare = [thunk]
const store = createStore(rootReducer, init, compose(
    applyMiddleware(...middleWare)
));
export default store;