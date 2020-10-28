import {SELECT} from "./SelectItems"

export const selectItems = item => {
    return{
        type: SELECT,
        payload: item
    }
}