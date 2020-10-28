import {SEARCH_RESULT } from "./SearchItems"

export const searchResult = searchItems => {
    return{
        type: SEARCH_RESULT,
        payload: searchItems
    }
}