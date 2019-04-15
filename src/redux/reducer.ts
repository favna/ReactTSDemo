import { AnyAction, Reducer } from 'redux';
import { DemoActions, DemoState } from './types';

const initialState: DemoState = {
    count: 0,
};

const reducer: Reducer<DemoState> = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case DemoActions.INCREMENT: {
            console.log('in the reducer');
            return {...state, count: state.count + action.payload };
        }

        case DemoActions.DECREMENT: {
            return {...state, count: state.count - action.payload };
        }

        case DemoActions.INCREMENT_ASYNC: {
            return {...state, count: state.count + action.payload };
        }

        case DemoActions.DECREMENT_ASYNC: {
            return {...state, count: state.count - action.payload };
        }

        default: {
            return state;
        }
    }
};

export default reducer;