//TODO: Setup the filter actions
/*
    * Create an enumerated value called FilterActionTypes
        it should have one value called updateFilter

    * Create an action creator called updateFilter that updates the filter state.
*/

export enum FilterActionTypes {
    updateFilter = "UPDATE_FILTER"
}

export const updateFilter = (filter:string) => {
    return{
        type: FilterActionTypes.updateFilter,
        payload: filter
    }
}