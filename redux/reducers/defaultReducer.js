import types from "../actionTypes";

export const initialState = {
  // i kinda assumened there would only be 3 parts
  collections: [],
  nfts: [],
  favorites: [],
  loading: false,
  offset:25,
  collectionPage:0,
  nftPage:0
};

const defaultReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case types.MAKE_REQUEST:
      newState.loading = true;
      return newState;

    case types.GET_DATA_SUCCESS:
      console.log("REDUCER DATA SUCCESS",action.payload);
      newState.loading = false;
      newState.nfts = action.payload
      return newState;
    
      case types.MORE_DATA_SUCCESS:
      console.log("MORE DATA SUCCESS",action.payload);
      newState.loading = false;
      newState.nfts = newState.nfts.concat(action.payload)
      return newState;
    
      case types.GET_COLLECTIONS_SUCCESS:
      console.log("REDUCER COLLECTION SUCCESS");
      newState.loading = false;
      newState.collections = action.payload
      return newState;
      
      case types.MORE_COLLECTIONS_SUCCESS:
      console.log("REDUCER COLLECTION SUCCESS");
      newState.loading = false;
      newState.collections =newState.collections.concat( action.payload)
      return newState;

    case types.GET_DATA_FAILURE:
      console.log("REDUCER DATA FAILURE");
      newState.loading = false;
      return newState;

    case types.LOGOUT:
      console.log("logouting broski");
      return {};

    default:
      return newState;
  }
};

export default { initialState, reducer: defaultReducer };
