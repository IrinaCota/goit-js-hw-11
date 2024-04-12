export function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  
  const API_KEY = '?key=43339942-99901bbe97dd078ee80d94f6e';
  const SEARCH_PARAMS = `&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + API_KEY + SEARCH_PARAMS;

  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err.status);
    });
}


