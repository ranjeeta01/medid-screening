import {SEARCH_RESULT} from './SearchItems'

const initialState = {
    results:[]
}

const SearchReducer = (state = initialState, action) =>{
    switch(action.type){
        case SEARCH_RESULT: return{
            results: action.payload
        }
        default: return state
    }
}

export default SearchReducer