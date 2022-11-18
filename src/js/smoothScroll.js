export function smoothScroll(height, page) {
  const options = {
    top: height / page / 4,
    behavior: 'smooth',
  };
  window.scrollBy(options);
}
