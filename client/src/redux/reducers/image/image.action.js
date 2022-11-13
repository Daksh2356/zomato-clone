import axios from "axios";
import { API_URL } from "../../../key";

// redux types
import { GET_IMAGE } from "./image.type";

export const getImage = (_id) => async (dispatch) => {
  try {
    const image = await axios({
      method: "GET",
      url: `${API_URL}image/${_id}`,
    });
    return dispatch({ type: GET_IMAGE, payload: image.data.image });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
