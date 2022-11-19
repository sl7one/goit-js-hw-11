import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const render = {
  print(data) {
    const markup = data.reduce((acc, item) => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = item;

      return (acc += `<div class="photo-card">
      <a href='${largeImageURL}'>
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width='300' height='200'/>
      </a>
        <div class="info"><p class="info-item">Likes :
            <b>${likes}</b></p><p class="info-item">Views :<b> ${views}</b></p>
          <p class="info-item">Comments :<b> ${comments}</b></p><p class="info-item">Downloads :
            <b> ${downloads}</b>
          </p>
        </div>
      </div>`);
    }, '');

    refs.gallery.insertAdjacentHTML('beforeend', markup);

    const lightbox = new SimpleLightbox('.gallery a', {
      scrollZoom: false,
      captionType: 'alt',
      captionsData: 'alt',
    });
  },
  clear() {
    refs.gallery.innerHTML = '';
  },
};
