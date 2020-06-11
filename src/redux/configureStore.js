import { createStore } from 'react';
import { Reducer, initialState } from './reducer';


export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}