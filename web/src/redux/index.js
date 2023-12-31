import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import indexModel from './reducers/index'

const store = createStore(combineReducers({
    indexModel
}), composeWithDevTools(applyMiddleware(thunk)))

export default store
