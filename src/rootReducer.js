import { combineReducers } from "redux";

import photos from "./reducer.js";

const rootReducer = combineReducers({
  photos
});

export default rootReducer;
