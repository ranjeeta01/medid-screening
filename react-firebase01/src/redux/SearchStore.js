import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from "redux-logger";
import RootReducer from './RootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const SearchStore = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk),)
)

export default SearchStore