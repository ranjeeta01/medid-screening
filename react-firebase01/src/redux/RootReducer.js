import {combineReducers} from 'redux'
import SearchReducer from './SearchReducer'
import SuggestReducer from './SuggestReducer'
import SelectReducer from './SelectReducer'

 const RootReducer = combineReducers({
     result: SearchReducer,
     suggestion: SuggestReducer,
     selected: SelectReducer
 })

 export default RootReducer