import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from "notiflix";
// import { renderCardImage } from "./renderCard";
import { fetchImages } from "./pixabayApi";

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadBtn = document.querySelector('.btn-load');

let page = 1;
let query = '';
const perPage = 40;

let simpleLightbox;

formEl.addEventListener('submit', handlechooseImage);

function renderCardImage(images) {
    if (!galleryEl) {
        return;
    }
    const murkup = images
        .map(image => {
            const { id, webformatURL, largeImageURL, tags, likes, views, comments,
                downloads } = image;
            return `<a class="gallery_link" href="${largeImageURL}">
<div class="photo-card" id="${id}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
            <b>Views: ${views}</b>
        </p>
        <p class="info-item">
            <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
            <b>Downloads: ${downloads}</b>
        </p>
    </div>
</div>
</a>
`
        }).join('');
    galleryEl.insertAdjacentHTML('beforeend', murkup);
};





function handlechooseImage(event) {
    event.preventDefault();
    page = 1;

    query = event.currentTarget.elements.searchQuery.value.trim();
    console.log(query);
    galleryEl.innerHTML = '';

    if (query === '') {
        Notiflix.Notify.info('Please specify your search query');
        return;
    };

    fetchImages(query, page, perPage)
        .then(data => {
            if (data.hits.length * page === data.totalHits) {
                loadBtn.classList.add('unvisible');
            } else {
                loadBtn.classList.remove('unvisible');
            }

            if (data.totalHits === 0) {
                Notiflix.Notify.info('Sorry, there are no images matching your search query. Please try again.')
            } else {
                renderCardImage(data.hits);
                simpleLightboxPlugin();
                Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            formEl.reset();
        });

};

const handleloadMoreImages = () => {
    page += 1;

    fetchImages(query, page, perPage)
        .then(data => {
            if (perPage * page >= data.totalHits) {
                loadBtn.classList.add('unvisible');
                Notiflix.Notify.info(`We're sorry, but you've reached the end of search results.`)
            }

            if (data.page === data.totalHits) {
                loadBtn.classList.add('unvisible');
            }
            renderCardImage(data.hits);
            simpleLightboxPlugin();

        })
        .catch(error => console.log(error));
};



function simpleLightboxPlugin() {
    if (simpleLightbox) {
        simpleLightbox.refresh();
    } else {
        simpleLightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
            enableKeyboard: true,
        });
    }

}

loadBtn.addEventListener('click', handleloadMoreImages);