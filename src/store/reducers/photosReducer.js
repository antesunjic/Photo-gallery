import * as actionTypes from "../actions/actionTypes";

const initialState = {
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PHOTOS_START:
      return { ...state };
    case actionTypes.GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: [...state.photos, ...action.response],
      };
    case actionTypes.GET_PHOTOS_FAIL:
      return { ...state };
    default:
      return { ...state };
  }
};

export default photosReducer;
