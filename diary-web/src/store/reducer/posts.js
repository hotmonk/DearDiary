import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: null,
  loaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.posts,
        loaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
