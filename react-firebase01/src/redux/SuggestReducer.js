import {SUGGEST} from './SuggestItems'

const initialState = {
    suggestions:[]
}

const SuggestReducer = (state = initialState, action) =>{
    switch(action.type){
        case SUGGEST: return{
            suggestions: action.payload
        }
        default: return state
    }
}

export default SuggestReducer