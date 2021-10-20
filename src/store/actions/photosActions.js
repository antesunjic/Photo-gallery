import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getPhotosStart = () => ({
  type: actionTypes.GET_PHOTOS_START,
});

export const getPhotosSuccess = (response) => ({
  type: actionTypes.GET_PHOTOS_SUCCESS,
  response,
});

export const getPhotosFail = () => ({
  type: actionTypes.GET_PHOTOS_FAIL,
});

export const getPhotos = (pageNumber) => (dispatch) => {
  dispatch(getPhotosStart());
  axios
    .get(`https://picsum.photos/v2/list?page=${pageNumber}`)
    .then((response) => {
      dispatch(getPhotosSuccess(response.data));
    })
    .catch((err) => dispatch(getPhotosFail(err)));
};
