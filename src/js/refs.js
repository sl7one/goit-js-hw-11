import { per_page } from './requestAPI';
import { query } from './query';

export const refs = {
  form: document.querySelector('#search-form'),
  btnSerch: document.querySelector('.searchButton'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

refs.loadMore.hidden = true;

export const btnLoadMore = {
  btn: refs.loadMore,
  checkForShow(totalHits) {
    const result = Math.ceil(totalHits / per_page);

    if (query.getPage() < result) {
      this.btn.hidden = false;
    } else {
      this.btn.hidden = true;
    }
  },
};
