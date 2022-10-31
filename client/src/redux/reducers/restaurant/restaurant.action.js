import axios from "axios";

// reducer types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getAllRestros = () => async (dispatch) => {
  try {
    const restaurants = await axios({
      method: "GET",
      url: "http://localhost:4000/restaurant?city=NCR",
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
      url: `http://localhost:4000/restaurant/${id}`,
    });

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurant.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
