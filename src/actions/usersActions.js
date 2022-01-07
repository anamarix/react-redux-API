import axios from "axios";
import {ERROR, GET_USERS, LOADING} from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });
try {
  const respuesta = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: GET_USERS,
    payload: respuesta.data
  });
} catch(err){
  dispatch({
    type:ERROR,
    payload: "Something went wrong. Please try again later!"
  })
}
};