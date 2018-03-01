import _ from "lodash";

const initialState = {
  photos: [],
  selectedPhoto: undefined,
  view: "LIST",
  button: "TEXT_ICON"
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "LOAD_PHOTOS":
      return {
        ...state,
        photos: data
      };
    case "GET_PHOTOS":
      const duplicates = [...state.photos, ...action.payload];
      const uniq = _.uniqBy(duplicates, "id");
      return {
        ...state,
        photos: uniq
      };
    case "NAVIGATE":
      return {
        ...state,
        view: action.view
      };
    case "SHOW_DETAIL":
      return {
        ...state,
        view: "DETAILS",
        selectedPhoto: action.selectedPhoto
      };
    default:
      return state;
  }
}
