import { GET_REVIEW, POST_REVIEW } from "./review.type";

const initialState = {
  reviews: {
    review: [],
  },
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    case POST_REVIEW:
      return {
        ...state,
        reviews: {
          review: [action.payload, ...state.reviews.review],
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reviewReducer;
