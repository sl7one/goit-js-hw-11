import { refs, btnLoadMore } from './js/refs.js';
import { render } from './js/render.js';
import { request } from './js/requestAPI.js';
import { render } from './js/render.js';
import { query } from './js/query.js';
import { notifyMessage } from './js/notify.js';
import { smoothScroll } from './js/smoothScroll.js';

refs.form.addEventListener('submit', onClickSerch);

async function onClickSerch(event) {
  event.preventDefault();
  try {
    const userQuery = event.currentTarget.elements[0].value
      .trim()
      .toLowerCase();

    query.setQuery(userQuery);
    render.clear();
    query.resetPage();

    const data = await request(userQuery);
    const { hits, totalHits } = data;

    notifyMessage.checkForMessage(totalHits);
    btnLoadMore.checkForShow(totalHits);
    render.print(hits);

    refs.form.reset();
    smoothScroll(refs.gallery.offsetHeight, query.getPage());
  } catch {
    console.log('error data');
  }
}

//---------------------//

refs.loadMore.addEventListener('click', onClickLoadMore);
async function onClickLoadMore() {
  try {
    query.setNextPage();

    const data = await request(query.getQuery(), query.getPage());
    const { hits, totalHits } = data;

    notifyMessage.endOfPage(totalHits);
    btnLoadMore.checkForShow(totalHits);
    render.print(hits);
    smoothScroll(refs.gallery.offsetHeight, query.getPage());
  } catch {
    console.log('error data');
  }
}

//---------------------------//
