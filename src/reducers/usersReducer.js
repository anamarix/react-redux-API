import { GET_USERS, LOADING, ERROR } from "../types/usersTypes";

const INITIAL_STATE = {
  usuarios: [],
  loading: false,
  error :''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, usuarios: action.payload, loading:false, error:'' };

    case LOADING:
      return {...state, loading:true};

      case ERROR:
      return {...state, error:action.payload, loading: false};

    default:
      return state;
  }
};
