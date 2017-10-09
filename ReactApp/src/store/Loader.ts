import * as ActionTypes from '../constants/actionTypes'
import { Action, Reducer } from 'redux';
export interface LoaderState {
    isLoading: boolean;
}

interface LoaderBegin { type: 'LOADER_BEGIN' }
interface LoaderEnd { type: 'LOADER_END' }



type KnownAction = LoaderBegin | LoaderEnd;

export const actionCreators = {
    loaderBegin: () => <LoaderBegin>{ type: 'LOADER_BEGIN' },
    loaderEnd: () => <LoaderEnd>{ type: 'LOADER_END' }
};


export const reducer: Reducer<LoaderState> = (state: LoaderState, action: KnownAction) => {
    switch (action.type) {
        case 'LOADER_BEGIN':
            return { isLoading: true };
        case 'LOADER_END':
            return { isLoading: false };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { isLoading: false };
};
