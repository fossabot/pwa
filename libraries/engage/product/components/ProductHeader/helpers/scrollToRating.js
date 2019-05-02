/**
 * Scrolls page to reviews excerpt.
 */
export function scrollToRating() {
  const reviewsExcerpt = document.getElementById('reviewsExcerpt');

  if (
    typeof reviewsExcerpt !== 'object' ||
    !reviewsExcerpt ||
    !reviewsExcerpt.offsetTop ||
    !reviewsExcerpt.closest ||
    !reviewsExcerpt.closest('article')
  ) {
    return;
  }

  reviewsExcerpt
    .closest('article')
    .scroll(0, reviewsExcerpt.offsetTop - 30);
}
