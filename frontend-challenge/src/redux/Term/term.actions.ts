//TODO: Setup the term actions
/*
    * Create an enumerated value called TermActionTypes
        it should have one value called updateTerm

    * Create an action creator called updateTerm.  It should update the term piece of state.
*/



export enum TermActionTypes {
    updateTerm = "UPDATE_TERM"
}

export const updateTerm = (searchTerm:string) => {
    return{
        type: TermActionTypes.updateTerm,
        payload: searchTerm
    }
}