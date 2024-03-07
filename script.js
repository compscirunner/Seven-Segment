const segments = document.querySelectorAll('.segment');

segments.forEach(segment => {
  segment.addEventListener('click', () => {
    segment.classList.toggle('active');
  });
});
