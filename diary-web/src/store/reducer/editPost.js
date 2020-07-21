import * as actionTypes from "../actions/actionTypes";

const initialState = {
  title: "",
  content: "",
  redirect: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_POST_TITLE:
      return {
        ...state,
        title: action.newTitle,
      };
    case actionTypes.UPDATE_POST_CONTENT:
      return {
        ...state,
        content: action.newContent,
      };
    case actionTypes.SET_POST:
      return {
        ...state,
        title: action.post.title,
        content: action.post.content,
        redirect: false,
      };
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        redirect: true,
      };
    case actionTypes.DELETE_POST:
      return {
        ...state,
        redirect: true,
      };
    default:
      return state;
  }
};

export default reducer;
