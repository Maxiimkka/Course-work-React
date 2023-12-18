import { Reducer } from 'redux';
import { User, RegisterUserAction } from './actions';

interface State {
  user: User | null;
}

type ActionTypes = RegisterUserAction;

const initialState: State = {
  user: null,
};

const reducer: Reducer<State, ActionTypes> = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;