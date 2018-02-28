const initialState = {
  photos: [],
  selectedPhoto: undefined,
  view: "LIST"
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "GET_PHOTOS":
      return {
        ...state,
        photos: data
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
