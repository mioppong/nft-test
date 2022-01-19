import axios from "axios";
import types from "./actionTypes";
import config from "../config";

export const getData = (payload) => async (dispatch) => {
  dispatch({ type: types.MAKE_REQUEST });

  const { displayName, page } = payload;

  const url = `${config.nfts}startInclusive=${0}&endExclusive=${25}&nft_filter_string={"collection":"${displayName}"}`;
  const response = await axios.get(url).catch((err) => {
    return dispatch({ type: types.GET_DATA_FAILURE });
  });

  dispatch({
    type: types.GET_DATA_SUCCESS,
    payload: response.data.result.nfts,
  });
};

export const getDataCollections = (payload) => async (dispatch) => {
  dispatch({ type: types.MAKE_REQUEST });

  const url = `${config.collection_page}startInclusive=${0}&endExclusive=${25}`;

  const response = await axios.get(url).catch((err) => {
    return dispatch({ type: types.GET_DATA_FAILURE });
  });

  dispatch({
    type: types.GET_COLLECTIONS_SUCCESS,
    payload: response.data.result.collections,
  });
};
export const logout = () => async (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
