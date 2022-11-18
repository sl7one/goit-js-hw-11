import { Notify } from 'notiflix';
import { per_page } from './requestAPI';

export const query = {
  value: '',
  increment: 1,

  setQuery(query) {
    this.value = query;
  },

  setNextPage() {
    this.increment += 1;
  },

  getQuery() {
    return this.value;
  },

  getPage() {
    return this.increment;
  },

  resetPage() {
    this.increment = 1;
  },
};
