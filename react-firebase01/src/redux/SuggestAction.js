import {SUGGEST} from "./SuggestItems"

export const suggestItems = suggestions => {
    return{
        type: SUGGEST,
        payload: suggestions
    }
}