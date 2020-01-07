import { FilterActionTypes } from "./filter.actions"

//TODO: Setup the Filter Reducer
/*
    the inital state should be an empty string
    the reducer should have one case to update the filter
*/

const initialState = ""

export default (state=initialState, action) => {
    switch(action.type){
        case FilterActionTypes.updateFilter: {
            return action.payload
        }
        default: return state
    }
}