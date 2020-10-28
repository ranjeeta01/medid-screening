import {SELECT} from './SelectItems'

const initialState = {
    selected:""
}

const SelectReducer = (state = initialState, action) =>{
    switch(action.type){
        case SELECT: return{
            selected: action.payload
        }
        default: return state
    }
}

export default SelectReducer