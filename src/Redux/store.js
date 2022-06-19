import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

function saveToLocalStorage(state) {

    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);

}

function loadFromLocalStorage() {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
 
}

const store = createStore(rootReducer, loadFromLocalStorage());

store.subscribe(() => saveToLocalStorage(store.getState()));


export default store;

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
