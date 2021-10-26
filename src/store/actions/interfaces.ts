import { GetPhotosTypes } from "./actionTypes";

export interface ResponseData {
  photos: {
    id: string | number,
    author: string,
    width: number,
    height: number,
    url: string,
    download_url: string
  }[]
}

interface GetPhotosStart{
    type: typeof GetPhotosTypes.GET_PHOTOS_START
}

interface GetPhotosSuccess{
    type: typeof GetPhotosTypes.GET_PHOTOS_SUCCESS,
    response: ResponseData[]
}

interface GetPhotosFail{
    type: typeof GetPhotosTypes.GET_PHOTOS_FAIL,
    error: string
}

export type GetPhotosActions = GetPhotosStart | GetPhotosSuccess | GetPhotosFail 