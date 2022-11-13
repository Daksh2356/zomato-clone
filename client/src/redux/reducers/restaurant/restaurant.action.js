import axios from "axios";
import { API_URL } from "../../../key";

// redux types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getAllRestros = () => async (dispatch) => {
  try {
    const restaurants = await axios({
      method: "GET",
      url: `${API_URL}restaurant?city=NCR`,
    });

    return dispatch({
      type: GET_RESTAURANT,
      payload: restaurants.data.restaurants,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getSpecificRestro = (id) => async (dispatch) => {
  try {
    const restaurant = await axios({
      method: "GET",
      url: `${API_URL}restaurant/${id}`,
    });

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurant.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
