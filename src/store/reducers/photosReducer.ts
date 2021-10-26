import { GetPhotosTypes } from "../actions/actionTypes";
import { GetPhotosActions } from "../actions/interfaces";

import { ResponseData } from "../actions/interfaces";

const initialState: ResponseData = {
  photos: [],
};

const getPhotosStart = (state: ResponseData) => ({
  ...state
});

const getPhotosSuccess = (state: ResponseData, action: GetPhotosActions) => {
  if ('response' in action)
    return {
      ...state,
      photos: [...state.photos, ...action.response],
    };
  else return state;
};

const getPhotosFail = (state: ResponseData, action: GetPhotosActions) => ({
  ...state
})

const photosReducer = (state = initialState, action: GetPhotosActions) => {
  switch (action.type) {
      case GetPhotosTypes.GET_PHOTOS_START:
        return getPhotosStart(state)
      case GetPhotosTypes.GET_PHOTOS_SUCCESS:
        return getPhotosSuccess(state, action)
      case GetPhotosTypes.GET_PHOTOS_FAIL:
        return getPhotosFail(state, action)
    default:
      return { ...state };
  }
};

export default photosReducer;
