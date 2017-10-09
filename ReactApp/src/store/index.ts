//import * as WeatherForecasts from './WeatherForecasts';
//import * as Counter from './Counter';

import * as Loader from './Loader';
import * as Prospect from './Prospect';
import * as States from './States';
import * as ValidationMessage from './ValidationMessage';

//// The top-level state object
//export interface ApplicationState {
//    counter: Counter.CounterState;
//    weatherForecasts: WeatherForecasts.WeatherForecastsState;
//}


export interface ApplicationState {
    ProspectDetail: Prospect.ProspectState;
    isLoading: Loader.LoaderState;
    states: States.StatesState;
    errors: ValidationMessage.ValidatioNmessageState[];
    agentCode: Prospect.AgentCodeState;
}
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    isLoading: Loader.reducer,
    states: States.reducer,
    ProspectDetail: Prospect.reducer,
    errors: ValidationMessage.reducer,
    agentCode: Prospect.agentCodereducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
