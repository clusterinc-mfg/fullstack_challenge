//TODO: Setup the Term Reducer
/*
    the inital state should be an empty string
    the reducer should have one case to update the term
*/


import { TermActionTypes } from './term.actions'

const initialState = ""

export default (state=initialState, action) => {
    switch(action.type){
        case TermActionTypes.updateTerm: {
            return action.payload
        }
        default: return state
    }
}