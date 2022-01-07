import axios from "axios";
import { GET_PER_USER } from "../types/publicationsTypes";
import * as usersTypes from "../types/usersTypes";


export const getForUser = (key) => async (dispatch, getState) => {
  let { usuarios } = getState().usersReducer;
  const { publications } = getState().publicationsReducer;
  const usuario_id = usuarios[key].id;

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`
  );

  const publicationsMap = publications.flat();
  const isDoubled = publicationsMap.some((el) => el.userId === usuario_id);

  let updated_publications = [];
  if (!isDoubled) {
    updated_publications = [...publications, response.data];
  } else {
    updated_publications = [...publications];
  }

  dispatch({
    type: GET_PER_USER,
    payload: updated_publications,
  });
};
