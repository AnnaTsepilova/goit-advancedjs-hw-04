import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchImages from './js/api-service.js';
import renderGallery from './js/render-gallery.js';

import notificationMessage from './js/notifications.js';

const inputRef = document.querySelector('.search-form input');
const searchForm = document.querySelector('.search-form');
const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});

let page = 1;

searchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  window.scrollTo(0, 0);
  page = 1;
  const searchQuery = inputRef.value.trim().toLowerCase();

  if (searchQuery === '') {
    notificationMessage('warningSQ');
    cleanOutput();
    return;
  }

  try {
    const images = await fetchImages(searchQuery);

    if (images.hits.length === 0) {
      loadMoreBtn.classList.add('is-hidden');
      notificationMessage('error');
      cleanOutput();
      return;
    }

    toggleLoadMoreBtn(images);

    notificationMessage('success', images);
    galleryContainer.innerHTML = renderGallery(images);
    gallery.refresh();
  } catch (error) {
    onFetchError(error);
  }
}

async function onLoadMore() {
  const searchQuery = inputRef.value.toLowerCase();

  if (!searchQuery) {
    notificationMessage('warningSQ');
    cleanOutput();
    return;
  }
  page += 1;

  const images = await fetchImages(searchQuery, page);

  toggleLoadMoreBtn(images);

  if (images.hits.length === 0) {
    notificationMessage('warningEnd');
    return;
  }
  const renderedGallery = renderGallery(images);
  galleryContainer.insertAdjacentHTML('beforeend', renderedGallery);

  gallery.refresh();

  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function toggleLoadMoreBtn(images) {
  if (images.hits.length < 40) {
    loadMoreBtn.classList.add('is-hidden');
    notificationMessage('warningEnd');
  } else {
    loadMoreBtn.classList.remove('is-hidden');
  }
}

function onFetchError(error) {
  cleanOutput();
  notificationMessage('error');
  console.log(error);
}

function cleanOutput() {
  galleryContainer.innerHTML = '';
}
