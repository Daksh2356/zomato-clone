import { GET_REVIEW, POST_REVIEW } from "./review.type";

const intialState = {
  reviews: {
    reviews: [],
  },
};

const reviewReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews.reviews],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;
