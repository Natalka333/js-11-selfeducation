import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from "notiflix";
import pixabayApi from './pixabayApi'
import { renderCardImage } from "./renderCard";
import { fetchImages } from "./pixabayApi";

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loadBtn = document.querySelector('.btn-load');

let page = 1;
let query = '';

formEl.addEventListener('submit', handlechooseImage);

function handlechooseImage(event) {
    event.preventDefault();
}