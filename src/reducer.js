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
      return {
        ...state,
        photos: [...state.photos, ...action.payload]
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
    case "DISABLE_BUTTON":
      return {
        ...state,
        button: action.button
      };
    default:
      return state;
  }
}
