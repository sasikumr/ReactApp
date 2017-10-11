import * as ActionTypes from '../constants/actionTypes'
import { Action, Reducer } from 'redux';
export interface StatesState {
    states: State[];
}
interface State {
    Code: string;
}

interface FetchStateRequest { type: 'GET_STATES_REQUEST' }
interface FetchStateSuccess { type: 'GET_STATES_SUCCESS', states }
interface FetchStatesFailed { type: 'GET_STATES_FAILED' }
type KnownAction = FetchStateSuccess | FetchStateRequest | FetchStatesFailed;

export const actionCreators = {
    fetchStateRequest: () => <FetchStateRequest>{ type: 'GET_STATES_REQUEST' },
    fetchStateSuccess: (states) => <FetchStateSuccess>{ type: 'GET_STATES_SUCCESS', states },
    fetchStatesFailed: () => <FetchStatesFailed>{ type: 'GET_STATES_FAILED' }
};


export const reducer: Reducer<StatesState> = (state: StatesState, action: KnownAction) => {
    switch (action.type) {
        case 'GET_STATES_SUCCESS':
            return Object.assign([], state, action.states);      
        case 'GET_STATES_REQUEST':
        case 'GET_STATES_FAILED':
            return Object.assign([], null,null);
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? [] : state;
};
