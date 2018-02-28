const initialState = {
  photos: [],
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
    default:
      return state;
  }
}
