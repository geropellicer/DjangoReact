import {
   SELECT_APORTES_TAB,
   SELECT_EVENTOS_TAB
} from '../actions/types';

const initialState = {
    eventos: true,
    aportes: false
}

const personasTabsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_APORTES_TAB:
            return {eventos: false, aportes: true};
        case SELECT_EVENTOS_TAB:
            return {eventos: true, aportes: false};
        default:
            return state;
    }
}

export default personasTabsReducer;