import axios from "axios";
import Notiflix from "notiflix";

const API_KEY = '38739030-af5614da71e4107ffbd422430';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// axios.interceptors.request.use(
//     response => {
//         return response;
//     }, error => {
//         Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
//         return Promise.reject(error);
//     }
// )

// async function fetchImages({ query, page, perPage }) {
//     const response = await axios.get(`?key=${API_KEY}&q=${query}&page=${page}&per_page${perPage}`);
//     return console.log(response.data);
//     // return response.data;

// };

// export { fetchImages };






const BACE_URL = 'https://pixabay.com/api/';

async function fetchImages({ query, page, perPage }) {
    const response = await axios.get(`${BACE_URL}?key=${API_KEY}&q=${query}&page=${page}&page={perPage}`, {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',

    })
        .then(response => response(console.log(response.data)))
        .catch(error => {
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
            return Promise.reject(error);
        });
}

export { fetchImages };

