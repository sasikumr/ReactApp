import * as ActionTypes from '../constants/actionTypes'
import { Action, Reducer } from 'redux';

export interface ValidatioNmessageState {
    errors: ErrorMessage;
}

export interface ErrorMessage {
    fieldName: string;
    errorMessage: string;
}


interface AddErrorMessage { type: 'ADD_ERROR_MESSAGE', fieldName, errorMessage }




export const actionCreators = {
    addErrorMessage: (fieldName: string, errorMessage: string) => <AddErrorMessage>{ type: 'ADD_ERROR_MESSAGE' ,fieldName, errorMessage},
   
};
type KnownAction = AddErrorMessage

export const reducer: Reducer<ValidatioNmessageState[]> = (state: ValidatioNmessageState[], action: KnownAction) => {
    switch (action.type) {
       case "ADD_ERROR_MESSAGE":
            if (state !== null && state !== undefined) {
                let isExist = false;
                let newobj = state.map((error: any) => {
                    if (error.fieldName === action.fieldName) {
                        isExist = true;
                        return Object.assign({}, error, { errorMessage: action.errorMessage });
                    }
                    else {
                        return error;
                    }
                });
                if (!isExist) {
                    return [
                        ...state,
                        {
                            fieldName: action.fieldName,
                            errorMessage: action.errorMessage
                        }]
                }
                else {
                    return newobj;
                }
            }
            else {
                return [
                    ...state,
                    {
                        fieldName: action.fieldName,
                        errorMessage: action.errorMessage
                    }]
            }
    }

    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state === undefined ? [] : state;
};
