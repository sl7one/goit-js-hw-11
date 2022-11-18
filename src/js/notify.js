import { Notify } from 'notiflix';
import { per_page } from './requestAPI';
import { query } from './query.js';

export const notifyMessage = {
  checkForMessage(totalHits) {
    if (totalHits === 0) {
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      return Notify.success(`"Hooray! We found ${totalHits} images."`);
    }
  },

  endOfPage(totalHits) {
    if (Math.ceil(totalHits / per_page) === query.getPage()) {
      return Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
    }
  },
};
