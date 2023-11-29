export default function renderGallery(images) {
  return images.hits
    .map(image => {
      return `            
            <div class="photo-card gallery__item">
                <a class="gallery__link" href="${image.largeImageURL}">
                    <img class="gallery__image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                        <b>Likes</b> ${image.likes}
                        </p>
                        <p class="info-item">
                        <b>Views</b> ${image.views}
                        </p>
                        <p class="info-item">
                        <b>Comments</b> ${image.comments}
                        </p>
                        <p class="info-item">
                        <b>Downloads</b> ${image.downloads}
                        </p>
                    </div>
                </a>
            </div>
            `;
    })
    .join('');
}