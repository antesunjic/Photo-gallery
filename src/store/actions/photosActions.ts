import axios from "axios";
import { AppThunk } from "../..";
import { GetPhotosTypes } from "./actionTypes";
import { ResponseData } from "./interfaces";

export const getPhotosStart = () => ({
  type: GetPhotosTypes.GET_PHOTOS_START,
});

export const getPhotosSuccess = (response: ResponseData) => ({
  type: GetPhotosTypes.GET_PHOTOS_SUCCESS,
  response,
});

export const getPhotosFail = (err: string) => ({
  type: GetPhotosTypes.GET_PHOTOS_FAIL,
  err
});

export const getPhotos = (pageNumber: number):AppThunk => (dispatch) => {
  dispatch(getPhotosStart());
  axios
    .get(`https://picsum.photos/v2/list?page=${pageNumber}`)
    .then(({data}) => {
      dispatch(getPhotosSuccess(data as ResponseData));
    })
    .catch((err) => dispatch(getPhotosFail(err)));
};
