export function loadPhotos() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.unsplash.com/photos/random?client_id=13496fbd01ff277f33270e024725a14c05ce91dae7ff1c3e793ad336090d4d7b&orientation=landscape&count=6"
    );
    const photos = await res.json();
    return dispatch({
      type: "LOAD_PHOTOS",
      data: photos
    });
  };
}

export function getPhotos() {
  return async function(dispatch) {
    const res = await fetch(
      "https://api.unsplash.com/photos/random?client_id=13496fbd01ff277f33270e024725a14c05ce91dae7ff1c3e793ad336090d4d7b&orientation=landscape&count=6"
    );
    const photos = await res.json();
    return dispatch({
      type: "GET_PHOTOS",
      payload: photos
    });
  };
}

export function navigate(view) {
  return {
    type: "NAVIGATE",
    view: view
  };
}

export function showDetail(id) {
  return {
    type: "SHOW_DETAIL",
    view: "DETAIL",
    selectedPhoto: id
  };
}
