const initialState = {
  photos: []
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "GET_PHOTOS":
      return {
        ...state,
        photos: data
      };
    default:
      return state;
  }
}
